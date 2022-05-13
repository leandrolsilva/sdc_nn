const canvas=document.getElementById("sdc-canvas");
canvas.height = window.innerHeight;
canvas.width = 250;

const ctx = canvas.getContext("2d");

const numLanes =  Math.floor(Math.random() * 4 + 1);
const road = new Road(canvas.width/2, canvas.width*0.9,numLanes);

const startLane =  Math.floor(Math.random() * numLanes);
const carX=road.getLaneX(startLane);
console.log([numLanes, startLane]);
const carY=canvas.height*0.7;

const car = new Car(carX,carY,30,50);
road.draw(ctx);
car.draw(ctx);

animate();

function animate(){
    //road.update();
    car.update();

    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}

