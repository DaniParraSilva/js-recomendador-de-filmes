//Idade 12 anos;
//1)Transformers, ação/ficção científica
//2)Titanic, romance
//3)Segurança de Shopping 2, comédia/ação

//Idade 14 anos
//1)Missão Impossível - Efeito Fallout, ação
//2)Elvis, Musical/biografia
//3)Velozes e Furiosos 5: Operação Rio, Ação

//Idade livre
// O zelador animal, livre, infantil/comédia
// A Era do Gelo 1, livre, infantil/Comédia/Aventura
// Shaun Carneiro - O Filme, infantil/comédia


let campoIdade;
let campaocao;
let camporomance;
let campocomedia;
let musicalebiografia;
let filme;

function setup() {
  createCanvas(600, 400);
 createElement('h1', 'Recomendador de Filmes');
  createSpan("Idade:");
campoIdade = createInput('1');
  createElement('h4', 'Escolha somente um gênero:');
campoAcao = createCheckbox('Ação');
campoRomance = createCheckbox('Romance');
campoComedia = createCheckbox('Comédia');
campoMusicaleBiografia = createCheckbox('Musical e Biografia');
}

function draw() {
  background('gold');
  textAlign(CENTER, CENTER);
  textSize(30);
  fill("black")
  let idade = campoIdade.value();
  let acao = campoAcao.checked();
  let romance = campoRomance.checked();
  let comedia = campoComedia.checked();
  let musicalebiografia = campoMusicaleBiografia.checked();
  filme = geraRecomendacao(idade, acao, romance, comedia, musicalebiografia);
  
  text(filme, width/2, height/2);
}
function geraRecomendacao(idade, acao, romance, comedia, musicalebiografia){
   if(idade >= 14){
    if(acao){
      return 'Velozes e Furiosos 5: Operação Rio';
    }else if(romance){
      return 'Como eu era antes de você'
    }else if(comedia){
      return 'Segurança de Shopping 2';
    }else if(musicalebiografia) { 
      return  "Elvis"; 
    }else{
      return 'Velozes e Furiosos 5: Operação Rio'
    }
  
   } else if(idade >= 12){
    if(acao){
      return 'Transformers';
    }else if(romance){
      return 'Titanic'
    }else if(comedia){
      return 'Gente Grande';
    }else if(musicalebiografia) { 
      return  "Harriet"; 
    }else{
      return 'Transformers'
    }
  }else{
    if(acao){
      return 'Shaun Carneiro: O Filme';
    }else if(romance){
      return 'A Princesa e a Plebeia'
    }else if(comedia){
      return 'A Era do Gelo 1';
    }else if(musicalebiografia) { 
      return  "Sing: Quem Canta Seus Males Espanta"; 
    }else{
      return 'Shaun Carneiro: O Filme'
    }
  }
}
