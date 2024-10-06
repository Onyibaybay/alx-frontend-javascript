export default function guardrail(mathFunction) {
  const queue = []; // Initialize the queue

  try {
    const result = mathFunction(); // Execute the mathFunction
    queue.push(result); // Append the result to the queue if successful
  } catch (error) {
    queue.push(error.message); // Append the error message if an error is thrown
  } finally {
    queue.push('Guardrail was processed'); // Always add this message
  }

  return queue; // Return the completed queue
}

// Example usage
const result1 = guardrail(() => 1000);
console.log(result1); // Expected output: [1000, 'Guardrail was processed']

const result2 = guardrail(() => {
  throw new Error('Something went wrong');
});
console.log(result2); // Expected output: ['Something went wrong', 'Guardrail was processed']
