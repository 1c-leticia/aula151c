function setup() {
  createCanvas(200, 300);
  background("pink");//função para pintar o fundo
}

function draw() {
 stroke("blue");//altera a cor da borda do desenho
  fill("red");//altera a cor do preenchimento do desenho
  

  if(mouseIsPressed) {
 rect(mouseX, mouseY, 40 ,40); 
}   
}