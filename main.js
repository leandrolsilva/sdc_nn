const canvas=document.getElementById("sdc-canvas");
canvas.height = window.innerHeight;
//canvas.width = 250;

const ctx = canvas.getContext("2d");
const maxLanes=4;
const numLanes =  Math.floor(2+Math.random() * (maxLanes - 2));
const carWidth=30;
const carHeight=50;
canvas.width=numLanes*(carWidth+20)/0.9;
const canvasCenterX=canvas.width/2;
const road = new Road(canvasCenterX, canvas.width*0.9,numLanes);

const startLane =  Math.floor(Math.random() * (numLanes));
const carX=road.getLaneX(startLane);
//alert([numLanes, startLane, canvas.width, canvasCenterX]);
const fixedCameraPercent=0.7;
const carY=canvas.height*fixedCameraPercent;

const car = new Car(carX,carY,carWidth,carHeight);
road.draw(ctx);
car.draw(ctx);

animate();

function animate(){
    //road.update();
    car.update();

    canvas.height = window.innerHeight;
    ctx.save();
    ctx.translate(0,-car.y+canvas.innerHeight*fixedCameraPercent);
    
    road.draw(ctx);
    car.draw(ctx);
    
    ctx.restore();
    requestAnimationFrame(animate);
}

