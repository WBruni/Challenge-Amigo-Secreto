let listaDeAmigos = [];

function adicionarAmigo() {
    let campoTexto = document.getElementById("amigo"); 
    let nomeAmigo = campoTexto.value.trim();
    
    if (nomeAmigo === "") {
        return alert("Por favor, insira um nome.");
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

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        return document.getElementById("resultado").innerHTML= "Não há amigos disponíveis para sortear";
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}

