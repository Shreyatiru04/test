function greet(name, callback) {
    const msg=`Hello ${name}`
    callback(msg);
}

function display(message) {
    console.log(message);
}

greet("Shreya",display);  

