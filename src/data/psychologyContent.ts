export interface SchoolComparison {
  name: string;
  representative: string;
  historicalPeriod: string;
  focus: string;
  primaryMethod: string;
  coreQuestion: string;
  strengths: string;
  criticisms: string;
  practicalExample: string;
}

export interface DebatingQuestion {
  id: number;
  question: string;
  context: string;
  guidingPoints: string[];
  suggestedAnswerGuide: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  scenario: string;
  interpretations: {
    school: string;
    explanation: string;
    keyConcept: string;
  }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  schoolTag: string;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  speaker: string;
  duration: string;
  bullets: string[];
  highlightBox?: {
    title: string;
    content: string;
  };
  image?: string;
  imageAlt?: string;
  speakerNotes: string;
}

export const IMAGES = {
  hero: '/src/assets/images/hero_psychology_history_1792838965782.jpg',
  wundtLab: '/src/assets/images/wundt_laboratory_leipzig_1792838966583.jpg',
  gestalt: '/src/assets/images/gestalt_perception_principles_1792838967371.jpg',
  psychoanalysis: '/src/assets/images/psychoanalysis_iceberg_mind_1792838968031.jpg',
  behaviorism: '/src/assets/images/behaviorism_conditioning_lab_1792838967713.jpg',
};

export const COMMON_ERRORS_CORRECTED = [
  {
    topic: 'Reforço Negativo vs. Punição (Behaviorismo)',
    mistake: 'Achar que reforço negativo é sinônimo de castigo ou punição.',
    correction: 'O reforço (positivo ou negativo) SEMPRE aumenta a frequência de um comportamento. O reforço negativo aumenta a resposta ao REMOVER um estímulo aversivo (ex: tomar um remédio para eliminar a dor). A punição busca DIMINUIR a frequência de um comportamento.',
    tag: 'Behaviorismo'
  },
  {
    topic: 'Wundt vs. Titchener (Estruturalismo)',
    mistake: 'Afirmar que Wilhelm Wundt fundou a escola do Estruturalismo.',
    correction: 'Wundt criou o 1º laboratório (1879) e chamava o seu sistema de Voluntarismo (enfatizava a atenção voluntária). Foi o seu aluno britânico, Edward Titchener, quem formalizou e batizou a escola do Estruturalismo nos Estados Unidos.',
    tag: 'Estruturalismo'
  },
  {
    topic: 'Psicologia da Gestalt vs. Gestalt-Terapia',
    mistake: 'Confundir a teoria perceptiva da Gestalt com a psicoterapia de Fritz Perls.',
    correction: 'A Psicologia da Gestalt (Wertheimer, Köhler, Koffka) é uma escola acadêmica de 1912 sobre percepção e cognição. A Gestalt-Terapia foi criada décadas depois (1951) por Fritz e Laura Perls como abordagem humanista-existencial clínica.',
    tag: 'Gestalt'
  },
  {
    topic: 'Inconsciente vs. Id/Ego/Superego (Psicanálise)',
    mistake: 'Misturar o Modelo Topográfico com o Modelo Estrutural de Freud.',
    correction: 'Primeira Tópica (Topográfica): Consciente, Pré-Consciente e Inconsciente. Segunda Tópica (Estrutural): Id (impulsos), Ego (mediador da realidade) e Superego (censura e moral). O Id é totalmente inconsciente, mas o Ego e o Superego têm partes conscientes e inconscientes.',
    tag: 'Psicanálise'
  },
  {
    topic: 'Descartes (Racionalismo) vs. Locke (Empirismo)',
    mistake: 'Tratar os antecedentes filosóficos como uma visão homogênea.',
    correction: 'Descartes defendia o dualismo mente-corpo e a existência de ideias inatas acessadas pela razão. Locke rejeitou as ideias inatas e propôs que a mente é uma "tábula rasa" (folha em branco) gravada exclusivamente pela experiência sensível.',
    tag: 'Filosofia'
  },
  {
    topic: 'A Raiz Evolutiva do Funcionalismo',
    mistake: 'Omitir a influência de Charles Darwin no Funcionalismo.',
    correction: 'O Funcionalismo de William James foi diretamente inspirado na teoria da evolução de Darwin: se a mente e a consciência existem nos seres humanos, é porque desempenham uma função adaptativa fundamental para a sobrevivência.',
    tag: 'Funcionalismo'
  }
];

