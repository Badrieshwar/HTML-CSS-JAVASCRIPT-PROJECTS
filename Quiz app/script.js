const questions=[
    {
        question:'Which is the largest animal in the world?',
        answer:[
            {option:"Shark",correct:false},
            {option:"Blue whale",correct:true},
            {option:"Elephant",correct:false},
            {option:"Giraffe",correct:false},
        ]
    },
    {
        question:'Which is the smallest country in the world?',
        answer:[
            {option:"Vatican City",correct:true},
            {option:"Bhutan",correct:false},
            {option:"Nepal",correct:false},
            {option:"sri Lanka",correct:false},
        ]
    },
    {
        question:'Which is the largest desert in the world?',
        answer:[
            {option:"Kalahari",correct:false},
            {option:"Gobi",correct:false},
            {option:"sahara",correct:false},
            {option:"Antarctica",correct:true},
        ]
    },
    {
        question:'Which is the smallest continent in the world?',
        answer:[
            {option:"Asia",correct:false},
            {option:"Arctic",correct:false},
            {option:"Austrialia",correct:true},
            {option:"Africa",correct:false},
        ]
    }
];

const h2=document.querySelector('.quiz h2')
const btns=document.querySelectorAll('.btn');
const nextBtn=document.querySelector('.next-btn');
const quiz=document.querySelector(".quiz");
const quizApp=document.querySelector(".quiz-app");
let count=0;
let score=0;
let flag=false;

h2.innerText=questions[0].question;

btns[0].innerText=questions[count].answer[0].option;
btns[1].innerText=questions[count].answer[1].option;
btns[2].innerText=questions[count].answer[2].option;
btns[3].innerText=questions[count].answer[3].option;

function chioce(){

    btns[0].addEventListener('click',()=>{
        if(questions[count].answer[0].correct===true){
            btns[0].style.backgroundColor='#a6dca6'
            flag=true;
        }
        else{
            for(let i=0;i<4;i++){
                if(i!=0 && questions[count].answer[i].correct===true){
                    btns[i].style.backgroundColor='#a6dca6'
                }
                else{
                    btns[i].style.backgroundColor='#fa9898'
                }
            }
        }

        nextBtn.style.display="block";
    });

    btns[1].addEventListener('click',()=>{
        if(questions[count].answer[1].correct===true){
            btns[1].style.backgroundColor='#a6dca6'
            flag=true;
        }
        else{
            for(let i=0;i<4;i++){
                if(i!=1 && questions[count].answer[i].correct===true){
                    btns[i].style.backgroundColor='#a6dca6'
                }
                else{
                    btns[i].style.backgroundColor='#fa9898'
                }
            }
        }
        nextBtn.style.display="block";
    });

    btns[2].addEventListener('click',()=>{
        if(questions[count].answer[2].correct===true){
            btns[2].style.backgroundColor='#a6dca6'
            flag=true;
        }
        else{
            for(let i=0;i<4;i++){
                if(i!=2 && questions[count].answer[i].correct===true){
                    btns[i].style.backgroundColor='#a6dca6'
                }
                else{
                    btns[i].style.backgroundColor='#fa9898'
                }
            }
        }
        nextBtn.style.display="block";
    });

    btns[3].addEventListener('click',()=>{
        if(questions[count].answer[3].correct===true){
            btns[3].style.backgroundColor='#a6dca6'
            flag=true;
        }
        else{
            for(let i=0;i<4;i++){
                if(i!=3 && questions[count].answer[i].correct===true){
                    btns[i].style.backgroundColor='#a6dca6'
                }
                else{
                    btns[i].style.backgroundColor='#fa9898'
                }
            }
        }
        nextBtn.style.display="block";
    });

}
function scoreDisplay(){
    quiz.style.display="none";
    let h2=document.createElement("h2");
    h2.innerHTML=`Your Score is ${score} out of 4!`;
    quizApp.appendChild(h2);
}
nextBtn.addEventListener('click',()=>{
    count++;
    if(flag===true){
        score++;
        console.log(score)
    }
    flag=false;
    nextBtn.style.display="none";
    if(count==4){
     scoreDisplay();
    }
    else{
        btns[0].style.backgroundColor='#fff';
        btns[1].style.backgroundColor='#fff';
        btns[2].style.backgroundColor='#fff';
        btns[3].style.backgroundColor='#fff';

        h2.innerText=questions[count].question;
        btns[0].innerText=questions[count].answer[0].option;
        btns[1].innerText=questions[count].answer[1].option;
        btns[2].innerText=questions[count].answer[2].option;
        btns[3].innerText=questions[count].answer[3].option;
        chioce();
    }
})

chioce();


