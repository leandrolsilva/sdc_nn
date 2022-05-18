// Avoid the context menu popup
window.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);

const canvas=document.getElementById("sdc-canvas");
canvas.height = window.innerHeight;
//canvas.width = 250;

const ctx = canvas.getContext("2d");
const minLanes=2;
const maxLanes=5;
const numLanes =  Math.floor(Math.random() * (maxLanes - minLanes + 1) + minLanes);
const carWidth=30;
const carHeight=50;
canvas.width=numLanes*(carWidth+20)/0.9;
const canvasCenterX=canvas.width/2;
const road = new Road(canvasCenterX, canvas.width*0.9,numLanes);

const startLane =  Math.floor(Math.random() * (numLanes));
console.log([numLanes,startLane]);
const carX=road.getLaneX(startLane);
//alert([numLanes, startLane, canvas.width, canvasCenterX]);
const fixedCameraPercent=0.7;
const carY=canvas.height*fixedCameraPercent;

const car = new Car(carX,carY,carWidth,carHeight,true);
road.draw(ctx);
car.draw(ctx);

animate();

function animate(){
    //road.update();
    car.update();
    canvas.height = window.innerHeight;
    ctx.save();
    ctx.translate(0,-car.y + canvas.height * fixedCameraPercent);
    
    road.draw(ctx);
    car.draw(ctx);
    
    ctx.restore();
    requestAnimationFrame(animate);
}