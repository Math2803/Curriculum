/*Variaveis Globais*/
var textosCarrosel = [
	"Participação Feira de Conhecimento (Ciência Viva) na Universidade Federal de Uberlândia (UFU). Premiado com 3°Lugar. Em 2018",
	"Participação Feira de Conhecimento (Semana multidisciplinar - FEICON) no Instituto Federal do Triângulo Mineiro Campus Uberlândia, IFTM, Brasil em 2017.",
	"Participação Feira de Conhecimento (Semana multidisciplinar - FEICON) no Instituto Federal do Triângulo Mineiro Campus Uberlândia, IFTM, Brasil em 2018.",
	"Participação na Palestra: Como desenvolver a liderança ainda na graduação? Ministrado pela Universidade Federal de Uberlândia (UFU).",
	"participação como monitor do 30° projeto de extensão da semana da família rural, na parte correspondente ao ensino básico de informática e Smartphone."
];

var tituloCarrosel = [
	"Ciencia Viva",
	"FEICON",
	"FEICON",
	"Palestra",
	"Semana da Familia Rural"
];

var localCarrosel = [
	"Universidade Federal de Uberlandia, UFU",
	"Instituto Federal do Triângulo Mineiro Campus Uberlândia, IFTM",
	"Instituto Federal do Triângulo Mineiro Campus Uberlândia, IFTM",
	"Universidade Federal de Uberlandia, UFU",
	"Instituto Federal do Triângulo Mineiro Campus Uberlândia, IFTM"
]

var txtCarrosel_atual = 0;

/*Função de Download*/
function downloadArquivo(url) {
  // URL do arquivo que você deseja baixar
  //let url = 'Download/Curriculum.pdf';
  
  // Nome do arquivo para salvar (opcional)
  let nomeArquivo = 'Curriculum';

  // Criando um link temporário
  let link = document.createElement('a');
  link.target="_blank";
  link.href = url;
  link.download = nomeArquivo;

  // Adicionando o link ao corpo do documento
  document.body.appendChild(link);

  // Disparando o clique no link para iniciar o download
  link.click();

  // Removendo o link do corpo do documento após o download
  document.body.removeChild(link);
}

/*Função de aparecer e sumir texto*/
function EventoHover(html, id){
	if (id == 1){
		html.children[1].style.display = "flex";
	}
	else{
		html.children[1].style.display = "none";
	}
	
}

/*Criar Cards para sessão 4*/
function CardsS4(html, curso, instituicao, duracao, url){
	/**/
	card = document.createElement("div");
	img = document.createElement("div");
	descricao = document.createElement("div");
	cursoHtml = document.createElement("div");
	instituicaoHtml = document.createElement("div");
	duracaoHtml = document.createElement("div");

	/*Adicionando Class*/
	card.classList.add("cardSession4");
	img.classList.add("S4imagens");
	descricao.classList.add("S4descricao");

	/*Adicionando Imagem*/
	img.style.backgroundImage = "url(\""+url+"\")";

	/*Adicionando HTML*/
	cursoHtml.innerHTML = "Curso: "+curso;
	instituicaoHtml.innerHTML = "Instituição: "+instituicao;
	duracaoHtml.innerHTML = "Duração: "+duracao;

	/*Adicionando html*/
	card.appendChild(img);
	card.appendChild(descricao);
	descricao.appendChild(cursoHtml);
	descricao.appendChild(instituicaoHtml);
	descricao.appendChild(duracaoHtml);
	html.appendChild(card);
}

/*ANIMAÇÃO DIREITA CARROSSEL*/
function AnimacaoDireita(){
	html = document.getElementById("painelCarrosel");
	html.classList.add("moverDireitaAtual");

	setTimeout(function(){
		html.classList.remove("moverDireitaAtual");
		txtCarrosel_atual++;
		if (txtCarrosel_atual >= textosCarrosel.length){
			txtCarrosel_atual = 0;
		}
		document.getElementById("txtCentral").innerHTML = textosCarrosel[txtCarrosel_atual];
		html.classList.add("moverDireita");
	},1000);
	setTimeout(function(){
		document.getElementById("tituloS5").innerHTML = tituloCarrosel[txtCarrosel_atual];
		document.getElementById("localS5").innerHTML = localCarrosel[txtCarrosel_atual];
		html.classList.remove("moverDireita");
	},2000);
}

/*ANIMAÇÃO ESQUERDA CARROSSEL*/
function AnimacaoEsquerda(){
	html = document.getElementById("painelCarrosel");
	html.classList.add("moverEsquerdaAtual");

	setTimeout(function(){
		html.classList.remove("moverEsquerdaAtual");
		txtCarrosel_atual--;
		if (txtCarrosel_atual < 0){
			txtCarrosel_atual = textosCarrosel.length - 1;
		}
		document.getElementById("txtCentral").innerHTML = textosCarrosel[txtCarrosel_atual];
		html.classList.add("moverEsquerda");
	},1000);
	setTimeout(function(){
		document.getElementById("tituloS5").innerHTML = tituloCarrosel[txtCarrosel_atual];
		document.getElementById("localS5").innerHTML = localCarrosel[txtCarrosel_atual];
		html.classList.remove("moverEsquerda");
	},2000);
}

