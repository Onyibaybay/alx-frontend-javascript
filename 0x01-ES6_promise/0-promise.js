export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate API response
    const success = true; // You can adjust this based on some condition

    if (success) {
      resolve('API call succeeded'); // Resolves the promise
    } else {
      reject(new Error('API call failed')); // Rejects the promise with an error
    }
  });
}
