const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Change true → false to simulate error
    const success = true;

    if (success) {
      resolve("TASK COMPLETED");
    } else {
      reject("TASK FAILED");
    }

  }, 2000);
});

myPromise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
