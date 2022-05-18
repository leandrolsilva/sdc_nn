class Sensor{
    constructor(car,rayCount=1,length=150){
        this.car = car;
        this.rayCount=rayCount;
        this.x=this.car.x;
        this.y=this.car.y;
        this.angle=this.car.angle;
        this.length=length;
        this.endx -= Math.sin(this.angle)*this.length;
        this.endy -= Math.cos(this.angle)*this.length;
    }
    draw(ctx){
        ctx.lineWidth = 3;
        ctx.strokeStyle="yellow";

        ctx.beginPath();
        //ctx.translate(this.x,this.y);
        //ctx.rotate(-this.angle);

        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.endx, this.endy);
        ctx.stroke();

    }
    update(){
        this.angle=this.car.angle;
        this.x=this.car.x;
        this.y=this.car.y;
        //this.endx -= Math.sin(this.angle)*this.length;
        //this.endy -= Math.cos(this.angle)*this.length;
        this.endx-=Math.sin(this.angle)*this.length;
        this.endy-=Math.cos(this.angle)*this.length;


    }

}