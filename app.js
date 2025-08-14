let listaDeAmigos = [];


function adicionarAmigo() {
    let campoTexto = document.getElementById("amigo"); 
    let nomeAmigo = campoTexto.value.trim();
    
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    listaDeAmigos.push(nomeAmigo);
    console.log("Lista de amigos atualizada:", listaDeAmigos);

    campoTexto.value = "";

    exibirListaDeAmigos();

}


function exibirListaDeAmigos() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = "";
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let nomeDeAmigo = listaDeAmigos[i];
        let itemLista = document.createElement("li");
        itemLista.textContent = nomeDeAmigo;

        listaHTML.appendChild(itemLista);
    }
}

