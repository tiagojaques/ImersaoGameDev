class Inimigo extends Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay) {
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
    //this.x = 0;

    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;
    this.isShow = true;
  }

  move() {
    this.x = this.x - this.velocidade

    if (this.x < -this.largura - this.delay) {
      this.x = width
      this.isShow = false;
    }

  }
}