export const COMPARISON_MATRIX: SchoolComparison[] = [
  {
    name: 'Estruturalismo',
    representative: 'Edward B. Titchener (inspirado por W. Wundt)',
    historicalPeriod: 'Final do séc. XIX (~1890–1920)',
    focus: 'Identificar os elementos e a arquitetura básica da experiência consciente.',
    primaryMethod: 'Introspeção treinada rigorosa em laboratório.',
    coreQuestion: 'O QUE é a mente? Quais são as suas unidades elementares fundamentais?',
    strengths: 'Primeiro esforço sistemático de mapeamento estrutural da mente; rigor experimental inicial.',
    criticisms: 'Método excessivamente subjetivo; difícil replicação; ignorava crianças, animais, patologia e o inconsciente.',
    practicalExample: 'Ao morder uma maçã, o sujeito não diz "maçã", mas descreve a sensação de acidez, frescor tátil, pressão nos dentes e vermelhidão.'
  },
  {
    name: 'Funcionalismo',
    representative: 'William James, John Dewey, James Rowland Angell',
    historicalPeriod: 'Final do séc. XIX e início do séc. XX (~1890–1930)',
    focus: 'A função, a utilidade e o propósito adaptativo dos processos mentais no ambiente.',
    primaryMethod: 'Observação naturalista, testes mentais, experimentação pragmática.',
    coreQuestion: 'PARA QUE SERVE a mente? Como a consciência nos ajuda a sobreviver e agir?',
    strengths: 'Expandiu a psicologia para a educação, trabalho e vida prática; visão dinâmica ("fluxo da consciência").',
    criticisms: 'Menor ênfase em métodos laboratoriais estritos; ecletismo conceitual por vezes disperso.',
    practicalExample: 'O medo não é apenas uma sensação; sua função adaptativa é acelerar os batimentos e liberar adrenalina para fugir de um perigo real.'
  },
  {
    name: 'Psicanálise',
    representative: 'Sigmund Freud (e discípulos como Jung e Adler)',
    historicalPeriod: 'Virada do séc. XIX para o séc. XX (~1896 em diante)',
    focus: 'O inconsciente, pulsões, desejos reprimidos, conflitos da infância e estrutura da personalidade.',
    primaryMethod: 'Associação livre, interpretação de sonhos, análise de atos falhos e transferência clínica.',
    coreQuestion: 'POR QUE agimos sem compreender nossos próprios motivos ocultos?',
    strengths: 'Revolucionou a compreensão da sexualidade, trauma infantil, dinâmica inconsciente e terapia da fala.',
    criticisms: 'Dificuldade de falseabilidade empírica estrita (crítica popperiana); pansexualismo freudiano clássico.',
    practicalExample: 'Uma pessoa que tem fobia inexplicável de água pode estar projetando uma memória traumática de afogamento reprimida na primeira infância.'
  },
  {
    name: 'Behaviorismo',
    representative: 'John B. Watson, Ivan Pavlov, B. F. Skinner',
    historicalPeriod: 'Primeira metade do séc. XX (~1913–década de 1970)',
    focus: 'O comportamento observável, relações mensuráveis entre estímulos, respostas e consequências.',
    primaryMethod: 'Experimentação rigorosa de laboratório, condicionamento clássico e operante.',
    coreQuestion: 'COMO o ambiente molda, reforça e modifica as ações dos organismos?',
    strengths: 'Máximo rigor metodológico, objetividade científica incontestável e aplicações práticas na educação e modificação comportamental.',
    criticisms: 'Reducionismo ao ignorar estados internos (pensamento, emoções e motivações conscientes); mecanicismo estrito.',
    practicalExample: 'Um estudante estuda com regularidade porque recebe elogios e notas altas (reforço positivo) e evita o estresse de reprovação (reforço negativo).'
  },
  {
    name: 'Gestalt',
    representative: 'Max Wertheimer, Wolfgang Köhler, Kurt Koffka',
    historicalPeriod: 'Início do séc. XX (~1912 em diante, Alemanha)',
    focus: 'A organização da percepção, a experiência molar e os padrões visuais estruturados.',
    primaryMethod: 'Demonstrações perceptuais fenomenológicas, experimentos de resolução súbita de problemas (insight).',
    coreQuestion: 'COMO o cérebro organiza estímulos fragmentados em um todo coerente?',
    strengths: 'Descobriu princípios universais da percepção humana que fundamentam a ergonomia, arte, design e cognição.',
    criticisms: 'Teorias neurológicas originais eram descritivas e imprecisas; menos aplicável à psicopatologia clínica.',
    practicalExample: 'Ao ver três círculos com fatias abertas voltadas para o centro (Triângulo de Kanizsa), enxergamos um triângulo branco brilhante que não existe fisicamente.'
  }
];

