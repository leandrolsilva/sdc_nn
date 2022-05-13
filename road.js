class Road{
    constructor(x, width, laneCount=4, height=10000000){
        this.borders = [];
        this.x=x;
        this.width=width;
        this.height=height;
        this.curbSize=0;
        this.laneCount=laneCount;
        this.laneWidth=(width-2*this.curbSize)/laneCount;
        
        this.left=x-width/2+this.curbSize;
        this.right=x+width/2-this.curbSize;

        this.top=-height;
        this.bottom=height;
        //console.table(this);
    }

    draw(ctx){
        ctx.lineWidth = 3;
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

    getLaneX(lane){
        return this.left + this.laneWidth/2 + this.laneWidth * (lane>this.laneCount?this.laneCount:lane)
    }
}

function lerp(A, B, t){
    return A+(B-A)*t;
}