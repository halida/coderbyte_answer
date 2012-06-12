function FirstFactorial(num) { 
    if (num <1) return num;

    var result = 1;
    for(var j=1; j<=num; j++){
        result *= j;
    }
    return result; 
}

// console.log(FirstFactorial(1))
// console.log(FirstFactorial(2))
// console.log(FirstFactorial(4))
// console.log(FirstFactorial(8))

FirstFactorial(num)        

