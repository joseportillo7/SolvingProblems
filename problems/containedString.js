const containedString = (inputString, inputString2) =>{
    const input = inputString.toLowerCase()
    const auxinput = input.split('')

    const input2 = inputString2.toLowerCase()
    const auxinput2 = input2.split('')

    let stack = []
    let contLetters = 0
    let deleteArray = []
    let auxflag = false

    if(auxinput.length > auxinput2) return 0

    const validateString = ()=>{
        let str = ''
        auxinput.forEach(elementa => {
            let flag = false
            for(let i =0; i< auxinput2.length; i++){
                if(!flag){
                    if(auxinput2[i] === elementa){
                        str+= auxinput2[i]
                        deleteArray.push(i)
                        flag = true
                    }
                }
            }
        });

        //validate if stack[pos] === input
        if(str === input){
            stack.push(str)
            if(deleteArray.length > 0){
                let contDelete = 0
                deleteArray.forEach(element =>{
                    if(element !== 0){
                        auxinput2.splice(element-contDelete,1)
                        contDelete++
                    }else{
                        auxinput2.splice(element,1)
                        contDelete++
                    }
                })
            }
        }else{
            contLetters = stack.length;
            auxflag = true
        } 

        if(!auxflag){
            if(auxinput2.length > 0){
                validateString()
            }
        }
        
    }

    validateString()

    return contLetters
}

module.exports = containedString