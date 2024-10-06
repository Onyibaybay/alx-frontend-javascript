export default function divideFunction(numerator, denominator) {
  // Check if the denominator is zero
  if (denominator === 0) {
    throw new Error('cannot divide by 0'); // Throw error if true
  }
  // Return the division result
  return numerator / denominator;
}

// Example usage
try {
  console.log(divideFunction(10, 2)); // Expected output: 5
  console.log(divideFunction(10, 0)); // This will throw an error
} catch (error) {
  console.error(error.message); // Expected output: cannot divide by 0
}
