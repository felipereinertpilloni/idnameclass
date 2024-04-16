function olaMundo() {
    alert('Olá Mundo');
}

function somarDoisNumeros(a = 9, b = 10) {
        alert(a+b);
}

function alterarElementoPorID() {
  document.getElementById("meuBotao1").style.backgroundColor = "red";
    }

function alterarElementoPorName() {
    var botoes = document.getElementsByName("meuBotao2");
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].style.backgroundColor = "green";
    }
}

function alterarElementoPorClass() {
    let botoes = document.getElementsByClassName("meuBotao3");
    for (var i = 0; i < botoes.length; i++) {
        botoes[i].style.backgroundColor = "blue";
    }
}