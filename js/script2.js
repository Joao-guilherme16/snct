
let pontos = {};
let perguntaAtual = 0;

const profissoes = [
  "Desenvolvedor de software",
  "Analista de dados",
  "Designer gráfico",
  "Psicólogo",
  "Professor",
  "Jornalista",
  "Engenheiro",
  "Profissional da saúde",
  "Advogado",
  "Administrador",
  "Cientista",
  "Técnico em informática",
  "Empreendedor",
];

const descricoesProfissoes = {
  "Desenvolvedor de software":
    "Você gosta de lógica, tecnologia e de criar soluções por meio da programação. Desenvolvimento de software pode combinar com seu perfil.",
  "Analista de dados":
    "Você gosta de encontrar padrões, interpretar informações e usar evidências para resolver problemas. A área de análise de dados pode combinar com você.",
  "Designer gráfico":
    "Você gosta de criatividade, comunicação visual e de transformar ideias em imagens e projetos. Design gráfico pode ser uma boa possibilidade.",
  "Psicólogo":
    "Você se interessa por comportamento, emoções e por ouvir as pessoas. A Psicologia pode combinar com seus interesses.",
  "Professor":
    "Você gosta de explicar ideias, compartilhar conhecimento e ajudar outras pessoas a aprender. A docência pode ser uma área interessante para você.",
  "Jornalista":
    "Você gosta de investigar assuntos, fazer perguntas e comunicar informações com clareza. Jornalismo pode combinar com seu perfil.",
  "Engenheiro":
    "Você gosta de entender como as coisas funcionam e encontrar soluções para desafios práticos. A Engenharia pode ser uma possibilidade.",
  "Profissional da saúde":
    "Você se interessa por cuidado, bem-estar e por contribuir diretamente para a vida das pessoas. As profissões da saúde podem combinar com você.",
  "Advogado":
    "Você gosta de argumentar, analisar situações e refletir sobre direitos e regras. Direito pode ser uma área a explorar.",
  "Administrador":
    "Você gosta de planejar, organizar tarefas e coordenar recursos para alcançar objetivos. Administração pode combinar com seu jeito de trabalhar.",
  "Cientista":
    "Você gosta de fazer perguntas, investigar fenômenos e descobrir como as coisas funcionam. Uma carreira científica pode combinar com sua curiosidade.",
  "Técnico em informática":
    "Você gosta de computadores, de resolver problemas técnicos e de ajudar a tecnologia a funcionar. A área de suporte e infraestrutura de TI pode combinar com você.",
  "Empreendedor":
    "Você gosta de tirar ideias do papel, tomar iniciativa e buscar soluções para necessidades reais. Empreendedorismo pode ser uma possibilidade para explorar.",
};

profissoes.forEach(function (profissao) {
  pontos[profissao] = 0;
});

