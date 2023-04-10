const keyPassword = (k, x) =>{
    let auxarr =[]
    for(let i = 0; i < k.length; i++){
        if(x > 0){
            if(i === k.length-1){
                let newvalue = k[k.length-1-i] + k[k.length-i]
                auxarr.push(newvalue)
            }else if(i === k.length-2){
                let newvalue = k[i+1] + k[(k.length-2) -i]
                auxarr.push(newvalue)
            }else{
                let newvalue = k[i+1] + k[i+2]
                auxarr.push(newvalue)
            }
        }
    }
    return auxarr
}

module.exports = keyPassword