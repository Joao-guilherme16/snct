let pontos = 0;
let perguntaAtual = 0;

const perguntas = [
  {
    pergunta: "Qual é um dos principais objetivos da Semana Nacional de Ciência e Tecnologia (SNCT)?",
    alternativas: [
      "A) Divulgar conhecimentos científicos e aproximar a ciência da sociedade",
      "B) Apresentar exclusivamente pesquisas desenvolvidas por universidades",
      "C) Promover principalmente a formação profissional para o mercado de trabalho",
      "D) Avaliar os resultados acadêmicos das instituições de ensino participantes",
    ],
    respostaCorreta: 0,
  },

  {
    pergunta: "Por que a SNCT é importante para os estudantes?",
    alternativas: [
      "A) Porque permite substituir parte das aulas por atividades extracurriculares",
      "B) Porque amplia o contato com pesquisas, descobertas e aplicações científicas",
      "C) Porque oferece uma formação científica equivalente à de um curso superior",
      "D) Porque prioriza conhecimentos científicos em vez de conteúdos escolares tradicionais",
    ],
    respostaCorreta: 1,
  },

  {
    pergunta: "O que pode ser apresentado durante a SNCT no IFSP?",
    alternativas: [
      "A) Principalmente pesquisas concluídas por professores e pesquisadores",
      "B) Projetos relacionados exclusivamente às áreas de tecnologia da informação",
      "C) Projetos, experimentos, oficinas e atividades de divulgação científica",
      "D) Atividades acadêmicas voltadas principalmente à avaliação dos estudantes",
    ],
    respostaCorreta: 2,
  },

  {
    pergunta: "Qual é a importância da pesquisa científica para a sociedade?",
    alternativas: [
      "A) Garantir que novas tecnologias sejam acessíveis a toda a população",
      "B) Substituir conhecimentos tradicionais por explicações científicas",
      "C) Encontrar soluções definitivas para os principais problemas sociais",
      "D) Produzir conhecimentos que ajudem a compreender fenômenos e enfrentar problemas",
    ],
    respostaCorreta: 3,
  },

  {
    pergunta: "O que significa a sigla IFSP?",
    alternativas: [
      "A) Instituto Federal de Educação, Ciência e Tecnologia de São Paulo",
      "B) Instituto de Formação Profissional e Superior de São Paulo",
      "C) Instituto Federal de Pesquisa e Sistemas Profissionais",
      "D) Instituto de Ensino Superior Público de São Paulo",
    ],
    respostaCorreta: 0,
  },

  {
    pergunta: "Qual é uma das contribuições da tecnologia para a pesquisa científica?",
    alternativas: [
      "A) Permitir que experimentos sejam realizados sem necessidade de análise humana",
      "B) Ampliar as possibilidades de coleta, análise e compartilhamento de dados",
      "C) Tornar desnecessária a repetição de experimentos para verificar resultados",
      "D) Garantir que as conclusões científicas sejam sempre precisas",
    ],
    respostaCorreta: 1,
  },

  {
    pergunta: "Qual é a importância da apresentação de projetos na SNCT 2026 do IFSP?",
    alternativas: [
      "A) Demonstrar que pesquisas acadêmicas devem priorizar aplicações comerciais",
      "B) Comparar o desempenho dos estudantes de diferentes cursos e campi",
      "C) Compartilhar resultados, estimular o diálogo e divulgar conhecimentos científicos",
      "D) Selecionar exclusivamente projetos que possam ser transformados em produtos",
    ],
    respostaCorreta: 2,
  },

  {
    pergunta: "Como os estudantes podem contribuir para a produção científica?",
    alternativas: [
      "A) Aplicando conhecimentos existentes sem precisar formular novas perguntas",
      "B) Desenvolvendo pesquisas apenas quando há orientação de um professor universitário",
      "C) Priorizando resultados práticos em vez de investigar os fundamentos dos problemas",
      "D) Formulando perguntas, investigando hipóteses e analisando evidências",
    ],
    respostaCorreta: 3,
  },

  {
    pergunta: "Qual é a relação entre ciência, tecnologia e inovação?",
    alternativas: [
      "A) A ciência produz conhecimentos, a tecnologia pode aplicá-los e a inovação desenvolve novas soluções ou abordagens",
      "B) A ciência depende da tecnologia, enquanto a inovação ocorre principalmente em empresas",
      "C) A tecnologia transforma descobertas científicas em produtos, sendo essa sua principal finalidade",
      "D) A inovação depende de avanços tecnológicos, mas não necessariamente de pesquisas científicas",
    ],
    respostaCorreta: 0
  },

  {
    pergunta: "Por que a SNCT 2026 pode ser uma oportunidade de aprendizagem no IFSP?",
    alternativas: [
      "A) Porque permite aprofundar conteúdos curriculares por meio de atividades avaliativas",
      "B) Porque aproxima os estudantes de projetos, pesquisadores e diferentes aplicações do conhecimento",
      "C) Porque oferece uma introdução completa às áreas científicas antes da escolha profissional",
      "D) Porque prioriza experiências práticas que complementam, mas dispensam parte do estudo teórico",
    ],
    respostaCorreta: 1
  }

];

const quiz = document.getElementById("quiz");

function mostrarPergunta() {
  quiz.innerHTML = perguntas[perguntaAtual].pergunta;

  perguntas[perguntaAtual].alternativas.forEach(function (alternativa, index) {
    const botao = document.createElement("button");

    botao.textContent = alternativa;

    // Apenas para organizar visualmente os botões
    botao.className =
      "block w-full text-left bg-white border border-gray-300 rounded-lg p-3 mb-2 hover:bg-gray-300 transition";

    quiz.appendChild(botao);

    botao.addEventListener("click", function () {
      console.log(alternativa);

      if (index === perguntas[perguntaAtual].respostaCorreta) {
        pontos++;
        console.log(pontos);
      }

      perguntaAtual++;

      if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
      } else {
        quiz.innerHTML =
          "Quiz terminado! Você acertou " +
          pontos +
          " de " +
          perguntas.length +
          " perguntas.";
      }
    });
  });
}

mostrarPergunta();