class Food {
    
    constructor(){
        this.foodStock = "0"
        this.image = loadImage ("images/Milk.png");
        this.lastFed;
    }
    updatefoodStock(foodStock){
        this.foodStock = foodStock
    }

    getfedTime(lastFed){
        this.lastFed = lastFed
    }

    deductfood(){
        if(foodStock > 0){
            this.foodStock = foodStock-1;
        }
    }

    getfoodStock (){
        return this.foodStock;
    }

    display(){
       var  x = 80,  y = 100
    ImageMode(CENTER);
    image(this.image, 720, 220, 70, 70);

    if(this.foodStock !=0){
        for (var i=0; i<this.foodStock; i++){
            if(i%10==0){
                x = 80;
                y=y+50;
            }
            this.image(this.image, x, y, 50, 50);
            x=x+30;
        }
    }


    }
}
