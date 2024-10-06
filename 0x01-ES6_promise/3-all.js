// Import the required functions
import { uploadPhoto, createUser } from './utils';

// Define the handleProfileSignup function
function handleProfileSignup() {
  // Call the functions and use Promise.all to wait for both to resolve
  Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      // Destructure the responses to get the required data
      const [uploadResponse, userResponse] = responses;

      // Log the required information
      console.log(`${uploadResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Log error message in case of failure
      console.log('Signup system offline');
    });
}

// Call the function to test it
handleProfileSignup();
