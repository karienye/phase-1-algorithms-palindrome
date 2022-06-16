function isPalindrome(word) {
  // Write your algorithm here
  let names;
  if (word = word.reverse){
    names = true;
  } else {
    names = false;
  }
}

/* 
  Add your pseudocode here
  console.log (wendy) expecting ((ydnew) false)
*/

/*
  Add written explanation of your solution here
  if the string passed is equa to the reverse of it then return true

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
