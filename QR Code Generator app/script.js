const URL="https://quickchart.io/qr?text=";
const inputBox=document.querySelector(".input-box");
const qrCode=document.querySelector(".qr-code");
const btn=document.querySelector(".btn");

let img=document.createElement("img");
img.classList.add("QR-img");

btn.addEventListener("click",()=>{
    if(inputBox.value===""){
        alert("You must Enter something!");
    }
    else{
        qrCode.style.display="none";
        img.src=URL+inputBox.value;
        qrCode.append(img);
        qrCode.style.display="block";
    }
});
