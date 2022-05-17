class Controls{
    constructor(){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;
        this.mousedown=false;

        this.addListeners();
    }
    addListeners(){
        document.onmousedown=(event)=>{
            if(event.target.type=='button' && !this.mousedown){
                this.mousedown=true;
                let fw = false;
                let rv = false;
                let le = false;
                let ri = false;

                const commands = [event.target.value[0],event.target.value[1]];

                if (commands.includes('u')) fw=true;
                if (commands.includes('l')) le=true;
                if (commands.includes('r')) ri=true;
                if (commands.includes('d')) rv=true;

                this.forward=fw;
                this.reverse=rv;
                this.left=le;
                this.right=ri;
            }
        }

        document.onmouseup=(event)=>{
            if(event.target.type=='button'){
                
                this.forward=false;
                this.reverse=false;
                this.left=false;
                this.right=false;
                this.mousedown=false;
            }
        }


        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
                                            
            }
            console.table(this);
        }

    
    
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
                                            
            }
            console.table(this);
        }

        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
                                            
            }
            //console.table(this);
        }

    }

}
