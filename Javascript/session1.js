/*Função de alterar Escolha Circulo*/
function alteraCircle(selecionado, titulo, empresa, conteudo){
	/*Pegando HTML*/
	const elementos = document.querySelectorAll(".miniCircle");

	/*Removendo classe selecionado de todos os elementos*/
	elementos.forEach((elemento)=>{
		elemento.classList.remove("selecionado");
	});

	/*Adicionando class selecionado ao selecionado*/
	selecionado.classList.add("selecionado");

	/*Alterando Painel sessão 3*/
	AlteraPainelExper(titulo, empresa, conteudo);
}

/*Função para inserir na linha do tempo*/
function inserirLinha(html, posicao, tempo, titulo, empresa, conteudo){
	/*Criando Elementos*/
	var janela = document.createElement("div");
	var miniCirculo = document.createElement("div");
	var periodo = document.createElement("span");

	/*Inserindo Class*/
	janela.classList.add("janelaCicle");
	miniCirculo.classList.add("miniCircle");

	/*Adicionando Posição*/
	janela.style.left = posicao;

	/*Adicionando Periodo*/
	periodo.innerHTML = tempo;

	/*Adicionando Evento*/
	miniCirculo.addEventListener("click",function(){
		alteraCircle(this, titulo, empresa, conteudo);
	});

	/*Adicionando Elemento*/
	janela.appendChild(miniCirculo);
	janela.appendChild(periodo);
	html.appendChild(janela);
}

main = ()=>{
	/*Declarando Vetor*/
	var expProfiss = [
		["30%","Jun 2019- Jul 2019","Desenvolvedor Back-end","Softleader","Estagio com total de 120h na empresa Softleader atuando como desenvolvendor Back-End, responsavel em atuar na construção e manutenção dos bastidores das aplicações web, utilizando-se das linguagens: Angular, Typescript, html, Sql e Cs"],
		["60%","Set 2023 - dez 2024", "Coordenador de Projetos", "Conselt", "Conteudo"]
	];

	/*Chamada de função*/
	for (var i = 0; i < expProfiss.length; i++) {
		inserirLinha(linha, expProfiss[i][0], expProfiss[i][1], expProfiss[i][2],
			expProfiss[i][3], expProfiss[i][4]
			);
		if (i == 0){
			document.querySelectorAll(".miniCircle")[0].classList.add("selecionado");
			AlteraPainelExper(expProfiss[0][2],expProfiss[0][3], expProfiss[0][4]);
		}
	}
}

window.addEventListener("load",main);