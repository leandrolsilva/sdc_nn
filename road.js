class Road{
    constructor(x, width, height=10000000, laneCount=3){
        this.borders = [];
        this.x=x;
        this.width=width;
        this.height=height;
        this.laneCount=laneCount;
        this.laneWidth=width/laneCount;

        this.left=x-width/2+5;
        this.right=x+width/2-5;

        this.top=-height;
        this.bottom=height;
        console.table(this);
    }

    draw(ctx){
        ctx.lineWidth = 5;
        ctx.strokeStyle="white";
        
        for(let i=0;i<=this.laneCount;i++){
            const x=lerp(
                this.left
                , this.right
                , i/this.laneCount
            );
            const line_dash=(i>0 && i<this.laneCount ? [20,20]: [])
            ctx.setLineDash(line_dash);
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
            
        }
    }

}

function lerp(A, B, t){
    return A+(B-A)*t;
}