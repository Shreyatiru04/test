function withTimeout(promise, timeoutDuration) {
    return new Promise((resolve, reject) => {

        const timeout = setTimeout(() => {
            reject(new Error(`Operation timed out after ${timeoutDuration}ms`));
        }, timeoutDuration);

     
        promise.then(
            (result) => {
                clearTimeout(timeout); 
                resolve(result);
            },
            (error) => {
                clearTimeout(timeout); 
                reject(error);
            }
        );
    });
}


const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Operation completed successfully");
    }, 2000); 
});


withTimeout(myPromise, 3000)
    .then((result) => {
        console.log(result);  
    })
    .catch((error) => {
        console.error(error.message); 
    });
