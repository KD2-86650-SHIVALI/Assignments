//Q9. Top 3 longest words as hashtags

function createHashtag(str){

    let words = str.split(" ");
    let result = [];

    for(let i=0; i<3 && i< words.length; i++){
        let longestWord = "";
        

        for(let j=0; j<words.length ; j++){
            if(words[j].length> longestWord.length && !result.includes[words[j]] ){
                longestWord = words[j];
            }
        }
         result.push(longestWord);
    }
    return result.map(words => "#" +words.toLowerCase());
}

// function createHashtag(str){

//     let words = str.split(" ");

//     let sorted = words.sort((a,b)=> b.length - a.length);

//     let result = [];
//     for( let i=0; i < 3 && i< sorted.length; i++ ){
//         result.push("#" + sorted[i].toLowerCase());
//     }

//     return result;
// }

console.log(createHashtag("How the Avocado Became the Fruit of the Global Trade"));