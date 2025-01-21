function firstStep() {
    return new Promise((resolve, reject) => {
        const data = "Data from first step";
        console.log("First step completed");
        resolve(data);
    });
}

function secondStep(dataFromFirst) {
    return new Promise((resolve, reject) => {
        const newData = `Processed ${dataFromFirst}`;
        console.log("Second step completed with:", dataFromFirst);
        resolve(newData);
    });
}

function thirdStep(dataFromSecond) {
    return new Promise((resolve, reject) => {
        const finalResult = `Final output from: ${dataFromSecond}`;
        console.log("Third step completed with:", dataFromSecond);
        resolve(finalResult);
    });
}

firstStep()
    .then((resultFromFirst) => {
        return secondStep(resultFromFirst);
    })
    .then((resultFromSecond) => {
        return thirdStep(resultFromSecond);
    })
    .then((finalResult) => {
        console.log("All steps completed. Final result:", finalResult);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
