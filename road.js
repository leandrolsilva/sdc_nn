class Road{
    constructor(x, width, height=10000000, laneCount=3){
        this.borders = [];
        this.x=x;
        this.width=width;
        this.height=height;
        this.laneCount=laneCount;

        this.left=x-width/2+5;
        this.right=x+width/2-5;

        this.top=-height;
        this.bottom=height;
        console.table(this);
    }

    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle="white";
        
        ctx.beginPath();
        ctx.moveTo(this.left, this.top);
        ctx.lineTo(this.left, this.bottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.stroke();
    }

}