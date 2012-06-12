function FirstReverse(str) { 
    if (str.length <= 0) return "";
    
    // code goes here
    var v = [];
    for(var i = str.length-1; i>=0; i--) {
        v.push(str[i]);
    }
    return v.join(''); 
}

// this call is needed to test your function
// keep this when you submit your code
// str = "fdasfdsa";
// console.log(FirstReverse(str));

FirstReverse(str)        
