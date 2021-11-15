// //write your code here
// function findLongestWord(words){
//  let longestWord = ""
//  for (let i = 0; i < words.length; i++){
//      if (longestWord)
//  }
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

console.log(findLongestWord(['OhGod', 'damnnnnnnn', 'jeezzzusss', 'ball', 'cooon']))