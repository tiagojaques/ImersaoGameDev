class Personagem extends Animacao {
  constructor(imagem, x, largura, altura, larguraSprite, alturaSprite){
    super(imagem, x, largura, altura, larguraSprite, alturaSprite)
    
    this.yInicial = height - this.altura - 72;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.limitePulo = 2;
    this.contaPulo = 0;
  }

  pula(somDoPulo) {
    if (this.contaPulo < this.limitePulo) {
      this.velocidadeDoPulo =  - 30;
      somDoPulo.play();
      this.contaPulo++;
      if (this.contaPulo===1) {
        Pontuacao = (Pontuacao + 10);
      }
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if (this.y > this.yInicial) {
        this.y = this.yInicial;
        this.contaPulo = 0;
    }
  }
  
  estaColidindo(inimigo) {
    const precisao = 0.7;
    
    return collideRectRect(
        this.x, 
        this.y, 
        this.largura*precisao, 
        this.altura*precisao,
        inimigo.x, 
        inimigo.y, 
        inimigo.largura*precisao, 
        inimigo.altura*precisao
    )
  }
}