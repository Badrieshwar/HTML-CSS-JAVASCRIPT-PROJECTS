const btn1=document.querySelector(".success");
const btn2=document.querySelector(".error");
const btn3=document.querySelector(".invalid");
const toastBoxes=document.querySelector("#toastBoxes");

function showToast(val){
    let div=document.createElement("div");
    div.classList.add("toastBox");
    if(val==="Successfully Submitted"){
        div.classList.add("toastBox1");
        div.innerHTML='<i class="fa-solid fa-circle-check"></i>' + val;
        toastBoxes.appendChild(div);
    }
    else if(val==="Please fix the error!"){
        div.classList.add("toastBox2");
        div.innerHTML='<i class="fa-solid fa-circle-xmark"></i>' + val;
        toastBoxes.appendChild(div);
    }
    else if(val==="Invalid input check again"){
        div.classList.add("toastBox3");
        div.innerHTML='<i class="fa-solid fa-circle-exclamation"></i>' + val;
        toastBoxes.appendChild(div);
    }
    setTimeout(() => {
        div.remove();
    }, 6000);
}

btn1.addEventListener("click",()=>{
    let val="Successfully Submitted";
    showToast(val);
});

btn2.addEventListener("click",()=>{
    let val="Please fix the error!";
    showToast(val);
});

btn3.addEventListener("click",()=>{
    let val="Invalid input check again";
    showToast(val);
});