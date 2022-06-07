let inp = document.querySelectorAll(".inp-timer");
let startDisBtn = document.querySelector(".btn-start-dis");
let resetDisBtn = document.querySelector(".btn-reset-dis");

for(let i = 0 ; i < inp.length; i++) {
    inp[i].addEventListner("change", ()=>{
        document.querySelector(".startDisBtn").style.background = "url('./src/assets/start-default.svg') no-repeat";
        document.querySelector(".resetDisBtn").style.background = "url('./src/assets/reset-default.svg') no-repeat";
    })
}
