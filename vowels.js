let word;
word = prompt("Enter A Word");
// function vowels(word) {
//   let count_vowel = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (
//       word[i] == "A" ||
//       word[i] == "E" ||
//       word[i] == "I" ||
//       word[i] == "O" ||
//       word[i] == "U" ||
//       word[i] == "a" ||
//       word[i] == "e" ||
//       word[i] == "i" ||
//       word[i] == "o" ||
//       word[i] == "u"
//     ) {
//       count_vowel++;
//     }
//   }

//   return count_vowel;
// }

// let total = vowels(word);

let Vowel_Count = (word) => {
  let i = 0,
    cv = 0;
  for (let key of word) {
    if (
      key == "A" ||
      key == "E" ||
      key == "I" ||
      key == "O" ||
      key == "U" ||
      key == "a" ||
      key == "e" ||
      key == "i" ||
      key == "o" ||
      key == "u"
    ) {
      cv++;
    }
    i++;
  }
  return cv;
};

alert("Total Vowels in the Alphabets is = " + Vowel_Count(word));
