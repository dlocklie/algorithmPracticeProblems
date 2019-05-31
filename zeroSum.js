//Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.
 
  // itterate over array
    // itterate over array exculding current number
    // check to see if some of two numbers equals zero
      // return true
  // return false

function zeroSum (numbers) {
  
  for (let i = 0; i < numbers.length; i++) {
    let numbA = numbers[i];
    
    for (let j = 0; j < numbers.length; j++) {
      let numbB = numbers[j];
      
      if (i === j) {
        continue;
      }
      if (numbA + numbB === 0) {
        return true;
      }
    }
  }
  return false;
}