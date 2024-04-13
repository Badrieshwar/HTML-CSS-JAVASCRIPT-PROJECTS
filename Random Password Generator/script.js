const passwordBox=document.querySelector(".password");
const copy=document.querySelector(".generator img")
const generatorBtn=document.querySelector('.generator-btn')

let length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()_-+=~{}[]></?|"
const AllChar=upperCase+lowerCase+numbers+symbols;

function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
        password+=AllChar[Math.floor(Math.random()*AllChar.length)];
    }
    passwordBox.value=password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

generatorBtn.addEventListener("click",()=>{
    createPassword();
})

copy.addEventListener("click",()=>{
    if(passwordBox.value===""){
        alert("You Must Generate the Password to Copy!");
    }
    else{
        copyPassword();
    }
})