const inputBox=document.querySelector(".password-container");
const img=document.querySelector(".container img");

img.addEventListener("click",()=>{
    if(img.classList.contains("eye-close")){
        img.src="icons/eye-open.png";
        img.alt="eye-open-icon";
        img.classList.remove("eye-close");
        img.classList.add("eye-open");
        inputBox.type="text";
    }
    else{  
        img.src="icons/eye-close.png";
        img.alt="eye-close-icon";
        img.classList.remove("eye-open");
        img.classList.add("eye-close");
        inputBox.type="password";
    }
});

function copyPassword(){
    inputBox.select();
    document.execCommand("copy");
}

inputBox.addEventListener("dblclick",()=>{
    if(inputBox.value===""){
        alert("Please enter the password before copying it.");
    }
    else{
        copyPassword();
    }
});