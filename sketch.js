// romance,drama,suspence,ficção científica

// supernatural, 16, drama, suspense, ficção científica
// teen wolf, 14, drama suspence

// minha culpa, 16, drama, romance
// uma longa jornada, 12, drama, romance
// para todos os garotos que já amei, 14, romance, drama
// o verão que mudou minha vida, 14, drama, romance

let campoAcao;
let campoIdade;
let campoAventura;

function setup() {
  createCanvas(500, 400);
  createElement ("h2", "Recomendador de filmes")
  createSpan ("Sua idade")
  campoIdade = createInput("16");
  campoAcao = createCheckbox("Gosta de acao?");
  campoAventura = createCheckbox(" Gosta de aventura?")
}

function draw() {
  background(" rgb(61,248,195)");
  let idade = campoIdade.value();
  let gostaDeAcao = campoAcao.checked();
  let gostaDeAventura = campoAventura.checked();
  
  let recomendacao = geraRecomendacao(idade, gostaDeAcao, gostaDeAventura);
  
  
  fill (color(265,0,0));
  textAlign(CENTER, CENTER);
  textSize(32);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAcao, gostaDeAventura) {
  if(idade >= 12) {
    
  if(idade >= 16) {
      return "minha culpa";
    } 
    else {
      if(idade >= 14) {
        if(gostaDeAcao || gostaDeAventura){
          return "homem de ferro"
      } 
        else {
        return "para todos os garotos que já amei"
      }
    }
         else  {
    if(gostaDeAcao) {
    return "supernatural";
    } else {
    return "teen wolf";
   }
    }
  }
  }
}