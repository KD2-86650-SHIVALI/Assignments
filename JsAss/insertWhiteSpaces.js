
//Q4. Insert whitespace between lower→upper character transitions

// function insertWhitespace(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
    
//     if (i > 0 && str[i] === str[i].toUpperCase() && str[i - 1] === str[i - 1].toLowerCase()) {
//       result += " ";
//     }
//     result += str[i];
//   }
//   return result;
// }
// console.log(insertWhitespace("HiJavascriptIsHere"));

function insertWhitespace(str){

    let result ="";
    for(let i=0; i<str.length; i++){
        let lowerCase = str.charCodeAt(i);
        if(i>0 && lowerCase >=65 && lowerCase <=90){
            let upperCase = str.charCodeAt(i-1);
            if(upperCase>=97 && upperCase <= 122){
                result = result + " ";
            }
            
        }
        result = result + str[i];
    }

    return result;
}
console.log(insertWhitespace("helloWorld!"));