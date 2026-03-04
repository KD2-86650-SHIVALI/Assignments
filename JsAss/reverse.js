//Q10. Reverse words with odd length

function reverseOdd(str){

    let words = str.split(" ");
    let result = [];

    for(let word of words){
        if(word.length % 2 !== 0){
         result.push(word.split("").reverse().join(""));

        //  let reverse ="";
        //  for(let i = word.length - 1; i >= 0; i--){
        //     reverse += word[i];
            
        //  }
        //  result.push(reverse);

    }else {
        result.push(word);
    }

    }
    return result.join(" ");
}
console.log("Reverse String is:", reverseOdd("Bananas"));