const perguntas = [
  {
    pergunta:
      "Quando surge um problema, qual abordagem mais combina com você?",
    alternativas: [
      {
        texto: "Divido o problema em etapas e procuro uma solução lógica.",
        profissao: "Desenvolvedor de software",
      },
      {
        texto: "Analiso informações e procuro padrões nos dados.",
        profissao: "Analista de dados",
      },
      {
        texto: "Penso em uma solução criativa e visual.",
        profissao: "Designer gráfico",
      },
      {
        texto: "Converso com as pessoas envolvidas para entender a situação.",
        profissao: "Psicólogo",
      },
    ],
  },

  {
    pergunta: "Qual atividade você teria mais vontade de fazer?",
    alternativas: [
      {
        texto: "Explicar um assunto e ajudar alguém a aprender.",
        profissao: "Professor",
      },
      {
        texto: "Investigar um acontecimento e contar o que descobri.",
        profissao: "Jornalista",
      },
      {
        texto: "Projetar ou melhorar algo para funcionar melhor.",
        profissao: "Engenheiro",
      },
      {
        texto: "Ajudar a cuidar da saúde e do bem-estar de alguém.",
        profissao: "Profissional da saúde",
      },
    ],
  },

  {
    pergunta: "Em um trabalho em grupo, qual papel você prefere assumir?",
    alternativas: [
      {
        texto: "Analisar regras, argumentos e se a solução é justa.",
        profissao: "Advogado",
      },
      {
        texto: "Organizar tarefas, prazos e responsabilidades.",
        profissao: "Administrador",
      },
      {
        texto: "Investigar uma pergunta e testar hipóteses.",
        profissao: "Cientista",
      },
      {
        texto: "Resolver problemas nos computadores e nos sistemas.",
        profissao: "Técnico em informática",
      },
    ],
  },

  {
    pergunta: "O que mais desperta sua curiosidade?",
    alternativas: [
      {
        texto: "Como aplicativos e sites são criados.",
        profissao: "Desenvolvedor de software",
      },
      {
        texto: "O que números e gráficos revelam sobre uma situação.",
        profissao: "Analista de dados",
      },
      {
        texto: "Como cores, formas e imagens transmitem mensagens.",
        profissao: "Designer gráfico",
      },
      {
        texto: "Por que as pessoas pensam, sentem e agem de certas maneiras.",
        profissao: "Psicólogo",
      },
    ],
  },

  {
    pergunta: "Qual projeto você escolheria para desenvolver?",
    alternativas: [
      {
        texto: "Criar um material para ensinar um tema difícil.",
        profissao: "Professor",
      },
      {
        texto: "Produzir uma reportagem sobre um tema importante.",
        profissao: "Jornalista",
      },
      {
        texto: "Construir ou aprimorar uma solução para um desafio prático.",
        profissao: "Engenheiro",
      },
      {
        texto: "Participar de uma campanha de prevenção e cuidado.",
        profissao: "Profissional da saúde",
      },
    ],
  },

  {
    pergunta: "Ao tomar uma decisão importante, o que você prioriza?",
    alternativas: [
      {
        texto: "Comparar argumentos e considerar direitos e deveres.",
        profissao: "Advogado",
      },
      {
        texto: "Definir objetivos e organizar os recursos disponíveis.",
        profissao: "Administrador",
      },
      {
        texto: "Buscar evidências e verificar se as hipóteses fazem sentido.",
        profissao: "Cientista",
      },
      {
        texto: "Identificar a causa do problema e encontrar uma solução técnica.",
        profissao: "Técnico em informática",
      },
    ],
  },

  {
    pergunta: "Qual dessas situações parece mais interessante para você?",
    alternativas: [
      {
        texto: "Transformar uma ideia em um produto ou serviço.",
        profissao: "Empreendedor",
      },
      {
        texto: "Automatizar uma tarefa usando programação.",
        profissao: "Desenvolvedor de software",
      },
      {
        texto: "Usar dados para ajudar a escolher entre alternativas.",
        profissao: "Analista de dados",
      },
      {
        texto: "Criar uma identidade visual para um projeto.",
        profissao: "Designer gráfico",
      },
    ],
  },

  {
    pergunta: "Que tipo de contribuição você gostaria de fazer?",
    alternativas: [
      {
        texto: "Ajudar pessoas a compreenderem melhor a si mesmas.",
        profissao: "Psicólogo",
      },
      {
        texto: "Compartilhar conhecimento e apoiar a aprendizagem.",
        profissao: "Professor",
      },
      {
        texto: "Levar informações relevantes ao público.",
        profissao: "Jornalista",
      },
      {
        texto: "Desenvolver soluções que melhorem estruturas ou produtos.",
        profissao: "Engenheiro",
      },
    ],
  },

  {
    pergunta: "Qual desafio você acharia mais gratificante?",
    alternativas: [
      {
        texto: "Contribuir para a recuperação ou o bem-estar de alguém.",
        profissao: "Profissional da saúde",
      },
      {
        texto: "Defender uma posição com argumentos bem fundamentados.",
        profissao: "Advogado",
      },
      {
        texto: "Coordenar pessoas e recursos para atingir uma meta.",
        profissao: "Administrador",
      },
      {
        texto: "Descobrir algo novo por meio de testes e observações.",
        profissao: "Cientista",
      },
    ],
  },

  {
    pergunta: "Qual frase combina mais com o seu jeito de pensar?",
    alternativas: [
      {
        texto: "Gosto de entender como a tecnologia funciona e consertá-la.",
        profissao: "Técnico em informática",
      },
      {
        texto: "Gosto de tomar iniciativa e transformar ideias em realidade.",
        profissao: "Empreendedor",
      },
      {
        texto: "Gosto de criar soluções digitais usando lógica e código.",
        profissao: "Desenvolvedor de software",
      },
      {
        texto: "Gosto de interpretar informações para encontrar respostas.",
        profissao: "Analista de dados",
      },
    ],
  },
];

const quiz = document.getElementById("quiz");

function mostrarPergunta() {
  quiz.innerHTML = perguntas[perguntaAtual].pergunta;

  perguntas[perguntaAtual].alternativas.forEach(function (alternativa) {
    const botao = document.createElement("button");

    botao.textContent = alternativa.texto;

    botao.className =
      "block w-full text-left bg-white border border-gray-300 rounded-lg p-3 mb-2 hover:bg-gray-300 transition";

    quiz.appendChild(botao);

    botao.addEventListener("click", function () {
      console.log(alternativa);

      const profissaoEscolhida = alternativa.profissao;

      pontos[profissaoEscolhida]++;

      console.log(pontos);

      perguntaAtual++;

      if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
      } else {
        let maiorPontuacao = 0;
        let profissaoResultado = "";

        profissoes.forEach(function (profissao) {
          if (pontos[profissao] > maiorPontuacao) {
            maiorPontuacao = pontos[profissao];
            profissaoResultado = profissao;
          }
        });

        quiz.innerHTML = `
          <div class="text-center">
            <h2 class="text-2xl font-bold">
              Quiz terminado!
            </h2>

            <p class="text-xl mt-2">
              A profissão que mais combina com você é
              <strong>${profissaoResultado}</strong>!
            </p>

            <p class="text-base mt-4 text-gray-600">
              ${descricoesProfissoes[profissaoResultado]}
            </p>
          </div>
        `;
      }
    });
  });
}

mostrarPergunta();
