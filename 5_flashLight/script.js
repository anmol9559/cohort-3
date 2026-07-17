const screen = document.querySelector("main")
const btn = document.querySelector("button")

let flag=true;
btn.addEventListener('click',function(){
    if(flag){
        screen.style.background = "#fff";
        btn.textContent = "OFF";
        flag=false;
    }
    else{
        screen.style.background = "#000";
        btn.textContent = "ON";
        flag=true;
    }
})