/*Atualizar Conteudo Carrosel*/
function atulizaCarrosel(texto){
	html = document.getElementById("txtCentral");
	html.innerHTML = texto;
}

/*Função Principal*/
main = ()=>{
	alert("aaa");
	/*Pegando Html*/
	const btn = document.getElementById("Download");
	const whatsapp = document.getElementById("whatsapp");
	const instagram = document.getElementById("instagram");
	const facebook = document.getElementById("facebook");
	const linkedin = document.getElementById("linkedin");
	const telegram = document.getElementById("telegram")
	const email = document.getElementById("email");
	const cards = document.querySelectorAll(".card");
	const painelS4 = document.getElementById("painelSession4");
	const direita = document.getElementById("S5Direita");
	const esquerda = document.getElementById("S5Esquerda");

	/*Declarando variaveis*/
	var i = 0;
	var vel = 60;
	var delay = 2000;
	var id = 0;

	/*Declarando vetor*/
	var txt = [
		"Me Chamo Matheus Vinicius",
		"Moro em Uberlândia, Minas Gerais"
	];

	var cartoes = [
		["Programação gráfica para Arduino","IFTM","3h","Imagens/iftm_local.jpg"],
		["Programação Competitiva.","IFTM","6h","Imagens/iftm_local.jpg"],
		["Programação Competitiva.","IFTM","6h","Imagens/iftm_local.jpg"],
		["Nanotecnologia em alimentos.","IFTM","3h","Imagens/iftm_local.jpg"],
		["Como ser empreendedor utilizando a informática.","IFTM","6h","Imagens/iftm_local.jpg"],
		["'English around us: culture and diversity'","UFU","24h","Imagens/ufu_local.png"],
	]
	
	/*Chamada de função*/
	atulizaCarrosel(textosCarrosel[0]);

	for (var i = 0; i < cartoes.length; i++) {
		CardsS4(painelS4, cartoes[i][0], cartoes[i][1], cartoes[i][2], cartoes[i][3]);		
	}
	
	/*Adicionando Eventos*/
	btn.addEventListener("click",function(){
		downloadArquivo("Download/Curriculum2.pdf");
	});
	whatsapp.addEventListener("click",function(){
		downloadArquivo("https://wa.me/qr/3YBYAC4OX62DE1");
	});
	instagram.addEventListener("click",function(){
		downloadArquivo("https://www.instagram.com/matheus.matheuscunha");
	});
	facebook.addEventListener("click",function(){
		downloadArquivo("https://www.facebook.com/matheus.matheuscunha/");
	});
	linkedin.addEventListener("click",function(){
		downloadArquivo("https://www.linkedin.com/in/matheus-vin%C3%ADcius-452988183/");
	});
	email.addEventListener("click",function(){
		downloadArquivo("mailto:matheus.matheuscunha2@outlook.com");
	});
	telegram.addEventListener("click",function(){
		downloadArquivo("https://t.me/matheus2803");
	});

	direita.addEventListener("click",function(){
		AnimacaoDireita();
	});
	esquerda.addEventListener("click",function(){
		AnimacaoEsquerda();
	});

	
	/*Adicionando eventos loop*/
	for (var i = 0; i < cards.length; i++){
		cards[i].addEventListener("mouseover",function(){
			EventoHover(this, 1);
		});
		cards[i].addEventListener("mouseout",function(){
			EventoHover(this, 2);
		});
	}

	/*Função no escopo main*/
	function digitacao(vez){

		if ( (i<txt[id].length) && (vez == 1) ){
			document.getElementById('textoShort').innerHTML += txt[id].charAt(i);
			i++;
			setTimeout(function(){
				digitacao(1)
			},vel);
		}
		else if ( (i<txt[id].length) && (vez == 2) ){
			document.getElementById('textoShort').innerHTML = document.getElementById('textoShort').innerHTML.slice(0, -1);
			i++;
			setTimeout(function(){
				digitacao(2)
			},vel);
		}
		else if ( (i == txt[id].length) && (vez == 1) ){
			i = 0;
			setTimeout(function(){
				digitacao(2)
			},delay);
		}
		else if ( (i == txt[id].length) && (vez == 2) ){
			i = 0;
			id++;
			if (id >= txt.length){
				id = 0;
			}
			digitacao(1)
		}

	}

	/*Chamada de funções escopo*/
	digitacao(1);
}
window.addEventListener("load",main);
