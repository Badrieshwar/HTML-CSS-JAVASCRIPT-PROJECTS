 const inputBox=document.querySelector('#input-box');
 const listTasks=document.querySelector('#list-tasks');

 const btn=document.querySelector('.input button');

 btn.addEventListener('click',()=>{
    if(inputBox.value===''){
        alert("You Must Write Something!");
    }
    else{
        let li=document.createElement('li');
        console.log(inputBox.value)
        li.innerHTML=inputBox.value;
        listTasks.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.append(span);
    }
    inputBox.value="";
    saveData();
 });

 listTasks.addEventListener('click',(evt)=>{
    if(evt.target.tagName=='LI'){
        evt.target.classList.toggle("checked");
        saveData();
    }
    else if(evt.target.tagName=="SPAN"){
        evt.target.parentElement.remove();
        saveData();
    }
 });

 function saveData(){
    localStorage.setItem("data",listTasks.innerHTML);
 }

 function showData(){
    listTasks.innerHTML=localStorage.getItem("data");
 }
 showData();