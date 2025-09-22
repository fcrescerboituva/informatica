const perguntas = [
    {
        pergunta: "1. Quem é o personagem principal do filme?",
        opcoes: ["a) Sean Tuohy", "b) Michael Oher", "c) Collins Tuohy", "d) Coach Cotton"],
        resposta: "b"
    },
    {
        pergunta: "2. Quem acolhe Michael Oher em sua casa?",
        opcoes: ["a) Família Smith", "b) Treinador da escola", "c) Família Tuohy", "d) Parentes distantes"],
        resposta: "c"
    },
    {
        pergunta: "3. Qual é o esporte principal do filme?",
        opcoes: ["a) Basquete", "b) Beisebol", "c) Futebol americano", "d) Atletismo"],
        resposta: "c"
    },
    {
        pergunta: "4. Qual atriz interpreta Leigh Anne Tuohy?",
        opcoes: ["a) Julia Roberts", "b) Sandra Bullock", "c) Reese Witherspoon", "d) Nicole Kidman"],
        resposta: "b"
    },
    {
        pergunta: "5. O filme é baseado em uma história real?",
        opcoes: ["a) Sim", "b) Não", "c) Parcialmente", "d) Não foi revelado"],
        resposta: "a"
    },
    {
        pergunta: "6. Michael Oher tem dificuldades principalmente em qual área escolar?",
        opcoes: ["a) Ciências", "b) Matemática", "c) Inglês", "d) Leitura e escrita"],
        resposta: "d"
    },
    {
        pergunta: "7. Qual universidade Michael escolhe no final?",
        opcoes: ["a) LSU", "b) University of Mississippi (Ole Miss)", "c) Alabama", "d) Tennessee"],
        resposta: "b"
    },
    {
        pergunta: "8. Qual é a principal qualidade de Michael no futebol?",
        opcoes: ["a) Velocidade", "b) Força física", "c) Leitura de jogo", "d) Instinto protetor"],
        resposta: "d"
    },
    {
        pergunta: "9. O que motiva Leigh Anne a ajudar Michael?",
        opcoes: [
            "a) Interesse em esportes",
            "b) Vontade de adotar uma criança",
            "c) Obrigação escolar",
            "d) Empatia e senso de justiça"
        ],
        resposta: "d"
    },
    {
        pergunta: "10. Qual é a principal mensagem do Filme?",
        opcoes: ["a) Uso correto das redes sociais", "b) Como ganhar dinheiro com esportes", "c) Acolhimento, empatia e respeito", "d) Como ser competitivo"],
        resposta: "c"
    }
];

let indiceAtual = 0;
let pontuacao = 0;

const quizContainer = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const resultadoEl = document.getElementById("resultado");

function mostrarPergunta() {
    const p = perguntas[indiceAtual];
    quizContainer.innerHTML = `
        <p><strong>${p.pergunta}</strong></p>
        ${p.opcoes.map((op, i) => `
            <div class="option">
                <input type="radio" name="resposta" value="${op[0]}" id="op${i}">
                <label for="op${i}">${op}</label>
            </div>
        `).join("")}
    `;
}

nextBtn.addEventListener("click", () => {
    const selecionado = document.querySelector('input[name="resposta"]:checked');
    if (!selecionado) {
        alert("Por favor, selecione uma resposta.");
        return;
    }

    const resposta = selecionado.value;
    if (resposta === perguntas[indiceAtual].resposta) {
        pontuacao++;
    }

    indiceAtual++;

    if (indiceAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    quizContainer.innerHTML = "";
    nextBtn.style.display = "none";
    resultadoEl.classList.remove("hidden");
    resultadoEl.innerHTML = `Quiz finalizado! Pontuação: ${pontuacao} de ${perguntas.length}`;
}

mostrarPergunta();
