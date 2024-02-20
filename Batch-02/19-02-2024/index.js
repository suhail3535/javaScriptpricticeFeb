
// Example function that returns a promise
function fetchData () {
    return new Promise((resolve, reject) => {
        // Simulate asynchronous operation, like fetching data from a server
        setTimeout(() => {
            const data = Math.random() > 0.5 ? 'Success data' : undefined; // Simulate success or failure
            if (data) {
                resolve(data); // Resolve the promise with the data
            } else {
                reject(new Error('Failed to fetch data')); // Reject the promise with an error
            }
        }, 2000); // Simulate a 2-second delay
    });
}

// Consuming the promise
fetchData()
    .then((data) => {
        console.log('Data received:', data); // This will be executed if the promise is resolved successfully
    })
    .catch((error) => {
        console.error('Error:', error.message); // This will be executed if the promise is rejected
    });
