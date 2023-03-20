function areSimilar(a, b) {
    
    let contvalidator = 0
    let flag = false

    //copy of main arrays
    const auxa = [...a]
    const auxb = [...b]

    const validation = ()=>{
        if(contvalidator === 2){
            flag = false
            return flag
        }else{
            const result = validate(auxa,auxb,length_b)
            if(result.every(item => item ===true)){
                flag = true
                return flag
            }else{
                const cont_array = result.filter(item => item === false)
                const pos_to_swap = []

                if(cont_array.length % 2 === 0){
                    for(let i = 0; i < result.length; i++){
                        if(result[i] === false){
                            pos_to_swap.push(i)
                        }
                    }

                swap_array(auxb,pos_to_swap)
                contvalidator++
                validation()

                }else{
                    flag = false
                    return flag
                }
            }
        }
        return flag
    }

    //length of the arrays    
    const length_a = auxa.length
    const length_b = auxb.length
   
    //initial validations
    if(length_a != length_b){
        flag = false
        return flag
    }else{
       flag = validation()
       return flag
    }
}


const validate = (auxa,auxb,length_b) =>{

    //declare variables
    let cont = 0
    let auxarr = []

    //to compare arrays
    auxa.forEach(itema =>{
        for(let i = cont; i < length_b; i++){
            if(itema === auxb[i]){
                auxarr.push(true)
                cont++
                break
            }else{                
                auxarr.push(false)
                cont++
                break
            }
        }
    })
    return auxarr
}


const swap_array = (arrb, postoswap)=>{
    
    const current = arrb[postoswap[0]]
    arrb[postoswap[0]] = arrb[postoswap[1]]
    arrb[postoswap[1]] = current

    postoswap.shift()
    postoswap.shift()

    return arrb
}

module.exports = areSimilar;
