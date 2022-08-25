function isPalindrome(word) {
  // Write your algorithm here
  //write a function whereby a word can be read the same from backword and forward.For example "mom","dad".
 // if it can be read in the same way to return true else false. 

 for (let a=0; a< word.length; a++){//Iterate through the letters of the word from start
  let b= word.length-1 -a;//itereate from backward
  
  
  if(word[a]===word[b]){return true;//check whether it fulfills the condition and return true
 }
 return false;
}
}

/* 
  
*/

/*
mom==mom //This should return true.
a  ==  b

boy===boy//this should return false
a  ==== b
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