export const DEBATING_QUESTIONS: DebatingQuestion[] = [
  {
    id: 1,
    question: 'Qual é a real diferença entre uma explicação filosófica e uma explicação científica do comportamento?',
    context: 'Na Antiguidade, filósofos refletiam sobre a alma através de diálogos e metafísica. A ciência introduziu mensuração e controle.',
    guidingPoints: [
      'Filosofia trabalha com argumentação racional, ética, epistemologia e especulação.',
      'Ciência exige hipótese testável, método padronizado, reprodutibilidade e evidência empírica.',
      'A psicologia científica não substitui as perguntas éticas da filosofia, mas testa como a mente opera de fato.'
    ],
    suggestedAnswerGuide: 'A filosofia propõe o "porquê ideal" ou a natureza conceitual da mente humana, enquanto a ciência psicológica testa "como funciona" através de medição, replicação independente e dados concretos.'
  },
  {
    id: 2,
    question: 'Por que a criação de um laboratório em Leipzig (1879) por Wilhelm Wundt é considerada o divisor de águas da Psicologia?',
    context: 'Antes de 1879 já existiam estudos de anatomia e fisiologia sensorial.',
    guidingPoints: [
      'Institucionalizou a disciplina: primeiro espaço acadêmico formal exclusivo.',
      'Uso de cronometria mental e equipamentos físicos (cronoscópio de Hipp, taquistoscópio).',
      'Atraiu estudantes do mundo inteiro (incluindo Titchener e James McKeen Cattell) que fundaram laboratórios em seus países.'
    ],
    suggestedAnswerGuide: 'O laboratório de Leipzig conferiu identidade institucional e método científico padronizado à Psicologia, desvinculando-a formalmente dos departamentos exclusivos de Filosofia e Fisiologia Médica.'
  },
  {
    id: 3,
    question: 'O Estruturalismo e o Funcionalismo travavam um debate acirrado. Quem estava com a razão sobre a mente?',
    context: 'Titchener buscava os elementos anatômicos; James defendia o fluxo contínuo e adaptativo.',
    guidingPoints: [
      'O Estruturalismo falhou pela esterilidade de decompor a mente em sensações isoladas.',
      'O Funcionalismo triunfou na prática ao dar origem à psicologia aplicada, educacional e comparada.',
      'Ambos foram fundamentais: um pela busca da precisão, o outro pela utilidade do conhecimento.'
    ],
    suggestedAnswerGuide: 'O Funcionalismo mostrou-se mais fecundo a longo prazo porque a mente humana não funciona como átomos estáticos num laboratório, mas como um sistema adaptativo em constante fluxo com o ambiente.'
  },
  {
    id: 4,
    question: 'O inconsciente freudiano ainda é válido diante dos avanços modernos da neurociência?',
    context: 'Freud propôs o inconsciente dinâmico com repressões e pulsões no início do século XX.',
    guidingPoints: [
      'A neurociência moderna comprova que a vasta maioria do processamento cerebral é inconsciente (automático/não-declarativo).',
      'Porém, o inconsciente cognitivo neurocientífico difere do inconsciente freudiano reprimido e cheio de pulsões edípicas.',
      'O valor da escuta clínica e a influência de memórias precoces permanecem amplamente reconhecidos.'
    ],
    suggestedAnswerGuide: 'Sim, a ideia de que a maior parte dos processos mentais ocorre fora do foco consciente é consenso científico hoje, embora a explicação dos mecanismos tenha sido atualizada pela ciência cognitiva.'
  },
  {
    id: 5,
    question: 'Somos nós seres 100% moldados pelo ambiente (Behaviorismo) ou dotados de estruturas mentais inatas?',
    context: 'Watson declarou a famosa frase: "Dê-me uma dúzia de crianças saudáveis e eu garanto torná-las qualquer especialista..."',
    guidingPoints: [
      'O Behaviorismo radical comprovou o imenso poder do condicionamento e do ambiente de aprendizagem.',
      'A genética comportamental e a etologia provaram que temos predisposições biológicas e circuitos inatos.',
      'O consenso contemporâneo é o modelo biopsicossocial (interação gene-ambiente).'
    ],
    suggestedAnswerGuide: 'Nenhum ser humano é uma "tábula rasa" completa; o comportamento emerge da interação dinâmica contínua entre predisposições biológicas/genéticas e as contingências de reforço e aprendizagem ambientais.'
  },
  {
    id: 6,
    question: 'Como os princípios da Gestalt se aplicam no design de celulares, aplicativos e placas de trânsito modernos?',
    context: 'A Gestalt postulou que a percepção humana organiza o campo visual automaticamente.',
    guidingPoints: [
      'Proximidade: botões relacionados ficam juntos na tela para indicar função similar.',
      'Semelhança: ícones da mesma cor ou formato transmitem a mesma categoria de ação.',
      'Figura e fundo: janelas modais escurecem o fundo para concentrar a atenção do usuário no centro.',
      'Fechamento: logotipos modernos (ex: carrefour, fedex, apple) usam espaços em branco preenchidos pela mente.'
    ],
    suggestedAnswerGuide: 'A Gestalt é a pedra fundamental do design de interface (UI/UX) e sinalização viária: interfaces intuitivas respeitam as regras naturais do cérebro para agrupar formas e distinguir figura de fundo.'
  },
  {
    id: 7,
    question: 'Existe uma "escola superior" ou cada uma é uma lente para um pedaço da complexidade humana?',
    context: 'Historicamente, as escolas competiam por hegemonia acadêmica.',
    guidingPoints: [
      'A mente não é só estrutura (Estruturalismo) nem só função (Funcionalismo).',
      'Não é só o inconsciente (Psicanálise) nem só o comportamento externo (Behaviorismo), nem só percepção (Gestalt).',
      'A psicologia contemporânea é integrativa e baseada em evidências.'
    ],
    suggestedAnswerGuide: 'Nenhuma escola isolada dá conta da totalidade do ser humano. Cada uma iluminou uma dimensão essencial, e o psicólogo contemporâneo necessita de um olhar multifatorial e integrativo.'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case_public_speaking',
    title: 'Caso 1: O Estudante com Ansiedade de Falar em Público',
    scenario: 'Lucas, estudante do 2º ano, sente sudorese, taquicardia e "branco total" toda vez que precisa apresentar um seminário perante a turma.',
    interpretations: [
      {
        school: 'Behaviorismo',
        keyConcept: 'Condicionamento Clássico & Esquiva',
        explanation: 'Lucas associou a sala de aula e o público (estímulo condicionado) a experiências anteriores de constrangimento ou risos (estímulo aversivo). A taquicardia é uma resposta reflexa condicionada. Faltar ou pedir para não apresentar é um comportamento de esquiva mantido por reforço negativo (alívio imediato da dor).'
      },
      {
        school: 'Psicanálise',
        keyConcept: 'Superego Rígido & Conflito Inconsciente',
        explanation: 'A plateia simboliza a figura de autoridade julgadora (o Superego severo). O medo de falhar ou gaguejar pode refletir um conflito reprimido de castração ou medo da perda de aprovação dos pais, deslocado para a figura dos colegas de turma.'
      },
      {
        school: 'Funcionalismo',
        keyConcept: 'Reação de Luta ou Fuga Adaptativa',
        explanation: 'A resposta biológica (adrenalina, taquicardia) é um mecanismo adaptativo ancestral para sobrevivência imediata a ameaças sociais de exclusão do grupo. A função do medo é alertar para o perigo, embora descalibrada no contexto escolar moderno.'
      },
      {
        school: 'Gestalt',
        keyConcept: 'Figura e Fundo Desproporcionais',
        explanation: 'No campo perceptivo de Lucas, a plateia e o erro iminente tornam-se uma "Figura" gigantesca e opressora, enquanto seus conhecimentos e os amigos na sala dissolvem-se no "Fundo". Falta uma reorganização perceptiva (insight) da totalidade do ambiente.'
      }
    ]
  },
  {
    id: 'case_bad_habit',
    title: 'Caso 2: O Hábito de Rolar o Feed da Rede Social de Madrugada',
    scenario: 'Mariana promete dormir cedo todos os dias, mas se pega hipnotizada rolando o celular até as 3h da manhã sem perceber o tempo passar.',
    interpretations: [
      {
        school: 'Behaviorismo',
        keyConcept: 'Esquema de Reforço Intermitente (Caça-Níqueis)',
        explanation: 'As redes sociais operam no mesmo princípio de Skinner: um esquema de reforço de razão variável. A cada arrasto de dedo, Mariana pode encontrar um vídeo engraçado (reforço positivo imprevisível), o que torna o hábito extremamente resistente à extinção.'
      },
      {
        school: 'Psicanálise',
        keyConcept: 'Princípio do Prazer vs. Evitação de Angústia',
        explanation: 'A noite e o silêncio deixam vir à tona angústias e pensamentos existenciais que o Ego tenta sufocar durante o dia. A tela funciona como um amortecedor contra a ansiedade inconsciente, buscando gratificação imediata (Id).'
      },
      {
        school: 'Funcionalismo',
        keyConcept: 'Hábito e Economia de Atenção Consciente',
        explanation: 'Como William James explicou no capítulo sobre "Hábito", rotinas motoras repetidas tornam-se automáticas e exigem pouca intervenção consciente deliberada. O cérebro poupa energia, mas perde o freio executivo quando exausto.'
      },
      {
        school: 'Gestalt',
        keyConcept: 'Princípio de Continuidade e Fechamento Incompleto',
        explanation: 'O feed infinito não possui linha de término (fechamento perceptivo). A mente busca a conclusão de um ciclo ("vou ver mais um"), mas a continuidade permanente impede a percepção do todo temporal da noite.'
      }
    ]
  },
  {
    id: 'case_optical_illusion',
    title: 'Caso 3: O Motorista que Freia Diante de uma Sombra na Pista',
    scenario: 'Dirigindo à noite sob chuva, Roberto pisa bruscamente no freio ao jurar ter visto um cachorro na pista, quando na verdade era apenas uma mancha de óleo com reflexo de um poste.',
    interpretations: [
      {
        school: 'Gestalt',
        keyConcept: 'Princípio do Fechamento e Pregnância da Forma',
        explanation: 'A mente de Roberto recebeu estímulos sensoriais imperfeitos (luz e sombra fragmentados). Instantaneamente, o cérebro completou as lacunas (lei do fechamento) para formar a figura com significado mais urgente e reconhecível: um ser vivo.'
      },
      {
        school: 'Estruturalismo',
        keyConcept: 'Erro do Estímulo vs. Sensações Elementares',
        explanation: 'Titchener apontaria que os elementos puros da experiência foram apenas manchas de luminância cinza e amarela sobre a retina (sensações). O julgamento "é um cachorro" foi uma interpretação associativa posterior e precipitada.'
      },
      {
        school: 'Funcionalismo',
        keyConcept: 'Valor Adaptativo do Falso-Positivo',
        explanation: 'Do ponto de vista evolutivo, cometer um erro "falso-positivo" (achar que uma sombra é perigo e frear) custa pouco; cometer um "falso-negativo" (ignorar um obstáculo real) é fatal. O processo mental protegeu o organismo.'
      },
      {
        school: 'Behaviorismo',
        keyConcept: 'Generalização de Estímulo',
        explanation: 'A silhueta borrada partilhava propriedades geométricas com animais que Roberto já viu na estrada. Ocorreu generalização de estímulo, disparando a resposta motora aprendida e automatizada de pisar no pedal do freio.'
      }
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Em 1879, em Leipzig, Wilhelm Wundt estabeleceu o primeiro laboratório de psicologia. Qual era o seu principal método?',
    options: [
      'Associação livre de sonhos em divã',
      'Introspeção experimental controlada com medição de estímulos',
      'Condicionamento operante com animais em caixas fechadas',
      'Observação clínica psiquiátrica em hospitais'
    ],
    correctIndex: 1,
    explanation: 'Wundt utilizava a introspeção experimental sob condições rigorosamente controladas em laboratório, medindo tempos de reação e intensidade de sensações.',
    schoolTag: 'História / Wundt'
  },
  {
    id: 2,
    question: 'Qual é a diferença fundamental entre Estruturalismo (Titchener) e Funcionalismo (William James)?',
    options: [
      'O Estruturalismo estudava o cérebro físico; o Funcionalismo estudava a alma imortal.',
      'O Estruturalismo investigava "o que" é a consciência; o Funcionalismo investigava "para que serve" a mente.',
      'O Estruturalismo usava animais; o Funcionalismo usava apenas crianças.',
      'O Estruturalismo rejeitava a razão; o Funcionalismo rejeitava a evolução de Darwin.'
    ],
    correctIndex: 1,
    explanation: 'O Estruturalismo procurava catalogar os elementos atômicos da consciência; o Funcionalismo, influenciado por Darwin, focava no papel adaptativo dos processos mentais no dia a dia.',
    schoolTag: 'Escolas Clássicas'
  },
  {
    id: 3,
    question: 'No Behaviorismo operante de Skinner, o que caracteriza o REFORÇO NEGATIVO?',
    options: [
      'Aplicação de um castigo severo após uma ação incorreta.',
      'Diminuição da probabilidade de um comportamento ocorrer.',
      'Remoção de um estímulo aversivo/desagradável, o que AUMENTA a probabilidade da resposta se repetir.',
      'Ignorar completamente o sujeito até ele parar de agir.'
    ],
    correctIndex: 2,
    explanation: 'Atenção ao erro clássico: reforço NUNCA diminui comportamento. Reforço negativo retira algo ruim (ex: barulho chato do cinto apitando no carro) para aumentar a resposta desejada (colocar o cinto).',
    schoolTag: 'Behaviorismo'
  },
  {
    id: 4,
    question: 'De acordo com a teoria da personalidade de Freud, qual instância atua mediando a realidade externa com os desejos impulsivos?',
    options: [
      'O Id',
      'O Superego',
      'O Ego',
      'O Inconsciente Coletivo'
    ],
    correctIndex: 2,
    explanation: 'O Ego opera sob o Princípio da Realidade, buscando satisfazer as pulsões cegas do Id de maneira segura e aceitável perante as regras do Superego e o mundo externo.',
    schoolTag: 'Psicanálise'
  },
  {
    id: 5,
    question: 'Qual das seguintes leis da percepção pertence à Psicologia da Gestalt?',
    options: [
      'Lei do Efeito de Thorndike',
      'Lei da Extinção de Pavlov',
      'Lei do Fechamento (Pregnância)',
      'Lei da Pulsão de Morte'
    ],
    correctIndex: 2,
    explanation: 'A Lei do Fechamento (ou pregnância) estabelece que a mente tende a completar contornos e figuras incompletas para enxergar um todo com sentido.',
    schoolTag: 'Gestalt'
  },
  {
    id: 6,
    question: 'Quem propôs a metáfora da "Tábula Rasa", afirmando que o conhecimento humano decorre exclusivamente da experiência sensorial?',
    options: [
      'René Descartes',
      'John Locke',
      'Platão',
      'Sócrates'
    ],
    correctIndex: 1,
    explanation: 'John Locke, filósofo empirista britânico, defendeu que a mente humana nasce como uma folha em branco (tábula rasa) que é preenchida pela experiência e pelos sentidos ao longo da vida.',
    schoolTag: 'Filosofia'
  },
  {
    id: 7,
    question: 'Por que o experimento do Pequeno Albert, conduzido por John B. Watson, é crucial na história da psicologia?',
    options: [
      'Provou que a inteligência é 100% genética.',
      'Demonstrou experimentalmente que reações emocionais humanas (como o medo) podem ser condicionadas pelo ambiente.',
      'Fundou a psicoterapia humanista moderna.',
      'Comprovou que os bebês sonham com figuras arquetípicas.'
    ],
    correctIndex: 1,
    explanation: 'Watson e Rosalie Rayner demonstraram que uma reação de fobia (medo de ratos brancos e objetos peludos) podia ser induzida por associação repetida com um som estrondoso assustador.',
    schoolTag: 'Behaviorismo'
  },
  {
    id: 8,
    question: 'A frase célebre "O todo é diferente da soma das partes" sintetiza o pensamento de qual escola?',
    options: [
      'Estruturalismo',
      'Psicanálise',
      'Gestalt',
      'Behaviorismo Radical'
    ],
    correctIndex: 2,
    explanation: 'A Gestalt postulou que não podemos compreender uma melodia ou uma imagem apenas analisando notas isoladas ou pixels atômicos; a configuração global impõe um sentido único.',
    schoolTag: 'Gestalt'
  }
];

export const PRESENTATION_SLIDES: SlideData[] = [
  {
    id: 1,
    title: 'Psicologia: História, Fundamentos e Principais Escolas',
    subtitle: 'Da Filosofia Clássica à Consolidação da Ciência da Mente e do Comportamento',
    speaker: 'Integrante 1 (Abertura)',
    duration: '2 min',
    bullets: [
      'Definição moderna: A ciência dos processos mentais e do comportamento.',
      'Objetivos centrais: Descrever, explicar, prever e intervir para o bem-estar humano.',
      'Percurso histórico: Da especulação metafísica à comprovação empírica.',
      'Roteiro da apresentação: Filósofos pioneiros, Wundt (1879), e as 5 Grandes Escolas.'
    ],
    image: IMAGES.hero,
    imageAlt: 'História da Psicologia - Arte Editorial',
    speakerNotes: 'Boa noite/dia a todos. Hoje apresentamos o panorama definitivo de como a psicologia deixou de ser uma divisão da filosofia para se tornar uma ciência rigorosa. Vamos percorrer os pensadores clássicos, o marco de 1879 com Wundt e as 5 escolas que moldaram a compreensão da mente humana.'
  },
  {
    id: 2,
    title: '1. Antecedentes Filosóficos: As Raízes da Mente',
    subtitle: 'Sócrates, Platão, Aristóteles, Descartes e Locke',
    speaker: 'Integrante 1',
    duration: '3 min',
    bullets: [
      'Grécia Antiga: Sócrates (o autoconhecimento / "Conhece-te a ti mesmo") e Platão (a alma separada do corpo / razão soberana).',
      'Aristóteles (*De Anima*): Primeiro tratado sistemático sobre a percepção, sentidos e memória associativa.',
      'Idade Moderna: René Descartes e o Dualismo Cartesiano (*res cogitans* vs *res extensa*).',
      'John Locke & o Empirismo: A mente como "Tábula Rasa" preenchida pela experiência sensorial.'
    ],
    highlightBox: {
      title: 'O Duelo Conceitual Fundamental',
      content: 'Racionalismo (Descartes: a razão e ideias inatas explicam a mente) vs. Empirismo (Locke: tudo é aprendido através dos sentidos e da experiência).'
    },
    speakerNotes: 'Destacar aqui a diferença entre Descartes e Locke: Descartes acreditava que nascemos com certas ideias inatas e que a mente é imaterial; Locke rebateu dizendo que nascemos como uma folha em branco. Esse debate entre inato e adquirido ecoa até os dias de hoje na genética e na educação!'
  },
  {
    id: 3,
    title: '2. Wilhelm Wundt & Leipzig (1879)',
    subtitle: 'O Nascimento Oficial da Psicologia como Ciência Independente',
    speaker: 'Integrante 2',
    duration: '3 min',
    bullets: [
      'Universidade de Leipzig (Alemanha, 1879): Fundação do 1º Laboratório de Psicologia Experimental.',
      'Foco de estudo: A experiência consciente imediata e processos elementares (sensação, percepção, tempo de reação).',
      'Método: Introspeção experimental controlada com cronoscópios e estímulos padronizados.',
      'Impacto mundial: Formação da primeira geração global de pesquisadores que fundaram departamentos pelo mundo.'
    ],
    image: IMAGES.wundtLab,
    imageAlt: 'Laboratório de Wundt em Leipzig 1879',
    highlightBox: {
      title: 'Atenção aos Detalhes Acadêmicos',
      content: 'Wundt não fazia auto-análise informal de divã; ele usava equipamentos de laboratório para cronometrar milissegundos de reação sensorial.'
    },
    speakerNotes: 'Wundt é o pai da psicologia científica. Em vez de apenas refletir sobre o que é a mente em uma poltrona, ele trouxe sujeitos para o laboratório com instrumentos de precisão para medir quanto tempo leva para um ser humano registrar conscientemente um som de sino.'
  },
  {
    id: 4,
    title: '3. Estruturalismo: A Anatomia da Consciência',
    subtitle: 'Edward Bradford Titchener (1867–1927)',
    speaker: 'Integrante 2',
    duration: '2.5 min',
    bullets: [
      'Ideia central: Decompor a experiência consciente em seus tijolos atômicos fundamentais.',
      'Três elementos fundamentais: Sensações (visão, som, paladar), Imagens (memória e imaginação) e Sentimentos (afetos).',
      'Método: Introspeção treinada rigorosa (proibido cometer o "erro do estímulo").',
      'Limitações históricas: Excessivamente subjetivo, não se aplicava a animais, crianças ou transtornos mentais.'
    ],
    highlightBox: {
      title: 'O Erro do Estímulo',
      content: 'Para Titchener, se o sujeito olhasse para uma maçã e dissesse "vejo uma maçã", ele falhava. Ele precisava relatar: "vejo uma curvatura, um tom carmesim brilhante, uma textura lisa".'
    },
    speakerNotes: 'O Estruturalismo foi a tentativa de criar uma "tabela periódica" da mente. Embora tenha sido abandonado por ser rígido demais e subjetivo, teve o mérito histórico de formalizar a pesquisa laboratorial sistemática nos Estados Unidos.'
  },
  {
    id: 5,
    title: '4. Funcionalismo: A Mente em Ação e a Adaptação',
    subtitle: 'William James, John Dewey e James Rowland Angell',
    speaker: 'Integrante 3',
    duration: '3 min',
    bullets: [
      'Origem nos EUA: Inspirado diretamente pela Teoria da Evolução de Charles Darwin.',
      'Pergunta norteadora: "Para que serve a mente humana? Como ela nos ajuda a sobreviver e nos adaptar?"',
      'O Fluxo da Consciência: A mente não é feita de blocos estáticos isolados, mas de uma corrente contínua (*stream of consciousness*).',
      'Legado: Criação da Psicologia Educacional (John Dewey), testes de inteligência e foco em problemas reais.'
    ],
    highlightBox: {
      title: 'Estruturalismo vs. Funcionalismo em Uma Frase',
      content: 'Enquanto o Estruturalismo pergunta "O QUE é a mente?", o Funcionalismo pergunta "COMO E PARA QUE ELA FUNCIONA?".'
    },
    speakerNotes: 'William James era pragmático e brilhante. Ele dizia que a consciência existe por uma razão evolutiva: nos ajudar a tomar decisões adaptativas rápidas. Seus conceitos sobre a formação de hábitos são usados até hoje em neurociência e pedagogia.'
  },
  {
    id: 6,
    title: '5. Psicanálise: O Continente Oculto do Inconsciente',
    subtitle: 'Sigmund Freud (1856–1939)',
    speaker: 'Integrante 3',
    duration: '3.5 min',
    bullets: [
      'Revolução Freudiana: A maioria das forças que comandam nossos atos está submersa fora da consciência.',
      'Primeira Tópica (Topográfica): Consciente (foco atual), Pré-Consciente (evocável) e Inconsciente (reprimido).',
      'Segunda Tópica (Estrutural): Id (princípio do prazer), Ego (princípio da realidade) e Superego (moral e ideais).',
      'Métodos clínicos: Associação livre, análise de sonhos ("a via régia para o inconsciente") e atos falhos.'
    ],
    image: IMAGES.psychoanalysis,
    imageAlt: 'Modelo do Iceberg da Psicanálise',
    highlightBox: {
      title: 'O Conflito Interno Diário',
      content: 'O Ego vive sob a pressão de três mestres exigentes: os impulsos cegos do Id, a censura implacável do Superego e as limitações concretas da Realidade externa.'
    },
    speakerNotes: 'Apresentem o modelo do iceberg com clareza: a ponta visível fora da água é o consciente; a imensidão submersa é o inconsciente. A psicanálise abriu portas para a psicoterapia moderna, embora seus métodos clínicos fujam do laboratório tradicional de Wundt.'
  },
  {
    id: 7,
    title: '6. Behaviorismo: O Comportamento Observável',
    subtitle: 'John B. Watson, Ivan Pavlov e B. F. Skinner',
    speaker: 'Integrante 4',
    duration: '3.5 min',
    bullets: [
      'Rejeição da mente como "caixa preta": A psicologia científica deve estudar apenas aquilo que pode ser observado e medido.',
      'Condicionamento Clássico (Pavlov & Watson): Aprendizagem por pareamento de estímulos (Campainha + Comida = Salivação).',
      'Condicionamento Operante (Skinner): O comportamento é moldado pelas suas consequências.',
      'Reforço (positivo/negativo) vs. Punição (positiva/negativa).'
    ],
    image: IMAGES.behaviorism,
    imageAlt: 'Aparelhos Científicos do Behaviorismo',
    highlightBox: {
      title: 'Ponto Crucial para Não Errar na Apresentação',
      content: 'Reforço Negativo NÃO é castigo! Reforço negativo retira algo aversivo para aumentar a conduta. Punição é o que busca diminuir ou extinguir um comportamento.'
    },
    speakerNotes: 'Enfatizem este slide! O Behaviorismo trouxe o mais alto grau de rigor científico para a psicologia. Expliquem com clareza a diferença entre Pavlov (reflexo involuntário) e Skinner (ação voluntária selecionada pelas consequências).'
  },
  {
    id: 8,
    title: '7. Gestalt: A Psicologia da Forma e da Totalidade',
    subtitle: 'Max Wertheimer, Wolfgang Köhler e Kurt Koffka',
    speaker: 'Integrante 4',
    duration: '3 min',
    bullets: [
      'Origem na Alemanha (1912): Oposição direta tanto ao atomismo de Wundt quanto ao mecanicismo de Watson.',
      'Princípio fundamental: "O todo é diferente da soma das suas partes".',
      'Leis da Percepção: Proximidade, Semelhança, Continuidade, Fechamento e Figura-Fundo.',
      'Resolução de problemas por Insight: A reorganização súbita do campo perceptual (estudos de Köhler com chimpanzés).'
    ],
    image: IMAGES.gestalt,
    imageAlt: 'Princípios da Gestalt em Diagrama Moderno',
    highlightBox: {
      title: 'Diferenciação Obrigatória',
      content: 'A Psicologia da Gestalt (escola experimental da percepção) não deve ser confundida com a Gestalt-Terapia (abordagem psicoterápica fundada décadas depois por Fritz Perls).'
    },
    speakerNotes: 'Mostrem as figuras da Gestalt para a turma! Perguntem se alguém vê os triângulos ou as formas fechadas. Isso prova que o cérebro humano não é uma câmera passiva; ele organiza ativamente a informação sensorial em conjuntos coerentes.'
  },
  {
    id: 9,
    title: '8. Matriz Comparativa: As 5 Escolas Lado a Lado',
    subtitle: 'Síntese das Divergências e Convergências Metodológicas',
    speaker: 'Integrante 5 (Conclusão)',
    duration: '3 min',
    bullets: [
      'Estruturalismo: Foco nos elementos atômicos da consciência / Introspeção de laboratório.',
      'Funcionalismo: Foco na função adaptativa / Observação e testes práticos.',
      'Psicanálise: Foco nas motivações inconscientes e pulsões / Associação livre clínica.',
      'Behaviorismo: Foco no comportamento público observável / Condicionamento experimental.',
      'Gestalt: Foco na percepção global e totalidade da forma / Experimentos perceptuais e insight.'
    ],
    highlightBox: {
      title: 'Conclusão Histórica',
      content: 'Nenhuma dessas escolas está 100% certa ou errada; cada uma forneceu peças essenciais que compõem o quebra-cabeça da psicologia contemporânea.'
    },
    speakerNotes: 'Este slide sintetiza todo o trabalho. Usem a tabela comparativa interativa no aplicativo para contrastar rapidamente objeto, método e legado de cada uma das 5 correntes.'
  },
  {
    id: 10,
    title: '9. Debate em Sala de Aula: Perguntas Desafiadoras',
    subtitle: 'Engajando a Turma com Questões Reflexivas',
    speaker: 'Todos os Integrantes',
    duration: '5 min',
    bullets: [
      '1. O que nos move mais: as pulsões inconscientes (Freud) ou as contingências do ambiente (Skinner)?',
      '2. Por que a criação do laboratório de 1879 foi tão revolucionária para a validação social da psicologia?',
      '3. Como a Gestalt e o Funcionalismo explicam as interfaces que usamos diariamente nos nossos smartphones?',
      '4. É possível estudar cientificamente a mente sem recorrer à subjetividade da pessoa que a vivencia?'
    ],
    highlightBox: {
      title: 'Dinâmica com a Turma',
      content: 'Abra a palavra para os colegas da sala escolherem uma das perguntas para justificar seu ponto de vista!'
    },
    speakerNotes: 'Convidem a sala a participar. Tenham em mãos as notas das "Perguntas de Debate" do app para mediar as respostas dos colegas e enriquecer a discussão acadêmica!'
  }
];

export const GROUP_ROLES_TEMPLATE = [
  {
    role: 'Apresentador 1: Fundações & Filosofia',
    time: '4–5 min',
    topics: ['Abertura do trabalho e objetivos', 'O que é Psicologia hoje', 'Antecedentes: Sócrates, Platão e Aristóteles', 'Descartes vs. Locke (Racionalismo vs. Empirismo)'],
    tips: 'Fale com segurança e clareza, estabelecendo o contraste entre pensar sobre a mente e testar a mente cientificamente.'
  },
  {
    role: 'Apresentador 2: A Era dos Laboratórios',
    time: '4–5 min',
    topics: ['Wilhelm Wundt e o Laboratório de Leipzig (1879)', 'A Introspeção Experimental Controlada', 'Edward Titchener e o Estruturalismo', 'O "Erro do Estímulo" e as limitações'],
    tips: 'Destaque que Wundt mediu tempos de reação com aparelhos de precisão; mostre a foto do laboratório.'
  },
  {
    role: 'Apresentador 3: Mente em Ação & O Inconsciente',
    time: '5–6 min',
    topics: ['William James e o Funcionalismo (Darwin e adaptação)', 'Fluxo da Consciência e Pragmatismo', 'Sigmund Freud e a Psicanálise', 'Consciente, Pré e Inconsciente + Id, Ego e Superego'],
    tips: 'Use a metáfora do iceberg para prender a atenção visual de todos e explique o drama do Ego.'
  },
  {
    role: 'Apresentador 4: Comportamento & Percepção',
    time: '5–6 min',
    topics: ['Behaviorismo: Watson, Pavlov e Skinner', 'Condicionamento Clássico vs. Operante', 'Atenção ao Reforço Negativo vs. Punição', 'Gestalt: As Leis da Percepção e o Fenômeno Phi'],
    tips: 'Faça o teste visual com a turma ao mostrar o slide da Gestalt e esclareça o mito do reforço negativo.'
  },
  {
    role: 'Apresentador 5: Síntese, Comparação & Mediação',
    time: '4–5 min',
    topics: ['Matriz Comparativa das 5 Escolas', 'Mitos e erros frequentes corrigidos', 'Conclusão acadêmica', 'Abertura do Quiz ou Debate com a turma'],
    tips: 'Amarre todos os temas com firmeza e lance as perguntas desafiadoras para a sala interagir.'
  }
];
