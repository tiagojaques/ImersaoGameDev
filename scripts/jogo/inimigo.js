class Inimigo extends Animacao {
  constructor(imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(imagem, x, largura, altura, larguraSprite, alturaSprite)
    
    this.velocidade = 8
  }
  
  move() {
    this.x = this.x - this.velocidade
    
    if(this.x < -this.largura){
      this.x = width}
  }
}