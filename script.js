'use strict'


let button = document.getElementById("rollD6");
let result = document.querySelector('.result');
let dados = document.querySelector('.dados');
let sortUp = document.getElementById('sortup');
let sortDown = document.getElementById('sortdown');
let sort = document.querySelector('.sort');
// let sort2 = document.querySelector('.sort2');
let showDice = document.getElementById('showdice');
let ctx = showDice.getContext("2d");
var image = document.querySelector('.imagedice');

let sum  = 0;
let num = [];
let imgW = 35;
let imgH = 35;
let imgY  = 20;


button.addEventListener ('click', function (){

    ctx.clearRect(0,0,showDice.clientWidth,showDice.height)
        sum  = 0;
        num = [];
        let number = document.getElementById("number").value;
        if(number <= 0 || number>17) {
            alert(`Please enter a value between 1 and 17`);
            ctx.clearRect(0,0,showDice.clientWidth,showDice.height);
            // break;
        }else
        {    for(let i = 0; i < number; i++) {
                let imgX  = 20 + (i * 40);
                num[i] = Math.trunc((Math.random() * 6) + 1);
                image.src=`assets/d6-${num[i]}.png`;
                sum += num[i];
                ctx.drawImage(image, imgX, imgY, imgW, imgH);
            
        }}
        
        
        result.id=``;
        // dados.id=``;
        sort.id=``;

        result.textContent = `SUM ${sum}`;

        // dados.textContent = `${num}`;

});

sortUp.addEventListener('click', function (){
    num.sort((a,b) => a -b);
    // dados.textContent = `${num}`;
    ctx.clearRect(0,0,showDice.clientWidth,showDice.height);
    for(let i = 0; i < num.length; i++) {
        image.src=`assets/d6-${num[i]}.png`;
        let imgX  = 20 + (i * 40);
        ctx.drawImage(image, imgX, imgY, imgW, imgH);
    }
});

sortDown.addEventListener('click', function (){
    num.sort((a,b) => b - a);
    // dados.textContent = `${num}`;
    ctx.clearRect(0,0,showDice.clientWidth,showDice.height);
    for(let i = 0; i < num.length; i++) {
        image.src=`assets/d6-${num[i]}.png`;
        let imgX  = 20 + (i * 40);
        ctx.drawImage(image, imgX, imgY, imgW, imgH);
    }
})