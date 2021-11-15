// //write your code here
// function findLongestWord(words){
//  let longestWord = ""
//  for (let i = 0; i < words.length; i++){
//      let word = words[i]
// if(word[i].length > longestWord.length){
// longestWord = words[i]
// // }
// //  }
// return longestWord
// }
const findLongestWord = (words) => {
    let longestWord = ""
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord
}

console.log(findLongestWord(['OhGod', 'Linden Blvd', 'Jamaica Queens New York', 'christt', 'flatbush']))
