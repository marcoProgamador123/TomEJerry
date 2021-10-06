
var fundo;
var tom,anima_tom1,anima_tom2,anima_tom3;
var jerry,anima_jerry1,anima_jerry2,anima_jerry3

function preload() {
    //adicione suas imagens aqui
    fundo = loadImage("garden.png");
    //animando o Tom
    anima_tom1 = loadAnimation("cat1.png");
    anima_tom2 = loadAnimation("cat2.png","cat3.png");
    anima_tom3 = loadAnimation("cat4.png");
    //animando o Jerry
    anima_jerry1 = loadAnimation("mouse1.png");
    anima_jerry2 = loadAnimation("mouse2.png","mouse3.png");
    anima_jerry3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(750,600);
    //criando Tom
    tom = createSprite(600,520,20,20);
    tom.addAnimation("tom quer um leitinho",anima_tom1);
    tom.addAnimation("o show de tom e jerry",anima_tom2);
    tom.addAnimation("tom quer um carinho",anima_tom3);
    tom.scale = 0.1;

    //criando Jerry
    jerry = createSprite(200,520,20,20);
    jerry.addAnimation("Jerry quer um queijinho",anima_jerry1);
    jerry.addAnimation("tom vem aqui",anima_jerry2);
    jerry.addAnimation("o rato e o gato detetives",anima_jerry3);
    jerry.scale = 0.1;

    
}

function draw() {

    background(fundo);

    //escreva a condição aqui para avaliar se Tom e Jerry colidem
    if (tom.x - jerry.x < (tom.width/2 - jerry.width/2)){
        tom.velocityX = 0;
    //jerry.chageAnimation("deixa eu ver se tem uma pulga",anima_jerry3);
    tom.changeAnimation("tom quer um carinho",anima_tom3);
    jerry.changeAnimation("o rato e o gato detetives",anima_jerry3);
    tom.x = jerry.x+100; 
    }
    
    pressionado();
    drawSprites();
    textSize(30);
    fill("orange")
    text("BEM-VINDO AO SHOW ",210,100);
    fill("yellow");
    textSize(30);
    text("DE",350,140);
    fill("blue");
    textSize(32);
    text("Tom & Jerry",290,190);  
}


function pressionado(){

  //Para mover e alterar o código da animação, escreva aqui
  if (keyDown("left")) {
    tom.changeAnimation("o show de tom e jerry",anima_tom2);
    jerry.changeAnimation("tom vem aqui",anima_jerry2); 
    tom.velocityX = -3;
    tom.scale = 0.15;  
  } 
    
    
   

}
