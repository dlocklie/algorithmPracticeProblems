/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

let isValid = function(s) {
  const opening = {
    '(': true,
    '[': true,
    '{': true,
  }
  const lookup = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  let stack = [];
  
  if (s.length % 2 !== 0) {
    return false;
  }
  
  for (let i = 0; i < s.length; i++) {
    let curBracket = s[i];
     
    if (opening[curBracket]) {
      stack.push(curBracket);
    } else {
      let popped = stack.pop();
      if (lookup[curBracket] !== popped) {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};