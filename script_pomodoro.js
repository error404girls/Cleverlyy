const div = document.getElementById('timer_container');

  function updateSize() {
    const width = div.offsetWidth;
    document.getElementById('timer').style.fontSize = `${Math.ceil(150 * width / 880)}px`;
  }

  window.addEventListener('resize', updateSize);
  window.addEventListener('load', updateSize);



function whattodo(){
    if(document.querySelector("#dd i").classList.contains("fa-bars"))
        open_menu();
    else
        close_menu();
}


function open_menu() {
    document.getElementById("menu").style.width = "250px";
    document.querySelector("#dd i").classList.remove("fa-bars");
    document.querySelector("#dd i").classList.add("fa-xmark");
}
  
function close_menu() {
    document.getElementById("menu").style.width = "0";
    document.querySelector("#dd i").classList.remove("fa-xmark");
    document.querySelector("#dd i").classList.add("fa-bars");
  }


let time, tleft, tdefault;
let ok = 0;

function setTimer ()
{ 
    let minutes = parseInt(document.getElementById("minutes_input").value);
    let seconds = parseInt(document.getElementById("seconds_input").value);

    if(minutes > 59)
        minutes = 59;
    if(seconds > 59)
        seconds = 59;
    tleft = minutes * 60 + seconds;
    tdefault = tleft;
    displayy();
}

function displayy()
{
    let minutes = Math.floor(tleft / 60);
    let seconds = tleft % 60;
    document.getElementById("timer").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

let start = document.getElementById("start");

start.addEventListener("click", function(){
    if(start.textContent == "start" || start.textContent == "resume")
    {
        start.textContent = "pause";
        startTimer();
    }
    else
    {
        start.textContent = "resume";
        pauseTimer();
    }
});

document.getElementById("reset").addEventListener("click", function(){
    if(start.textContent != "start")
        start.textContent = "start";
    resetTimer();
})

function open_cm()
{
  document.getElementById("costumize_menu").style.display = "flex";
}
function startTimer () 
{
    if(ok==1)
    {
        return ;
    }
    ok = 1;
    time = setInterval (function () 
    {
        if(tleft > 0)
        {
            tleft--;
            displayy();
        }
        else
        {
            clearInterval(time);
            ok = 0;
            document.querySelector("#costum_alert p").textContent = "Time`s up! Take a short break!";
            document.getElementById("costum_alert").style.display = "flex";
        }
    }, 1000);
}
function pauseTimer ()
{
    clearInterval(time);
    ok = 0;
}
function resetTimer ()
{
    pauseTimer();
    tleft = tdefault;
    setTimer();
}
setTimer();

/* edits */

function bgcolor()
{
    document.body.style.backgroundColor = document.getElementById("bg_color").value;
}

function btncolor()
{
    let buttons = document.querySelectorAll("#timer_container .buttons button");
    for(let i = 0; i < buttons.length; i++) 
        buttons[i].style.backgroundColor = document.getElementById("btn_color").value;

}
function fontcolor()
{
    timer.style.color = document.getElementById("font_color").value;
    let buttons = document.querySelectorAll("#timer_container .buttons button");
    for(let i = 0; i < buttons.length; i++) 
        buttons[i].style.color = document.getElementById("font_color").value;
}
function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g).map(x => parseInt(x).toString(16).padStart(2, '0'));
    return `#${result.join('')}`;
}
document.getElementById("cancel_button").addEventListener("click", function()
{
    document.getElementById("minutes_input").value = "30";
    document.getElementById("seconds_input").value = "0";
    document.getElementById("minutes_break").value = "5";
    document.getElementById("seconds_break").value = "0";
    document.getElementById("bg_color").value = rgbToHex(getComputedStyle(document.body).backgroundColor);
    document.getElementById("font_color").value = rgbToHex(getComputedStyle(document.getElementById("timer")).color);
    document.getElementById("btn_color").value = rgbToHex(getComputedStyle(document.querySelector("#timer_container .buttons button")).backgroundColor);
    document.getElementById("costumize_menu").style.display = "none";
})
function resetfnc()
{
    document.getElementById("minutes_input").value = "30";
    document.getElementById("seconds_input").value = "0";
    document.getElementById("minutes_break").value = "5";
    document.getElementById("seconds_break").value = "0";
    document.getElementById("font_color").value = "#39397c";
    document.getElementById("bg_color").value = "a9b7da";
    document.getElementById("timer").style.color = "#39397c";
    document.body.style.backgroundColor = "#a9b7da";
    document.getElementById("btn_color").value = "#a9b7da"
    let buttons = document.querySelectorAll("#timer_container .buttons button");
    for(let i = 0; i < buttons.length; i++) 
    {
        buttons[i].style.backgroundColor = "#a9b7da";
        buttons[i].style.color = "#39397c";
    }
    document.getElementById("costumize_menu").style.display = "none";

}
function savefnc()
{
    setTimer();
    bgcolor();
    btncolor();
    fontcolor();
    document.getElementById("costumize_menu").style.display = "none";
}
function close_alert()
{
    document.getElementById("costum_alert").style.display = "none";
    let minutes = parseInt(document.getElementById("minutes_break").value);
    let seconds = parseInt(document.getElementById("seconds_break").value);
    tleft = minutes * 60 + seconds;
    startTimer();
}
