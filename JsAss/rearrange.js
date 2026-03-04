//Q7. Rearrange sentence based on embedded numbers in words

function reArrange(str){
    if (str.trim()=== "")return "";

    let words = str.trim().split(" ");
    let result = [];

    for(let word of words){
        let num = "";
        let newWord = "";

        for(let char of word){
            if(char>="0" && char<= "9"){
                num = num + char;
            }else{
                newWord += char;
            }
        }
        result[parseInt(num)-1] = newWord;
    }
    return result.join(" ");
}

// function reArrange(str){
//     if(str.trim()=== "") return "";

//     let words = str.trim().split(" ");
//     let result = [];

//     for(let word of words){
//         let num = parseInt(word.match(/\d+/));    // finding one or more digits in word
//         let newWord = word.replace(/\d/g, "");      // finds evennry diigiit
//         result[num - 1] = newWord;
//     }

//     return result.join(" ");

// }

console.log(reArrange("is2 Thi1s T4est 3a"));