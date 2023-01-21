let distance=1800;
setInterval(
    function()
    {
        let timer=document.getElementById("timer");
        distance-=1;
        timer.innerHTML=distance;
        
    }
    , 1000
)