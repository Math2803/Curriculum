/*Função para alterna pela seta*/
function alteraSeta(vetor,direcao){
/*Encontrando Posição*/
	/*Pegando HTML*/
	const elementos = document.querySelectorAll(".miniCircle");

	/*Pegando Selecionado*/
	const selecionado = document.querySelector(".selecionado");

	/*Pegando Maximo*/
	var max = elementos.length;

	/*Verificando se é o ultimo*/
	if ((selecionado == elementos[max-1]) && (direcao == 1)){
		alteraCircle(elementos[0], vetor[0][2],vetor[0][3],vetor[0][4]);
		return 0;
	}

	/*Verifica o primeiro*/
	if ((selecionado == elementos[0]) && (direcao == -1)){
		alteraCircle(elementos[max-1], vetor[max-1][2],vetor[max-1][3],
			vetor[max-1][4]);
		return 0;
	}

	/*Encontrando Selecionando*/
	for (var i = 0; i < max; i++) {
		if (selecionado == elementos[i] && direcao == 1){
			i++;
			alteraCircle(elementos[i], vetor[i][2],vetor[i][3],vetor[i][4]);
			return 0;
		}

		if (selecionado == elementos[i] && direcao == -1){
			i--;
			alteraCircle(elementos[i], vetor[i][2],vetor[i][3],vetor[i][4]);
			return 0;
		}
	}
}

/*Altera Painel sessão 3*/
function AlteraPainelExper(Stitulo, Sempresa, Sconteudo){
	/**/
	const titulo = document.getElementById("TituloExper");
	const empresa = document.getElementById("empresa");
	const conteudo = document.getElementById("conteudoExper");

	/**/
	titulo.innerHTML = Stitulo;
	empresa.innerHTML = Sempresa;
	conteudo.innerHTML = Sconteudo;
}

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
	alert("aaa");
	/*Pegando HTML*/
	const linha = document.getElementById("linha");
	const esquerda = document.getElementById("S3Esquerda");
	const direita = document.getElementById("S3Direita");

	/*Declarando Vetor*/
	var expProfiss = [
		["30%","Jun 2019- Jul 2019","Desenvolvedor Back-end","Softleader","Estagio com total de 120h na empresa Softleader atuando como desenvolvendor Back-End, responsavel em atuar na construção e manutenção dos bastidores das aplicações web, utilizando-se das linguagens: Angular, Typescript, html, Sql e Cs"],
		["60%","Set 2023 - dez 2024", "Coordenador de Projetos", "Conselt", "Minha experiência inclui a coordenação de equipes multidisciplinares, garantindo a entrega de soluções de alta qualidade dentro dos prazos estabelecidos. Estando adepto a metodologias ágeis, como Scrum e Kanban, e utilização de ferramentas modernas de gestão de projetos para facilitar a colaboração e a comunicação eficaz entre os membros da equipe."]
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

	/*Adicionando evento*/
	esquerda.addEventListener("click", function(){
		alteraSeta(expProfiss,-1);
	});
	direita.addEventListener("click", function(){
		alteraSeta(expProfiss,1);
	});
}

window.addEventListener("load",main);
