
let idinterval;

let timer=document.getElementById("timer");
timer.innerHTML="00:00:00";

function startTimer(distance)
{
    clearInterval(idinterval);
    timer.style.border="10px solid #151932";
    timer.style.transition="0.1s";
    SetTimer(distance);
    distance--;
    idinterval= setInterval(function()
    {
        SetTimer(distance);
        distance--;
    },1000);

}



function SetTimer(distance)
    {
        let hour=Math.floor(distance/3600);
        let min=Math.floor((distance/60))-(hour*60);
        let sec=distance - min*60-hour*3600;
        timer.innerHTML= pad(hour,2,"0") + ':'+ pad(min,2,"0")  + ':' + pad(sec,2,"0");
        if(distance<=0)
            {
                timer.style.border="10px solid #f87270";
                timer.style.transition="1s";
                clearInterval(idinterval);
                timer.innerHTML="00:00:00";
            }
    }


function pad(x,l,c)
{
    let s=x.toString();
    let pads=c;
    return pads.repeat(l-s.length)+ s;
   
}




let menu_elts= document.querySelectorAll(".menu_elts");
menu_elts[0].addEventListener("click",function(){
    startTimer(1800);
});
menu_elts[1].addEventListener("click",function(){
    startTimer(300);
});
menu_elts[2].addEventListener("click",function(){
    startTimer(600);
});



let setbtn=document.getElementById("setbtn");
setbtn.addEventListener("click",function(){
    let el=document.getElementById("setmenu");
    el.classList.toggle("hide");
})



let a=document.getElementById("pomodoro_time").value;