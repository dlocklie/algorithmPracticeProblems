/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/


let longestCommonPrefix = function(strs) {
  let prefix = '';
  let index = 0;
  
  if (strs.length >= 1) {
    while (index < strs[0].length) {
      let firstWord = strs[0];
      let firstChar = firstWord[index];
      let truth = true;
      
      for (let i = 0; i < strs.length; i++) {
        let curWord = strs[i];
        let curChar = curWord[index];
          
        if (firstChar !== curChar) {
          return prefix;
        }
        if (firstChar === curChar && i + 1 === strs.length) {
          prefix += curChar
        }
      }
      index += 1;
    }  
  }
  return prefix;
};