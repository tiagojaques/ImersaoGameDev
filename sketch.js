let imagemCenario1;
let imagemCenario2;
let imagemCenario3;
let imagemCenario4;
let imagemCenario5;
let imagemCenario6;
let imagemCenario7;

let imagemPersonagem;
let imagemInimigo;
let imagemNpc;

let fontPrincipal;

let cenario;
let trilhaSonora;
let personagem;
let inimigo;

let contaVidas = 3;
let Pontuacao = 0;

function preload() {
  imagemCenario1 = loadImage('imagens/cenario/fase01/7.png');
  imagemCenario2 = loadImage('imagens/cenario/fase01/6.png');
  imagemCenario3 = loadImage('imagens/cenario/fase01/5.png');
  imagemCenario4 = loadImage('imagens/cenario/fase01/4.png');
  imagemCenario5 = loadImage('imagens/cenario/fase01/3.png');
  imagemCenario6 = loadImage('imagens/cenario/fase01/2.png');
  imagemCenario7 = loadImage('imagens/cenario/fase01/1.png');
  
  fontPrincipal = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoPulo = loadSound('sons/somPulo.mp3');  
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemNpc = loadImage('imagens/cenario/npc/bee.png');
  trilhaSonora = loadSound('sons/trilha_jogo.mp3');
  gg = loadSound('sons/GameOver.ogg');
  
  gameover = loadImage('imagens/assets/game-over.png');
}

function keyPressed() {
  if (key==='ArrowUp'){
    personagem.pula(somDoPulo);
  }
  if (key==='Enter'){
    /*
    setup();
    draw();
    */
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario1 = new Cenario(imagemCenario1, 5);
  cenario2 = new Cenario(imagemCenario2, 5);
  cenario3 = new Cenario(imagemCenario3, 2);
  cenario4 = new Cenario(imagemCenario4, 2);
  cenario5 = new Cenario(imagemCenario5, 5);
  cenario6 = new Cenario(imagemCenario6, 7);
  cenario7 = new Cenario(imagemCenario7, 7);

  personagem = new Personagem(imagemPersonagem, 0, 132, 162, 220, 270);
  inimigo = new Inimigo(imagemInimigo, width-52, 52, 50, 105, 100);
  npc = new Npc(imagemNpc, width-28, 28, 25.33, 28, 25.33, 300);
  
  frameRate(30);
  trilhaSonora.loop();
}

function draw() {
  cenario1.exibe();
  cenario2.exibe();
  cenario3.exibe();
  cenario4.exibe();
  cenario5.exibe();
  cenario6.exibe();
  cenario7.exibe();
  
  cenario1.move();
  cenario2.move();
  cenario3.move();
  cenario4.move();
  cenario5.move();
  cenario6.move();
  cenario7.move();
 
  personagem.exibe();
  personagem.aplicaGravidade();
  
  textFont(fontPrincipal);
  fill(color('#FFFFFF'));
  textSize(width / 20);
  textAlign(CENTER, CENTER);
  text('SCORE: ' + int(Pontuacao), windowWidth - 130 , 30);  
  
  inimigo.exibe();
  inimigo.move();
  
  npc.exibe()
  npc.move();
  
  if (personagem.estaColidindo(inimigo)){
    console.log('colidiu');
    trilhaSonora.stop();
    createCanvas(windowWidth, windowHeight);
    image(gameover, ((windowWidth/2)-(gameover.width/2)), ((windowHeight/2)-(gameover.height/2)));
    fill(color('#FFFFFF'));
    cWidth = textWidth('FINAL SCORE: ' + int(Pontuacao));
    text('FINAL SCORE: ' + int(Pontuacao), ((windowWidth/2)), (windowHeight/2)+(gameover.height));
    noLoop();
    gg.play();
    contaVidas--;
  }
  Pontuacao = (Pontuacao + 1/3);
}