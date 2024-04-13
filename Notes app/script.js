const notesBtn=document.querySelector(".notes-btn");
const notesContainer=document.querySelector(".notes-container");

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

function createNote(){
    let textArea=document.createElement("p");
    textArea.classList.add("text-space");
    textArea.setAttribute("contenteditable","true");
    let img=document.createElement("img");
    img.classList.add("img");
    img.src="images/delete.png";
    notesContainer.appendChild(textArea).appendChild(img);
}

notesBtn.addEventListener("click",()=>{
    createNote();
})

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
       
    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".text-space");
        notes.forEach(note=>{
            note.onkeyup=function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
showNotes();
