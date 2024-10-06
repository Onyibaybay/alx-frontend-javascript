import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the functions to get their promises
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  // Use Promise.allSettled to handle both promises
  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      return results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }));
    });
}

// Example usage
handleProfileSignup('John', 'Doe', 'image.png')
  .then((results) => {
    console.log(results);
    // Expected output might look like this:
    // [
    //   {
    //     status: 'fulfilled',
    //     value: { firstName: 'John', lastName: 'Doe' }
    //   },
    //   {
    //     status: 'rejected',
    //     value: Error: image.png cannot be processed
    //   }
    // ]
  });
