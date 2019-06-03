var reverse = function(x) {
  let numStr = x.toString();
  let reversed = [];
  
  for (let i = numStr.length - 1; i >= 0; i--) {
      let cur = numStr[i];
      if (cur === '-') {
          reversed.unshift(cur);
      } else {
        reversed.push(cur);  
      }
  }
  if (reversed[0] === '0') {
      reversed.shift();
  }
  
  let result = reversed.join('');
  if (result > 2147483647) {
      return 0;
  }
  else if (result < -2147483647) {
      return 0;
  }
  return Number(reversed.join(''));
};