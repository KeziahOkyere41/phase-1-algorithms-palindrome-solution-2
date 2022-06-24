function isPalindrome(word) {
  // Write your algorithm here

  // iterate from the beginning of the string to the middle of the string
  for(let i = 0; i <word.length / 2; i++){
  // compare the letter we're iterating over to the corresponding letter at the end of the string
  const l = word.length - 1 - i;
  // if the letters don't match, return false
  if(word[i] !== word[l]){
    return false;
}  
}
  // if we reach the middle, and all the letters match, return true  
    return true;
}

/* 
  Add your pseudocode here
  iterate through your string, if the first, second and third letter meets the condition
  return true
  else
  return false

  // iterate from the beginning of the string to the middle of the string
  // compare the letter we're iterating over to the corresponding letter at the end of the string
  // if the letters don't match, return false
  // if we reach the middle, and all the letters match, return true
*/

/*
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
