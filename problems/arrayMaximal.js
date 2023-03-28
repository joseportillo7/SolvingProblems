const arrayMaximal = (inputArray) =>{
    let difference = 0
    let auxarr = []
    
    for(let i = 0; i < inputArray.length -1; i++){
        difference = Math.abs(inputArray[i]) - Math.abs(inputArray[i+1])
        auxarr.push(Math.abs(difference))
    }
    return Math.max(...auxarr)
}

module.exports = arrayMaximal