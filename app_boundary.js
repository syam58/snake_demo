const canvas =document.getElementById("canvas");
const ctx = canvas.getContext('2d');
console.log(ctx);

const btn= document.querySelector(".btn");
const scoreP =document.querySelector(".scoreP");
//const btnU= document.querySelector(".upBtn");


//console.log(btn.onclick);
//console.log(btnU.onclick);




var x=10;
var y=10;
var boxW=boxH=foodH=foodW=10;
var score =0;
var foodx=50;
var foody=10;
var id;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var canvasHP = canvas.height-10;
var canvasWP = canvas.width-10;

function handle(clicked) {
  id = clicked;
 //console.log(id);
}

function box(x,y) {
  ctx.fillStyle='red';
  ctx.fillRect(x,y,boxW,boxH);
}

function food(x,y) {
  ctx.fillStyle='green';
  ctx.fillRect(x,y,foodW,foodH);
}
function restartGame() {
    x=10;
    y=10;
    score=0;
    scoreP.innerHTML=score;
    foodx=50;
    foody=10;
    id=null;
}


box(x,y);
food(foodx,foody);

function interval() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
   
   if (x<=0 || y<=0 || x+boxW >=canvasWidth|| y+boxH >=canvasHeight ) {
     
     restartGame();
   }else{
        if (id=='left') {
    x -=5;
  }else if (id=='down') {
    y +=5;
  } else if(id=='up'){
    y -=5;
  }  else if (id=='right') {
    x +=5;
  } 
  box(x,y);
  
 
  if (x>foodx+foodW || x+boxW<foodx||y>foody+foodH || y+boxH<foody) {
    food(foodx,foody);
  }else{
    
    score++;
    scoreP.innerHTML=score;
    
    foodx=Math.floor(Math.random()*canvasWP);
    foody=Math.floor(Math.random()*canvasHP);
    food(foodx,foody);
  }
   }
      
  
}
  
  
setInterval(interval, 200);








