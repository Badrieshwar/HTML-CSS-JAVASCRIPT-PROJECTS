const input1=document.querySelector("#input-1")
const input2=document.querySelector("#input-2")
const input3=document.querySelector("#input-3")
const input4=document.querySelector("#input-4")
const input5=document.querySelector("#input-5")
const input6=document.querySelector("#input-6")
const input7=document.querySelector("#input-7")
const input8=document.querySelector("#input-8")
const input9=document.querySelector("#input-9")
const input10=document.querySelector("#input-10")
const input11=document.querySelector("#input-11")
const input12=document.querySelector("#input-12")
const input13=document.querySelector("#input-13")
const input14=document.querySelector("#input-14")
const input15=document.querySelector("#input-15")
const input16=document.querySelector("#input-16")
const input17=document.querySelector("#input-17")
const input18=document.querySelector("#input-18")
const input19=document.querySelector("#input-19")

const inputBox=document.querySelector(".display input")
let dotCount=0;

input1.addEventListener("click",()=>{
    if(inputBox.value===""){
        alert("You must enter something");
    }
    else{
        inputBox.value="";
    }
});
input2.addEventListener("click",()=>{
    if(inputBox.value===""){
        alert("You must enter something");
    }
    else{
        inputBox.value=inputBox.value.toString().slice(0,-1);
    }
});
input3.addEventListener("click",()=>{
    if(inputBox.value===""){
        alert("You must enter something");
    }
    else if(dotCount===1){
        alert("more decimal point can't entered");
    }
    else{
        inputBox.value+=".";
        dotCount=1;
    }
});
input4.addEventListener("click",()=>{
    let str=inputBox.value.toString();
    if(inputBox.value===""){
        alert("You must enter something");
    }
    else if(str.slice(-1)==="/" || str.slice(-1)==="*" || str.slice(-1)==="+" || str.slice(-1)==="-"){
        alert("Error");
    }
    else{
        inputBox.value+="/";
    }
})


input8.addEventListener("click",()=>{
    let str=inputBox.value.toString();
    if(inputBox.value===""){
        alert("You must enter something");
    }
    else if(str.slice(-1)==="/" || str.slice(-1)==="*" || str.slice(-1)==="+" || str.slice(-1)==="-"){
        alert("Error");
    }
    else{
        inputBox.value+="*";
    }
})


input12.addEventListener("click",()=>{
    if(inputBox.value.toString().slice(-1)==="-"){
        alert("Error");
    }
    else{
        inputBox.value+="-";
    }
})

input16.addEventListener("click",()=>{
    let str=inputBox.value.toString();
    if(str.slice(-1)==="/" || str.slice(-1)==="*" || str.slice(-1)==="+" || str.slice(-1)==="-"){
        alert("Error");
    }
    else{
        inputBox.value+="+";
    }
});

input19.addEventListener("click",()=>{
    let str=inputBox.value.toString();
    if(inputBox.value===""){
        alert("Error");
    }
    else if(str.slice(-1)==="+"|| str.slice(-1)==="-" || str.slice(-1)==="*" || str.slice(-1)==="/" || str.slice(-1)==="."){
        alert("Error");
    }
    else{
        inputBox.value=eval(inputBox.value);
    }
})