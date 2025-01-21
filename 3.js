function delayedMessage(message,delay){
    setTimeout(()=>{
        console.log(message);
    },delay);
}

delayedMessage("Hello guys",2000);