class Car {
    constructor(x,y,width,height,with_sensors=false){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        
        this.speed = 0;
        this.acceleration  = 0.2;
        this.maxSpeed = 3;
        this.maxRevSpeedProportion = 0.3;
        this.friction = 0.05
        
        this.angle=0;
        this.turnAngle=0.03;

        this.controls=new Controls();
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

        ctx.restore();
    }

    update(){
        if (this.controls.forward){
            this.speed+= this.acceleration;
        }
        if (this.controls.reverse){
            this.speed-=this.acceleration;
        }
        
        const abs_speed = Math.abs(this.speed);
        const rev_abs_multiplier = this.speed==0?1:abs_speed/this.speed;
        const max_speed = this.maxSpeed * (rev_abs_multiplier < 0 ? this.maxRevSpeedProportion : 1 )
        
        if (this.controls.left){
            this.angle+=this.turnAngle*rev_abs_multiplier;
        }
        if (this.controls.right && this.abs_speed!=0){
            this.angle-=this.turnAngle*rev_abs_multiplier;
        }
        
        if(abs_speed>max_speed && this.abs_speed!=0) {
            this.speed=max_speed * rev_abs_multiplier;
        }
        if(abs_speed>0) {
            this.speed=this.speed - (rev_abs_multiplier * this.friction);
        }
        
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
        //console.table(x,y);
    }

}
