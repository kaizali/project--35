
var dog, sadDog, happyDog;
var foodObj;
var foods, foodStocks;
var fedTime, lastFed, feed, addFood;

function preload(){
  sadDog = loadImage("images/Dog.png");
  happyDog = loadImage("images/happy dog.png");
}

function setup() {
	database = firebase.database()
  createCanvas(1000, 400);

  foodObj = new Food();

  foodStock = database.ref("food");
  foodStock.on("value", readStock);

  dog = createSprite(800, 200, 150, 150);
  dog.addImage(sadDog);
  dog.Scale = 0.15;

  feed = createSprite("Feed the Dog");
  feed.position(700, 95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addfoods);
  
}


function draw() {  
  background(46, 139, 87);

  foodObj.display();

  fedTime = database.ref('FeedTime');
  fedTime.on("value", function (date){
    lastFed = data.val();
  })

  fill(255, 255, 254);
  textSize(15);
  if(lastFed>= 12){
    text("last Feed: " + lastFed %12 + 12 + "PM", 350, 30);
  }
  else if(lastFed == 0){
    text("Last Feed: 12AM " , 350, 30);
  }
  else {
    text("Last Feed: " + lastFed = "AM", 350, 30);
  }
  

  drawSprites();
  //add styles here

}

function readStock(data){
  foods = data.val();
  foodsObj.updateFoodStock(foods);
}

function feedDog(){
  dog.addImage(happyDog);


  foodObj.updateFoodStock(foodObj. getFoodStock()-1)
  database.ref('/'), update({
    Food: foodObj.getFoodStock();
    FeedTime : hour()
  })
}

functions addFoods(){
  foods++;
  database.ref('/'). update({
    Foods:foods
  })
}



