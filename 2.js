function add(num,callback){
    return callback(num + 10,false);
}
function sub(num,callback){
    return callback(num-3,false);
}
function mul(num,callback){
    return callback(num*2,false);
}
mul(10,(mulRes,err)=>{
    if(!err){
        sub(mulRes,(subRes,err)=>{
            if(!err){
                add(subRes,(addRes,err)=>{
                    if(!err){
                    console.log("Result :",addRes);
                    }else{
                        console.log("Error in add");
                    }
                })
            
            }else{
                console.log("Error in sub");
            }
        })
    }else{
        console.log("error in mul")

    }
})

