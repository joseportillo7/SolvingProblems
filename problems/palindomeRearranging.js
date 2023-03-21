function palindrome(inputString) {
    
    let inputArray = Array.from(inputString)
    let flag = false
    let cont = 0
    let passNumber = 0
        
    const rearranged = () =>{

        if(isPalindrome(inputArray)){
            flag = true
        }else{
            const extractElement = inputArray.splice(cont,1)
            //console.log(inputArray);
            let size = inputArray.length
            cont++
            if(size >= cont){
                inputArray.splice(cont, 0, extractElement[0])
            }else if(passNumber <= size){
                cont = 0
                passNumber++
            }else{
                return false
            }
            //console.log(inputArray);
            rearranged()
        }
    }
    
    rearranged()

    return flag
}

const isPalindrome = (input) =>{

    const aux1 = [...input]
    const aux2 = [...input].reverse()
    
    return (aux1.join('') === aux2.join('')) ? true : false
}

module.exports = palindrome
