const miniaturas = document.querySelectorAll('.miniatura');
const imagemPrincipal = document.getElementById('imagem-principal');
const btnAnterior = document.getElementById('btn-anterior');
const btnProximo = document.getElementById('btn-proximo');

let imagens = [];
for (let i = 1; i <= 18; i++) {
    imagens.push(`foto${i}.jpeg`);
}

let indiceAtual = 0;

function atualizarImagem() {
    imagemPrincipal.src = imagens[indiceAtual];
}

function navegarImagem(incremento) {
    indiceAtual = (indiceAtual + incremento + imagens.length) % imagens.length;
    atualizarImagem();
}

// Botões de navegação
btnAnterior.addEventListener('click', () => navegarImagem(-1));
btnProximo.addEventListener('click', () => navegarImagem(1));

// Atualizar imagem ao clicar nas miniaturas
miniaturas.forEach((miniatura, index) => {
    miniatura.addEventListener('click', function() {
        indiceAtual = index;
        atualizarImagem();
    });
});

// Função para navegação automática
setInterval(() => {
    navegarImagem(1);
}, 5000);  // 5000ms = 5 segundos, você pode ajustar esse valor



function mostrarDicas() {
  const lista = document.getElementById("dicas");
  if (lista.classList.contains("escondido")) {
    lista.classList.remove("escondido");
  } else {
    lista.classList.add("escondido");
  }
}
