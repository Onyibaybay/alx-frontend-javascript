function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      console.log('Got a response from the API'); // Log on rejection as well
      return new Error(); // Return an empty Error object
    });
}
// Example promise that resolves
const successPromise = new Promise((resolve) => {
  setTimeout(() => resolve(), 1000); // Resolves after 1 second
});

// Example promise that rejects
const failurePromise = new Promise((_, reject) => {
  setTimeout(() => reject(), 1000); // Rejects after 1 second
});
// Test with successPromise
handleResponseFromAPI(successPromise)
  .then((response) => {
    console.log(response); // { status: 200, body: 'success' }
  })
  .catch((error) => {
    console.error(error); // Should not be reached
  });

// Test with failurePromise
handleResponseFromAPI(failurePromise)
  .then((response) => {
    console.log(response); // Should not be reached
  })
  .catch((error) => {
    console.error(error); // Logs the empty Error object
  });
