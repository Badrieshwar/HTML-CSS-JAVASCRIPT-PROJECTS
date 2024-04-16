const URL="https://api.quotable.io/quotes/random?tags=technology,famous-quotes";
const quoteContainer=document.querySelector(".quote-container")
const p1=document.querySelector(".quote")
const p2=document.querySelector(".writer");
const btn1=document.querySelector(".new-quote");
const btn2=document.querySelector(".tweet");
let data;

async function generateQuote(){
    let response=await fetch(URL);
    data=await response.json();
    let Quote='"'+data[0].content+'"';
    p1.innerHTML=Quote;
    p2.innerHTML=data[0].author;
}

btn1.addEventListener("click",()=>{
    generateQuote();
})

function Tweet(){
    window.open(`https://twitter.com/intent/tweet?text=${data[0].content} ---${data[0].author}`,"Tweet Window", "width=600, height=300");
    if(btn2.style.display!=="none"){
        btn1.style.display="none";
        btn2.style.display="none";
    }
}

btn2.addEventListener("click",()=>{
    Tweet();
});

generateQuote();
