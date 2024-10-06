export default function loadBalancer(chinaDownload, USDownload) {
  // Return the first promise that resolves
  return Promise.race([chinaDownload, USDownload]);
}

// Example usage
const chinaPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Downloaded from China'), 3000); // Simulate a 3s download
});

const usPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Downloaded from US'), 1000); // Simulate a 1s download
});

loadBalancer(chinaPromise, usPromise)
  .then((result) => {
    console.log(result); // Expected output: 'Downloaded from US'
  })
  .catch((error) => {
    console.error('Error:', error);
  });
