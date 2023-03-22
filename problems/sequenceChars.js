//From BairesDev
const sequence = (inputString) =>{
    const closedChar = ')}]'
    const openChar = '({['
    const openAndCloseChars = '()[]{}'
    let stack = []
    if(closedChar.includes(inputString[0])) return false
    for(let i = 0; i < inputString.length; i++){
        if(openChar.includes(inputString[i])){
            stack.push(inputString[i])
        }else{
            let lastChar = stack.pop()
            let newstr = lastChar + inputString[i]
            if(!openAndCloseChars.includes(newstr)) return false
        }
    }
    return true
}
module.exports = sequence;