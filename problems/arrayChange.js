
const arrayChange = (inputArray)=>{
    
    const sizeOfInput = inputArray.length;
    let cont = 0
    const increase = ()=>{
        if(validateIncreasing(inputArray)){
            return cont
        }else{
            for(let i=0; i <= sizeOfInput-1; i++){
                if(typeof(inputArray[i+1]) === 'undefined'){
                    if(inputArray[i-1] === inputArray[i]){
                        let current_value = inputArray[i]
                        current_value++
                        inputArray[i] = current_value
                        cont++
                    }else if(inputArray[i-1] > inputArray[i]){
                        let current_value = inputArray[i]
                        current_value++
                        inputArray[i] = current_value
                        cont++
                    }
                }else{
                    if(inputArray[i] === inputArray[i+1]){
                        let current_value = inputArray[i+1]
                        current_value++
                        inputArray[i+1] = current_value
                        cont++
                    }else if(inputArray[i] > inputArray[i+1]){
                        let current_value = inputArray[i+1]
                        current_value++
                        inputArray[i+1] = current_value
                        cont++
                    } 
                }
            }
            increase()
        }
    }

    increase()
    return cont
}

const validateIncreasing = (inputArray) =>{
    let flag = false
    
    for(let i = 0; i <= inputArray.length; i++){
        if(typeof(inputArray[i+1]) === 'undefined'){
            return flag
        }else{
            if(inputArray[i]<inputArray[i+1]){
                flag = true
            }
            else{
                return false
            }
        }
         
    }
    return flag
}

module.exports = arrayChange;