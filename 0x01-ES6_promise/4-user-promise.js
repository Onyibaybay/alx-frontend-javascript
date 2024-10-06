function signUpUser(firstName, lastName) {
  // Return a resolved promise with the specified object
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

// Example usage
signUpUser('John', 'Doe')
  .then((user) => {
    console.log(user); // Logs: { firstName: 'John', lastName: 'Doe' }
  });
