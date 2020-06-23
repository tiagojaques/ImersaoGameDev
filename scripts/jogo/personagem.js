class Personagem {
  constructor(imagem){
    this.imagem = imagem;
    this.tamX = 220;
    this.tamY = 270;
    this.alturaPersonagem = 135;
    this.larguraPersonagem = 110;
    this.frameAtual = 0;
    
    this.qtdCol = ( this.imagem.width / this.tamX );
    this.qtdLine = ( this.imagem.height / this.tamY );
  }
  
  exibe(){
    
    let x = this.frameAtual % this.qtdCol * this.tamX;
    let y = Math.floor(this.frameAtual / this.qtdLine) * this.tamY;
    

    
    image(this.imagem, 0, height- this.alturaPersonagem, this.larguraPersonagem, this.alturaPersonagem, x, y, this.tamX, this.tamY);
    
    //image(this.imagem, 0, height-135, 110, 135, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 220, 270); 
    this.anima();
  }
  
  anima(){
    this.frameAtual++;
    
    if (this.frameAtual===((this.qtdCol * this.qtdLine)-1)){
      this.frameAtual = 0;
    }
  }
  
}