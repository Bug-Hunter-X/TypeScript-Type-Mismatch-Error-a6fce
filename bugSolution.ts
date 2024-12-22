function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct: Both arguments are numbers.

//Alternative solution if you need to handle string inputs
function add2(a: string | number, b: string | number): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  return numA + numB; 
}

let result2 = add2("1", 2); //Correct: function handles both numbers and strings