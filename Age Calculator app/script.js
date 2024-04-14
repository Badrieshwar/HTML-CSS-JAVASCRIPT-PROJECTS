const date=document.querySelector(".date");
const calculateBtn=document.querySelector(".calculate-btn");
const p=document.querySelector("p");

function isLeapYear(year){
    return (year%4===0 && year%100!==0)?true:((year%100===0 && year%400===0)?(true):(false));
}

const monthWiseDays=[31,28,31,30,31,30,31,31,30,31,30,31];

function ageCalculator(){
    let today = new Date();
    let todayDay=today.getDate();
    let todayMonth=today.getMonth();
    let todayYear=today.getFullYear();
    console.log(today,todayDay, todayMonth,todayYear)
    let birth=new Date(date.value);
    let birthDay=birth.getDate();
    let birthMonth=birth.getMonth();
    let birthYear=birth.getFullYear();
    console.log(birth,birthDay,birthMonth,birthYear);

    if((birthYear>todayYear) || 
       (birthYear===todayYear && birthMonth>todayMonth) || 
       (birthYear===todayYear && birthMonth===todayMonth && birthDay>todayDay) || 
       (birthYear===todayYear && birthMonth===todayMonth && birthDay===todayDay)){
        p.innerText="Oops! Could not calculate age!";
    }

    else if(birthYear===todayYear && birthMonth===todayMonth){
        let diffDay=todayDay-birthDay;
        p.innerText=`Only ${diffDay} day old!`;
    }

    else if(birthYear===todayYear && birthDay===todayDay){
        let diffMonth=todayMonth-birthMonth;
        p.innerText=`${diffMonth} month old!`;
    }

    else if(birthMonth===todayMonth && birthDay===todayDay){
        let diffYear=todayYear-birthYear;
        p.innerText=`${diffYear} year old. Happy Birthday!`;
    }

    else if(birthYear===todayYear){
        let diffDay=monthWiseDays[birthMonth]-birthDay,diffMonth=0;
        for(let i=birthMonth+1;i<todayMonth;i++){
            if(i===2 && isLeapYear(birthYear)) diffDay+=1;
            diffDay+=monthWiseDays[i];
        }
        diffDay+=todayDay;
        if(diffDay>=30){
            diffMonth=parseInt(diffDay/30);
            diffDay=diffDay%30;
        }
    
        if(diffMonth!==0 && diffDay!==0){
            p.innerText=`${diffMonth} month and ${diffDay} days old.`;
        }
        else if(diffMonth!==0){
            p.innerText=`${diffMonth} month old!`;
        }
        else{
            p.innerText=`Only ${diffDay} days old!`;
        }
    }

    else{
        let diffDay=0,diffMonth=0,diffYear=0;
        diffDay+=monthWiseDays[birthMonth]-birthDay;
        console.log(diffDay);
        for(let i=birthMonth+1;i<12;i++){
            if(i===2 && isLeapYear(birthYear)) diffDay+=1;
            diffDay+=monthWiseDays[i];
        }
        console.log(diffDay);
        for(let i=birthYear+1;i<todayYear;i++){
            if(isLeapYear(i)) diffDay+=1;
            diffDay+=365;
        }
        console.log(diffDay);
        for(let i=0;i<todayMonth;i++){
            if(i===2 && isLeapYear(todayYear)) diffDay+=1;
            diffDay+=monthWiseDays[i];
        }
        console.log(diffDay);
        diffDay+=todayDay;
        console.log(diffDay);
        if(diffDay>=365){
            diffYear=parseInt(diffDay/365);
            diffDay=diffDay%365;
            diffMonth=parseInt(diffDay/30);
            diffDay=diffDay%30;
        }
        else if(diffDay>30){
            diffMonth=parseInt(diffDay/30);
            diffDay=diffDay%30;
        }

        console.log(diffDay,diffMonth,diffYear);
        if(diffYear!==0 && diffMonth!==0 && diffDay!==0){
            p.innerText=`${diffYear} year, ${diffMonth} months, and ${diffDay} days old.`;
        }
        else if(diffYear!==0 && diffMonth!==0){
            p.innerText=`${diffYear} year and ${diffMonth} month old.`;
        }
        else if(diffYear!==0 && diffDay!==0){
            p.innerText=`${diffYear} year and ${diffDay} days old.`;
        }
        else if(diffYear!==0){
            p.innerText=`${diffYear} year old.`;
        }
        else if(diffMonth!==0 && diffDay!==0){
            p.innerText=`${diffMonth} months and ${diffDay} days old.`;
        }
        else if(diffMonth!==0){
            p.innerText=`${diffMonth} month old.`;
        }
        else if(diffDay!==0){
            p.innerText=`Only ${diffDay} days old.`;
        }

    }
    p.style.display="block";
}
calculateBtn.addEventListener("click",()=>{
    ageCalculator();
})