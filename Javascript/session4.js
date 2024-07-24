/*Função Mostra esconde sessão 4*/
function mostrar(html, elemento){
	/**/
	html.classList.toggle("esconde");

	if (elemento.innerHTML == "+ Vem Mais"){
		elemento.innerHTML = "- Ver Menos";
	}
	else{
		elemento.innerHTML = "+ Vem Mais";
	}
	
}

/*Função Principal*/
main = ()=>{
	/*Pegando Html*/
	const painel = document.getElementById("painelSession4")
	const mais = document.getElementById("verMais");

	/*Adicionando Evento*/
	mais.addEventListener("click",function(){
		mostrar(painel, this);
	});
}

window.addEventListener("load",main);