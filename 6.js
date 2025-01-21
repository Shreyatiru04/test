let p1= Promise.resolve(5)
let p2= Promise.resolve(10)
let p3= Promise.resolve(15);



function add(values){
    let sum= values.reduce((acc,values)=>acc+values,0);
    return sum;
}
let allP=Promise.all([p1,p2,p3]);
allP.then(add).then((val)=>{
    console.log("sum: ",val)
})
   
