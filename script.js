
let idinterval;
let global_distance;
let timer=document.getElementById("timer");
timer.innerHTML="00:00:00";


let pause=false;
timer.addEventListener("click",function(){
    if(pause)
    {
        pause=false;
       startTimer(global_distance);
    }
    else
    {
        pause=true;
        clearInterval(idinterval);
    }
});



let savebtn=document.getElementById("savebtn");
let d1=(localStorage.getItem("d1")===null)?1800:localStorage.getItem("d1"),d2=(localStorage.getItem("d2")===null)?300:localStorage.getItem("d2"),d3=(localStorage.getItem("d3")===null)?600:localStorage.getItem("d3");

savebtn.addEventListener("click",function(event){
    let a1=document.getElementById("pomodoro_time").value;
    let a2=document.getElementById("sb_time").value;
    let a3=document.getElementById("lb_time").value;
    if(!(/^$|^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/.test(a1)) || !(/^$|^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/.test(a2)) || !(/^$|^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/.test(a3)))
    {
        alert("Please enter a valid time");
        return;
    }
    else
    {
        d1= (a1==="")?1800: parseInt(a1)*3600+parseInt(a1.slice(3))*60+parseInt(a1.slice(6));
        d2= (a2==="")?300: parseInt(a2)*3600+parseInt(a2.slice(3))*60+parseInt(a2.slice(6));
        d3= (a3==="")?600: parseInt(a3)*3600+parseInt(a3.slice(3))*60+parseInt(a3.slice(6));
        document.getElementById("pomodoro_time").value="";
        document.getElementById("sb_time").value="";
        document.getElementById("lb_time").value="";
        let el=document.getElementById("setmenu");
        el.classList.toggle("hide");
        localStorage.setItem("d1", d1);
        localStorage.setItem("d2", d2);
        localStorage.setItem("d3", d3);
    }
});

function startTimer(distance)
{
    if(distance>0)
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
        global_distance=distance;
    },1000);
}
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
    startTimer(d1);
});
menu_elts[1].addEventListener("click",function(){
    startTimer(d2);
});
menu_elts[2].addEventListener("click",function(){
    startTimer(d3);
});



let setbtn=document.getElementById("setbtn");
setbtn.addEventListener("click",function(){
    let el=document.getElementById("setmenu");
    el.classList.toggle("hide");
})




document.getElementById("pomodoro_time").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("savebtn").click();
  }
});


document.getElementById("sb_time").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("savebtn").click();
    }
  });
  
  document.getElementById("lb_time").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("savebtn").click();
    }
  });
  
    

