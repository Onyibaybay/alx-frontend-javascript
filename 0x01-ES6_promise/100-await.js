import uploadPhoto from './utils'; // Adjust the import path as necessary
import createUser from './utils';   // Adjust the import path as necessary

export default async function asyncUploadUser(firstName, lastName, fileName) {
  try {
    // Call both functions and wait for their responses
    const photoResponse = await uploadPhoto(fileName);
    const userResponse = await createUser(firstName, lastName);
    
    // Return the responses in the specified format
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // Return an empty object if any function fails
    return {
      photo: null,
      user: null,
    };
  }
}
