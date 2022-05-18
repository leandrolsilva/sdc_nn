class Car {
    constructor(x,y,width,height,with_sensors=false){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.hasSensors=with_sensors;
        
        this.isMoving = false;
        this.speed = 0;
        this.acceleration  = 0.2;
        this.maxSpeed = 3;
        this.maxRevSpeedProportion = 0.3;
        this.friction = 0.05
        
        this.angle=0;
        this.turnAngle=0.03;

        this.controls=new Controls();
        this.sensor=null;
        if (this.hasSensors) this.sensor = new Sensor(this,3);
        //console.table(this);
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            - this.width/2,
            - this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
        if (this.hasSensors) this.sensor.draw(ctx);

        ctx.restore();
    }

    update(){
        //if (!this.controls.forward && !this.controls.reverse && !this.controls.left && ! this.controls.right)


        if (this.controls.forward){
            this.speed+= this.acceleration;
        }
        if (this.controls.reverse){
            this.speed-=this.acceleration;
        }
        
        const abs_speed = Math.abs(this.speed) > this.friction ? Math.abs(this.speed) : 0;
        this.isMoving = abs_speed != 0;
        const speed_sign = this.speed==0?1:abs_speed/this.speed;
        const max_speed = this.maxSpeed * (speed_sign < 0 ? this.maxRevSpeedProportion : 1 )

        //const turn_delta = this.turnAngle*speed_sign;
        //if (this.controls.left){
        //    this.angle+= this.isMoving ? turn_delta: 0;
        //}
        //if (this.controls.right){
        //    this.angle-=  = this.isMoving ? 1 : 0;
        //}
        //this.angle+= this.isMoving ? turn_delta : 0;

        let turn_delta_multiplier = this.isMoving ? (this.controls.left ? 1 : (this.controls.right ? -1 : 0)):0;
        this.angle+= this.turnAngle*speed_sign*turn_delta_multiplier;

        if(this.isMoving && abs_speed>max_speed /*&& this.abs_speed!=0*/) {
            this.speed=max_speed * speed_sign;
        }
        if(this.isMoving) {
            this.speed-=(speed_sign * this.friction);
            this.x-=Math.sin(this.angle)*this.speed;
            this.y-=Math.cos(this.angle)*this.speed;
        }
        
        if (this.hasSensors) this.sensor.update();
        //console.table(x,y);
    }

}
