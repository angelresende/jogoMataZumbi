//Criando as variaveis para inicio do jogo
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

var criaZumbiTempo = 1500

//substituir o marcador de tempo
var nivel = window.location.search
nivel = nivel.replace('?', '')

//indicar o nível conforme escolha do jogador
if(nivel === 'facil') {	
	criaZumbiTempo = 1600;
} else if(nivel === 'intermediario') {	
	criaZumbiTempo = 1000;
} else if (nivel === 'dificil') {	
	criaZumbiTempo = 750;
} else if (nivel === 'hard') {	
	criaZumbiTempo = 500;
}

/* Ajustando o tamanho da tela do jogo para todos os dipositivos*/
function ajustaTela(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    //console.log(altura, largura);
}

ajustaTela();

//manipulação do cronometro
var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criarZumbi)
		window.location.href = 'win.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo
	}
	
}, 1000)

 /*Criação das posições randomicamente para os zumbis*/
function posicaoRandomica() {

    //remover o zumbi anterior (caso exista)
	if(document.getElementById('zumbi')) {
		document.getElementById('zumbi').remove();

		if(vidas > 3) {
			window.location.href = 'end_game.html';

		} else {
			document.getElementById('v' + vidas).src = "assets/images/coracao_vazio.png";
			vidas++
		}
	}
   
    var posicaoX = Math.floor(Math.random() * largura) - 100;
    var posicaoY = Math.floor(Math.random() * altura) - 100;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)

    //Criar o elemento HTML ** DOM **
    var zumbi = document.createElement('img');
    zumbi.src = 'assets/images/zumbi.png'
    zumbi.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    zumbi.style.left = posicaoX + 'px';
    zumbi.style.top = posicaoY + 'px';
    zumbi.style.position = 'absolute';
	zumbi.id = 'zumbi'
	zumbi.onclick = function() {
		this.remove()
	}

    document.body.appendChild(zumbi);

    tamanhoAleatorio();
}

//Criar o tamanho aleatorio do zumbi
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'zumbi1'
		
		case 1:
			return 'zumbi2'

		case 2:
			return 'zumbi3'
	}
}

//Criar a posição aleatória 
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {
		case 0:
			return 'ladoA'
		
		case 1:
			return 'ladoB'

	}
}
