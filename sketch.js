let imagemCenario;
let imagemPersonagem;
let cenario;
let trilhaSonora;
let personagem;

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  trilhaSonora = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 2, trilhaSonora);
  personagem = new Personagem(imagemPersonagem);
  frameRate(30);
  trilhaSonora.loop();
}

function draw() {
  cenario.exibe();
  cenario.move()
  personagem.exibe();
}

