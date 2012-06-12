function LongestWord(sen) { 

    var matches = sen.match(/[a-zA-Z]+/g);
    var max = "";
    for (var i=matches.length-1; i>=0; i--){
        if(matches[i].length >= max.length){
            max = matches[i];
        }
    }
    return max;
}

// console.log(LongestWord("fun&!! time")) // time
// console.log(LongestWord("I hate dogs")) // hate

LongestWord(sen)        

