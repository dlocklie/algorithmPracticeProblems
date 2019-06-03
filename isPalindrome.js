var isPalindrome = function(x) {
  let numStr = x.toString();
  let reversed = numStr.split('').reverse().join('');
  
  if (numStr === reversed) {
      return true;
  } else {
      return false;
  }
};