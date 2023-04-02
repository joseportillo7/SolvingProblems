function avoidObstacles(inputArray) {
    const auxsort = inputArray.sort((a,b) => a -b)
    const numMax = auxsort[auxsort.length-1]
    let arraux = []
    let jump = 1
    let contJump = 0
    
    for(let i = 0; i <= numMax; i++){
        arraux.push(i)
    }
    
    const findJump = ()=>{
        let flag = false
        let current = 0
        let next = current + jump

        for(let i = 0; i < arraux.length -1; i++){   
            if(auxsort.some(item => item === next)){
                jump++
                flag = true
                break
            }else{
                next += jump 
            }
        }
        if(flag){
            findJump()
        }else{
            contJump = jump
        }
    }
    
    findJump()
    
    return contJump
}


module.exports = avoidObstacles