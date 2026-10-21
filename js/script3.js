const alunos = [
  {
    nome: "João Guilherme",
    foto: "img/alunos/joao.jpg",
  },
  {
    nome: "João Vitor",
    foto: "img/alunos/cabelo.jpg",
  },
  {
    nome: "Lucas Pietro",
    foto: "img/alunos/lucas.jpeg",
  },
];

const pontuacaoElemento = document.getElementById("pontuacao");
const tempoElemento = document.getElementById("tempo");
const alvoElemento = document.getElementById("alvo");
const opcoesElemento = document.getElementById("opcoes");
const mensagemElemento = document.getElementById("mensagem");
const iniciarBotao = document.getElementById("iniciar");

let pontuacao = 0;
let tempo = 30;
let alvoAtual = null;
let intervalo = null;
let jogoAtivo = false;

function sortearAluno() {
  const indice = Math.floor(Math.random() * alunos.length);
  return alunos[indice];
}

function mostrarAlunos() {
  opcoesElemento.innerHTML = "";
  opcoesElemento.style.display = "grid";
  opcoesElemento.style.gridTemplateColumns =
    "repeat(auto-fit, minmax(150px, 1fr))";
  opcoesElemento.style.gap = "16px";

  const opcoes = [...alunos].sort(() => Math.random() - 0.5);

  opcoes.forEach(function (aluno) {
    const botao = document.createElement("button");

    botao.type = "button";
    botao.className =
      "bg-white rounded-xl p-3 shadow border-2 border-purple-900 flex flex-col items-center w-full";

    const imagem = document.createElement("img");
    imagem.src = aluno.foto;
    imagem.alt = aluno.nome;
    imagem.className = "w-32 h-32 object-cover rounded-full mx-auto mb-3";

  botao.appendChild(imagem);

    botao.disabled = !jogoAtivo;

    botao.addEventListener("click", function () {
      if (!jogoAtivo) {
        return;
      }

      if (aluno.nome === alvoAtual.nome) {
        pontuacao += 10;
        mensagemElemento.textContent = "Acertou! +10 pontos 🎉";
      } else {
        pontuacao = Math.max(0, pontuacao - 3);
        mensagemElemento.textContent = "Errou! -3 pontos 😅";
      }

      pontuacaoElemento.textContent = pontuacao;

      novaRodada();
    });

    opcoesElemento.appendChild(botao);
  });
}

function novaRodada() {
  const alunoAnterior = alvoAtual;

  alvoAtual = sortearAluno();

  while (
    alunos.length > 1 &&
    alunoAnterior !== null &&
    alvoAtual.nome === alunoAnterior.nome
  ) {
    alvoAtual = sortearAluno();
  }

  alvoElemento.textContent = alvoAtual.nome;
  mostrarAlunos();
}

function terminarJogo() {
  jogoAtivo = false;
  clearInterval(intervalo);
  intervalo = null;

  tempoElemento.textContent = 0;
  alvoElemento.textContent = "Fim de jogo!";

  mensagemElemento.textContent = `Você fez ${pontuacao} pontos! Tente novamente para melhorar sua pontuação.`;

  iniciarBotao.textContent = "Jogar novamente";

  mostrarAlunos();
}

function iniciarJogo() {
  clearInterval(intervalo);

  pontuacao = 0;
  tempo = 30;
  jogoAtivo = true;

  pontuacaoElemento.textContent = pontuacao;
  tempoElemento.textContent = tempo;
  mensagemElemento.textContent = "Boa sorte! Encontre o aluno indicado.";

  iniciarBotao.textContent = "Reiniciar jogo";

  novaRodada();

  intervalo = setInterval(function () {
    tempo--;

    tempoElemento.textContent = tempo;

    if (tempo <= 0) {
      terminarJogo();
    }
  }, 1000);
}

if (
  pontuacaoElemento &&
  tempoElemento &&
  alvoElemento &&
  opcoesElemento &&
  mensagemElemento &&
  iniciarBotao
) {
  iniciarBotao.addEventListener("click", iniciarJogo);
} else {
  console.error(
    "Não foi possível iniciar o jogo: confira os IDs dos elementos no HTML.",
  );
}
