main = ()=>{
	/*PEGANDO HTML*/
	const cabecalho = document.getElementById("cabecalho");
	const espaco = document.getElementById("cabecalho_espaco");
	const links = document.querySelectorAll("nav > a");
	const sessions = document.querySelectorAll(".sessions");
	const sanduiche = document.getElementById("sanduiche");

	/*PEGANDO POSIÇÃO DO CABECALHO*/
	var cabecalhoOffset = cabecalho.offsetTop; 

	/*Pegando posição das sessions*/
	sessionsOffset = [];
	for (var i = 0; i < sessions.length; i++) {
		sessionsOffset[i] = sessions[i].offsetTop - 150;
	}

	/*FUNÇÃO VERIFICAR ALTURA*/
	function verificaCabecalho(){
		/*Altura do scroll*/
		var scrollTop = window.scrollY;
		/*Tamanho que o cab ocupa*/
		var altura = cabecalho.offsetHeight;

		/*Verificando se scoll superou cab*/
		if (scrollTop > cabecalhoOffset){
			/*Fixando cab*/
			cabecalho.classList.add("cabecalho-fixo");
			/*Colocando espaço no lugar do cab*/
			espaco.style.height = altura + "px";
		}
		else{
			/*Removendo fixação*/
			cabecalho.classList.remove("cabecalho-fixo");
			/*Voltando espaco ao normal*/
			espaco.style.height = 0;
		}

		/*Verificando posição da session*/
		var maximo = sessionsOffset.length; 
		var maior = 0;
		
		for(var i = 0; i < maximo; i++){
			/*Removendo Links*/
			for (var j = 0; j < maximo; j++) {
				links[i].classList.remove("linkSelecionado");
			}

			/*Selecionando Link*/
			if (scrollTop >= sessionsOffset[i]){
				maior = i;
			}
		}
		links[maior].classList.add("linkSelecionado");
		
	}

	/*Evendo de rolagem*/
	window.addEventListener("scroll", verificaCabecalho);
	window.addEventListener("resize", verificaCabecalho);

	/*Adicionando Eventos*/
	sanduiche.addEventListener("click", function(){
		/*Obtendo elemento*/
		var elemento = document.getElementById("menu_navegacao");

		// Obtendo o estilo computado do elemento
		const estiloComputado = window.getComputedStyle(elemento);

		// Obtendo o valor da propriedade 'display'
		const display = estiloComputado.getPropertyValue('display');

		if (display == "flex") {
			elemento.style.display = "none";
		}
		else{
			elemento.style.display = "flex";
		}
	});
}

window.addEventListener("load",main);