export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}

// Example usage
uploadPhoto('image.png')
  .catch((error) => {
    console.log(error.message); // Logs: image.png cannot be processed
  });

uploadPhoto('document.pdf')
  .catch((error) => {
    console.log(error.message); // Logs: document.pdf cannot be processed
  });
