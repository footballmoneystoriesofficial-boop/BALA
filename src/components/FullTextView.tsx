import React, { useState } from 'react';
import { 
  Search, 
  BookMarked, 
  HelpCircle, 
  Layers, 
  Clock, 
  Sparkles,
  ExternalLink,
  Presentation,
  CheckCircle2,
  Quote,
  Lightbulb
} from 'lucide-react';
import { IMAGES, COMPARISON_MATRIX, DEBATING_QUESTIONS } from '../data/psychologyContent';
import { CorrectionsBanner } from './CorrectionsBanner';

interface FullTextViewProps {
  onGoToSlides: (slideIndex?: number) => void;
  onGoToSimulator: () => void;
}

export const FullTextView: React.FC<FullTextViewProps> = ({
  onGoToSlides,
  onGoToSimulator
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('intro');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Conceptual audit banner */}
      <CorrectionsBanner />

      {/* Main Grid: Sidebar TOC + Main Academic Article */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Table of Contents & Quick Navigation (Desktop Sticky) */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-24 space-y-4 no-print">
          <div className="bg-white rounded-xl border border-slate-200/90 p-4 shadow-xs">
            <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <BookMarked className="w-4 h-4 text-amber-700" />
              <span>Sumário do Trabalho</span>
            </div>

            <nav className="space-y-1 text-xs">
              {[
                { id: 'intro', label: 'Introdução & Definições' },
                { id: 'historia', label: '1. História da Psicologia' },
                { id: 'filosofos', label: '2. Antecedentes Filosóficos' },
                { id: 'wundt', label: '3. Wilhelm Wundt & 1879' },
                { id: 'estruturalismo', label: '4. Estruturalismo' },
                { id: 'funcionalismo', label: '5. Funcionalismo' },
                { id: 'psicanalise', label: '6. Psicanálise' },
                { id: 'behaviorismo', label: '7. Behaviorismo' },
                { id: 'gestalt', label: '8. Gestalt' },
                { id: 'comparacao', label: '9. Comparação das Escolas' },
                { id: 'conclusao', label: 'Conclusão Geral' },
                { id: 'debate', label: 'Perguntas para Debate' },
                { id: 'referencias', label: 'Referências Bibliográficas' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md transition-colors cursor-pointer truncate ${
                    activeSection === item.id
                      ? 'bg-amber-50 text-amber-900 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Quick presentation card */}
          <div className="bg-slate-900 text-slate-100 rounded-xl p-4 shadow-sm text-xs space-y-3">
            <div className="flex items-center gap-2 font-semibold text-white">
              <Presentation className="w-4 h-4 text-amber-400" />
              <span>Apresentação em Aula</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Use os slides estruturados com notas do orador e cronômetro integrado para projetar na sala.
            </p>
            <button
              onClick={() => onGoToSlides(0)}
              className="w-full py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg font-medium transition-colors cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Abrir Slides</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </aside>

        {/* Main Article Document */}
        <main className="lg:col-span-9 bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-10 shadow-xs space-y-12 text-slate-800">
          {/* Document Header & Hero Visual */}
          <header className="space-y-6 pb-8 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
              <span>Trabalho Acadêmico de Psicologia</span>
              <span aria-hidden="true">·</span>
              <span>História, Fundamentos e Escolas</span>
              <span aria-hidden="true">·</span>
              <span>Apresentação & Debate</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              História, Fundamentos e Principais Escolas Psicológicas
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Um guia completo e estruturado para estudo individual e apresentação em sala de aula, examinando desde os antecedentes filosóficos na Grécia Antiga até a fundação do primeiro laboratório científico por Wilhelm Wundt e as cinco grandes escolas que transformaram o entendimento da mente humana.
            </p>

            {/* Hero Image Asset */}
            <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <img
                src={IMAGES.hero}
                alt="História da Psicologia - Arte Editorial de Abertura"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[420px] object-cover"
              />
              <div className="p-3 bg-slate-900/90 text-slate-300 text-xs flex items-center justify-between">
                <span>Da especulação filosófica grega à cronometria mental de Leipzig (1879)</span>
                <span className="text-slate-400 text-[11px]">Acervo Acadêmico</span>
              </div>
            </div>
          </header>

          {/* Section: Introdução */}
          <section id="intro" className="space-y-4 scroll-mt-24">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Abertura</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Introdução à Ciência Psicológica
            </h2>
            <div className="prose text-slate-700 text-base leading-relaxed space-y-4">
              <p>
                A <strong>Psicologia</strong> é a ciência que investiga o <strong>comportamento humano</strong> e os <strong>processos mentais</strong>, abrangendo fenômenos vitais como o pensamento, a memória, a emoção, a motivação, a aprendizagem e a percepção. O seu desenvolvimento contemporâneo resultou de milênios de reflexão filosófica e de mais de um século de rigorosas investigações experimentais.
              </p>
              <p>
                O termo tem origem nas palavras gregas <em>psyche</em> (alma ou mente) e <em>logos</em> (estudo ou razão). Contudo, a transição de um ramo especulativo da metafísica para uma ciência autônoma exigiu a formulação de métodos sistemáticos de observação, mensuração empírica e testabilidade de hipóteses.
              </p>
              <p>
                Ao longo de sua trajetória, surgiram diferentes <strong>escolas de pensamento</strong>, cada qual elegendo um objeto de estudo prioritário e ferramentas analíticas próprias: o <em>Estruturalismo</em>, o <em>Funcionalismo</em>, a <em>Psicanálise</em>, o <em>Behaviorismo</em> e a <em>Gestalt</em>. Compreender essas escolas não é um mero exercício retrospectivo, mas a chave para dominar as teorias contemporâneas da mente e da conduta social.
              </p>
            </div>
          </section>

          {/* Section: 1. História da Psicologia */}
          <section id="historia" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Capítulo 1</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              1. A História da Psicologia: Uma Linha do Tempo
            </h2>
            <p className="text-slate-600 leading-relaxed">
              O percurso através do qual o estudo da mente e do comportamento passou de explicações predominantemente teológicas e filosóficas para uma disciplina científica independente organiza-se em quatro grandes épocas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 text-sm">1.1. Antiguidade Clássica</h3>
                  <span className="text-xs text-slate-500 font-medium">Séc. V a.C. – IV d.C.</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Os filósofos gregos buscavam compreender a essência da alma (<em>psyche</em>), a origem do pensamento e das paixões. Sócrates inaugurou o método da auto-análise e da maiêutica; Platão propôs a cisão entre alma imortal e corpo material; e Aristóteles redigiu <em>De Anima</em>, examinando memória, percepção sensorial e hábitos.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 text-sm">1.2. Idade Média</h3>
                  <span className="text-xs text-slate-500 font-medium">Séc. V – XV</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  As indagações sobre a mente subordinaram-se à teologia e à moral religiosa. Santo Agostinho explorou a interioridade e a confissão da alma humana diante de Deus; São Tomás de Aquino integrou a lógica aristotélica à doutrina cristã, debatendo o livre-arbítrio e as paixões da alma.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 text-sm">1.3. Idade Moderna</h3>
                  <span className="text-xs text-slate-500 font-medium">Séc. XVII – XVIII</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  O Iluminismo e a Revolução Científica revolucionaram a epistemologia. René Descartes formulou o <strong>dualismo cartesiano</strong> (mente pensante vs. corpo mecânico). Em contrapartida, John Locke e os empiristas britânicos defenderam que todo o conhecimento advém da experiência sensível na <em>tábula rasa</em>.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 text-sm">1.4. Idade Contemporânea</h3>
                  <span className="text-xs text-slate-500 font-medium">1879 em diante</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Em 1879, Wilhelm Wundt estabeleceu o primeiro laboratório de psicologia experimental em Leipzig. A partir daí, surgiram sucessivamente o Estruturalismo, o Funcionalismo, a Psicanálise, o Behaviorismo, a Gestalt e, mais tarde, a Revolução Cognitiva e as Neurociências.
                </p>
              </div>
            </div>

            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/70 text-xs text-amber-900 space-y-1">
              <span className="font-semibold">Questão Provocativa para Debate:</span>
              <p>Por que razão a simples reflexão filosófica deixou de ser suficiente e tornou-se indispensável transformar o estudo da mente em investigação científica controlada?</p>
            </div>
          </section>

          {/* Section: 2. Antecedentes Filosóficos */}
          <section id="filosofos" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Capítulo 2</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              2. Antecedentes Filosóficos da Psicologia
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Antes de existir como ciência autônoma, a psicologia era parte integrante da Filosofia. Os pensadores clássicos formularam os grandes enigmas que os psicólogos experimentais procurariam responder mais tarde com dados e instrumentos de laboratório:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 text-sm">Sócrates (c. 470–399 a.C.) — O Autoconhecimento</h3>
                  <span className="text-xs text-slate-400">Grécia Antiga</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Adotou como lema o aforismo délfico <em>"Conhece-te a ti mesmo"</em>. Desenvolveu o método dialógico (ironia e maiêutica), que instigava o interlocutor a questionar suas próprias certezas inconscientes e ilusões cognitivas, antecipando aspectos do diálogo reflexivo terapêutico.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 text-sm">Platão (c. 428–348 a.C.) — O Dualismo e a Supremacia da Razão</h3>
                  <span className="text-xs text-slate-400">Grécia Antiga</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Defendia que a alma era distinta do corpo corruptível e pré-existia no "Mundo das Ideias". Para Platão, a alma possuía três instâncias: a racional (sediada na cabeça), a irascível/emocional (no peito) e a concupiscível/apetitiva (no abdômen) — uma divisão tripartite que ecoa a posterior estrutura freudiana de Ego, Superego e Id.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 text-sm">Aristóteles (384–322 a.C.) — Da Alma e a Psicologia Empírica</h3>
                  <span className="text-xs text-slate-400">Grécia Antiga</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Escreveu o primeiro tratado formal sobre a vida mental: <em>De Anima</em> (Da Alma). Ao contrário de Platão, concebia a alma e o corpo como inseparáveis (a alma como a forma do corpo vivo). Estudou a percepção sensorial, a memória e formulou as leis da associação (semelhança, contraste e contiguidade), que séculos depois fundamentariam as teorias de aprendizagem do Behaviorismo.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 text-sm">René Descartes (1596–1650) — Dualismo Cartesiano e Mecanicismo</h3>
                  <span className="text-xs text-slate-400">Idade Moderna</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Propôs a distinção radical entre duas substâncias: a <em>res cogitans</em> (mente imaterial, pensante, sem extensão física) e a <em>res extensa</em> (o corpo físico mecânico, governado por leis hidráulicas e reflexos biológicos). Postulou que ambas interagiam na glândula pineal do cérebro. Inaugurou o estudo do arco-reflexo e a defesa de ideias inatas.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 text-sm">John Locke (1632–1704) — Empirismo e a Tábula Rasa</h3>
                  <span className="text-xs text-slate-400">Idade Moderna</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Em seu <em>Ensaio sobre o Entendimento Humano</em>, rejeitou categoricamente a existência de ideias inatas cartesianas. Postulou que a mente humana nasce como uma <strong>folha em branco</strong> (<em>tábula rasa</em>), na qual toda a matéria-prima do pensamento (ideias simples e complexas) é gravada exclusivamente através da experiência sensorial e da reflexão. Essa premissa tornou-se a base de todo o movimento comportamentalista.
                </p>
              </div>
            </div>
          </section>

          {/* Section: 3. Wilhelm Wundt e o Primeiro Laboratório */}
          <section id="wundt" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Capítulo 3 · Marco Histórico</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              3. Wilhelm Wundt e o Primeiro Laboratório (Leipzig, 1879)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Wilhelm Maximilian Wundt (1832–1920)</strong>, médico, fisiologista e filósofo alemão, é unanimemente reconhecido como o pai fundador da Psicologia Científica. Em <strong>1879</strong>, fundou formalmente o Instituto de Psicologia Experimental na Universidade de Leipzig, na Alemanha.
                </p>
                <p>
                  Antes de Wundt, o estudo da mente ficava confinado a tratados teóricos. Wundt estabeleceu que os processos mentais poderiam ser investigados com o mesmo rigor, instrumentos físicos de precisão e controle de variáveis utilizados pela Física e pela Fisiologia de Helmholtz.
                </p>
                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5 text-xs">
                  <span className="font-semibold text-slate-900">O Método da Introspeção Experimental:</span>
                  <p className="text-slate-600">
                    Ao contrário da introspeção filosófica casual, a introspeção de Wundt exigia:
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600">
                    <li>Estímulos rigorosamente calibrados e repetíveis (luzes, sons com diapasões, choques elétricos fracos).</li>
                    <li>Medição exata do tempo de reação em milissegundos através do cronoscópio de Hipp.</li>
                    <li>Participantes treinados para relatar a experiência sensorial imediata, evitando interpretações tardias.</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                  <img
                    src={IMAGES.wundtLab}
                    alt="Laboratório de Psicologia Experimental de Wundt em Leipzig"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-2.5 text-[11px] text-slate-500 bg-white border-t border-slate-100">
                    Laboratório de Leipzig: cronoscópios, telégrafos e cadernos de cronometria mental.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: 4. Estruturalismo */}
          <section id="estruturalismo" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Capítulo 4 · Escola Pioneira</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              4. Estruturalismo: A Busca pelos Átomos da Mente
            </h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                O <strong>Estruturalismo</strong> foi a primeira escola formal da psicologia nos Estados Unidos, liderada por <strong>Edward Bradford Titchener (1867–1927)</strong>, aluno britânico de Wundt que lecionou na Cornell University.
              </p>
              <p>
                A premissa do Estruturalismo era análoga à da Química: assim como a matéria física é composta por elementos da tabela periódica, a mente consciente seria formada pela combinação organizada de elementos sensoriais básicos. A pergunta central era: <strong>"O QUE constitui a experiência consciente?"</strong>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-900 block mb-1">1. Sensações</span>
                  <p className="text-slate-600">Elementos básicos da percepção externa (visão, audição, olfato, paladar, sensações táteis e cinestésicas).</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-900 block mb-1">2. Imagens</span>
                  <p className="text-slate-600">Elementos de ideias e lembranças na mente que não decorrem diretamente do estímulo sensorial presente.</p>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                  <span className="font-semibold text-slate-900 block mb-1">3. Afetos (Sentimentos)</span>
                  <p className="text-slate-600">Elementos das experiências emocionais, variando tipicamente entre prazer e desprazer.</p>
                </div>
              </div>

              <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200 text-xs space-y-2">
                <span className="font-semibold text-slate-900">O Conceito de "Erro do Estímulo":</span>
                <p className="text-slate-600 leading-relaxed">
                  Titchener advertia seus alunos contra o <em>erro do estímulo</em>: nomear o objeto observado em vez de descrever os dados sensoriais brutos. Por exemplo, ao olhar para uma maçã, o observador treinado não devia dizer "é uma maçã", mas relatar uma área de tonalidade vermelha brilhante, curvatura suave e reflexo luminoso.
                </p>
                <div className="pt-2 text-rose-800 font-medium border-t border-slate-200/60">
                  Limitações históricas: A introspeção era subjetiva demais e não podia ser verificada por dois observadores independentes. Além disso, excluiu crianças, animais e pessoas com sofrimento psíquico severo.
                </div>
              </div>
            </div>
          </section>

          {/* Section: 5. Funcionalismo */}
          <section id="funcionalismo" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Capítulo 5 · Pragmatismo & Evolução</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              5. Funcionalismo: A Consciência como Ferramenta Adaptativa
            </h2>
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <p>
                Surgido em oposição frontal ao Estruturalismo, o <strong>Funcionalismo</strong> emergiu nos Estados Unidos na virada para o século XX, impulsionado por <strong>William James (1842–1910)</strong>, <strong>John Dewey (1859–1952)</strong> e <strong>James Rowland Angell (1869–1949)</strong>.
              </p>
              <p>
                Em vez de perguntar estaticamente "o que é a mente", os funcionalistas perguntavam: <strong>"PARA QUE SERVE a mente? Qual é o papel dos processos psicológicos na adaptação contínua do indivíduo ao ambiente?"</strong>
              </p>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                <h4 className="font-semibold text-slate-900 text-xs">Ideias Centrais de William James:</h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>
                    <strong>O Fluxo da Consciência (<em>Stream of Consciousness</em>):</strong> A consciência não é feita de blocos ou tijolos estanques como propunha Titchener; ela flui ininterruptamente como um rio, transformando-se a cada instante.
                  </li>
                  <li>
                    <strong>Inspiração Darwiniana:</strong> A mente evoluiu pela seleção natural. Se temos emoções, medo, memória e atenção seletiva, é porque cada uma dessas faculdades desempenha uma utilidade prática para a sobrevivência biológica e social.
                  </li>
                  <li>
                    <strong>O Papel dos Hábitos:</strong> Hábitos automatizam condutas rotineiras, liberando a atenção consciente para resolver problemas novos e imprevisíveis.
                  </li>
                </ul>
              </div>

              <p>
                <strong>Legado Duradouro:</strong> O Funcionalismo abriu as portas da psicologia para o mundo real, criando a <strong>Psicologia Educacional</strong> (revolucionada por John Dewey na Universidade de Chicago), o desenvolvimento de testes de aptidão e a psicologia aplicada nas organizações industriais.
              </p>
            </div>
          </section>

          {/* Section: 6. Psicanálise */}
          <section id="psicanalise" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Capítulo 6 · O Inconsciente</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              6. Psicanálise: O Continente Submerso da Mente
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  Criada pelo médico neurologista vienense <strong>Sigmund Freud (1856–1939)</strong>, a <strong>Psicanálise</strong> descentralizou a consciência. Freud demonstrou que a maior parte dos nossos impulsos, memórias e conflitos emocionais opera abaixo da superfície consciente.
                </p>

                <div className="space-y-3 pt-1">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                    <span className="font-semibold text-slate-900 block mb-0.5">Primeira Tópica (Modelo Topográfico do Iceberg):</span>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                      <li><strong>Consciente:</strong> Pensamentos e sensações percebidos no momento presente.</li>
                      <li><strong>Pré-Consciente:</strong> Memórias acessíveis com facilidade voluntária.</li>
                      <li><strong>Inconsciente:</strong> Vasto reservatório reprimido de desejos, traumas e pulsões.</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                    <span className="font-semibold text-slate-900 block mb-0.5">Segunda Tópica (Modelo Estrutural da Personalidade):</span>
                    <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                      <li><strong>Id:</strong> Instância primitiva, regida pelo princípio do prazer imediato.</li>
                      <li><strong>Ego:</strong> O mediador racional, operando sob o princípio da realidade.</li>
                      <li><strong>Superego:</strong> O juiz interno, incorporando a moralidade social e a culpa.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                  <img
                    src={IMAGES.psychoanalysis}
                    alt="Modelo do Iceberg da Mente Humana na Psicanálise"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-2.5 text-[11px] text-slate-500 bg-white border-t border-slate-100">
                    O modelo do iceberg: a ponta visível consciente sustentada pela imensidão inconsciente.
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Métodos de Investigação:</strong> Freud substituiu a hipnose inicial pela <strong>associação livre</strong> (onde o paciente fala sem filtros ou censura prévia), a <strong>interpretação dos sonhos</strong> (que considerava <em>"a via régia para o inconsciente"</em>) e a análise dos atos falhos e da transferência afetiva com o terapeuta.
            </p>
          </section>

          {/* Section: 7. Behaviorismo */}
          <section id="behaviorismo" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Capítulo 7 · O Rigor Comportamental</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              7. Behaviorismo: A Ciência do Comportamento Observável
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  O <strong>Behaviorismo</strong> (ou Comportamentalismo) irrompeu em 1913 quando <strong>John B. Watson (1878–1958)</strong> publicou o manifesto <em>"Psychology as the Behaviorist Views It"</em>. Watson postulou que, para se tornar uma ciência respeitada e objetiva, a psicologia precisava abandonar a introspeção de pensamentos intangíveis e concentrar-se exclusivamente naquilo que é <strong>publicamente observável e mensurável: o comportamento</strong>.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="font-semibold text-slate-900">Condicionamento Clássico (Ivan Pavlov):</span>
                    <p className="text-slate-600 mt-1">
                      Aprendizagem reflexa por associação temporal de estímulos. Um estímulo neutro (som de sino) repetidamente associado a um estímulo incondicionado (comida) passa a evocar uma resposta condicionada (salivação).
                    </p>
                  </div>

                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <span className="font-semibold text-slate-900">Condicionamento Operante (B. F. Skinner):</span>
                    <p className="text-slate-600 mt-1">
                      O comportamento voluntário do organismo é selecionado e mantido pelas suas <strong>consequências</strong> imediatas no meio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                  <img
                    src={IMAGES.behaviorism}
                    alt="Instrumentos Científicos e Caderno de Laboratório do Behaviorismo"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-2.5 text-[11px] text-slate-500 bg-white border-t border-slate-100">
                    A caixa de condicionamento operante e os registros cumulativos de resposta.
                  </div>
                </div>
              </div>
            </div>

            {/* Essential Behavioral Matrix */}
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/80 space-y-3">
              <div className="flex items-center gap-2 text-emerald-950 font-semibold text-xs">
                <Lightbulb className="w-4 h-4 text-emerald-700" />
                <span>Quadro Operacional de Skinner: Reforço vs. Punição</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-emerald-200/60">
                  <span className="font-semibold text-emerald-900 block mb-1">Reforço (+ ou -) = AUMENTA conduta</span>
                  <p className="text-slate-600">
                    <strong>Positivo:</strong> Adiciona recompensa agradável (ex: elogio após tirar nota 10).<br />
                    <strong>Negativo:</strong> Retira estímulo ruim (ex: colocar cinto para cessar o alarme irritante do carro).
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg border border-emerald-200/60">
                  <span className="font-semibold text-rose-900 block mb-1">Punição (+ ou -) = DIMINUI conduta</span>
                  <p className="text-slate-600">
                    <strong>Positiva:</strong> Adiciona estímulo aversivo (ex: bronca formal do professor).<br />
                    <strong>Negativa:</strong> Retira privilégio bom (ex: perder o celular durante o fim de semana).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: 8. Gestalt */}
          <section id="gestalt" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Capítulo 8 · A Psicologia da Forma</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              8. Gestalt: A Percepção da Totalidade
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  A <strong>Psicologia da Gestalt</strong> nasceu na Alemanha em 1912 com <strong>Max Wertheimer (1880–1943)</strong>, <strong>Wolfgang Köhler (1887–1967)</strong> e <strong>Kurt Koffka (1886–1941)</strong>. Seu ponto de partida foi o estudo do <em>fenômeno phi</em> (a ilusão de movimento contínuo gerada pela rápida sucessão de luzes estáticas piscando).
                </p>
                <p>
                  A máxima fundamental da escola é: <strong>"O todo é diferente da soma de suas partes"</strong>. Quando você ouve uma sinfonia, não ouve apenas notas acústicas separadas somadas matematicamente; você ouve uma melodia global unificada que confere sentido a cada nota.
                </p>

                <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-xs">
                  <span className="font-semibold text-slate-900">Principais Leis de Organização Perceptual:</span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600">
                    <li><strong>Proximidade:</strong> Itens próximos no espaço são agrupados juntos.</li>
                    <li><strong>Semelhança:</strong> Itens com mesma forma/cor são percebidos como um conjunto.</li>
                    <li><strong>Continuidade:</strong> A mente segue caminhos visuais contínuos e fluidos.</li>
                    <li><strong>Fechamento:</strong> O cérebro completa mentalmente lacunas em figuras incompletas.</li>
                    <li><strong>Figura e Fundo:</strong> Destacamos um objeto nítido sobre um plano de fundo.</li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
                  <img
                    src={IMAGES.gestalt}
                    alt="Diagrama Visual das Leis de Percepção da Gestalt"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-2.5 text-[11px] text-slate-500 bg-white border-t border-slate-100">
                    Demonstração dos princípios da Gestalt: fechamento, proximidade, semelhança e figura-fundo.
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>O Conceito de Insight:</strong> Wolfgang Köhler, em seus famosos experimentos em Tenerife com o chimpanzé Sultan, demonstrou que a aprendizagem não ocorre apenas por tentativa e erro mecanicista (como dizia o Behaviorismo), mas também por <strong>insight</strong> — uma súbita reestruturação cognitiva do campo perceptual que permite ao sujeito visualizar a solução inteira de um problema complexo.
            </p>
          </section>

          {/* Section: 9. Quadro Comparativo */}
          <section id="comparacao" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-amber-700 text-xs font-semibold uppercase tracking-wider mb-1">
                  Capítulo 9 · Síntese Comparativa
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                  9. Quadro Comparativo das Cinco Grandes Escolas
                </h2>
              </div>
              <button
                onClick={onGoToSimulator}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-lg text-xs font-medium border border-amber-200 transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Abrir no Simulador de Casos</span>
              </button>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
                <thead className="bg-slate-100/80 font-semibold text-slate-900">
                  <tr>
                    <th scope="col" className="px-4 py-3.5">Escola</th>
                    <th scope="col" className="px-4 py-3.5">Autores Centrais</th>
                    <th scope="col" className="px-4 py-3.5">Objeto de Estudo</th>
                    <th scope="col" className="px-4 py-3.5">Método Principal</th>
                    <th scope="col" className="px-4 py-3.5">Pergunta Guia</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {COMPARISON_MATRIX.map((row) => (
                    <tr key={row.name} className="hover:bg-slate-50/70 transition-colors">
                      <td className="px-4 py-3 font-semibold text-slate-900 whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.representative}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {row.focus}
                      </td>
                      <td className="px-4 py-3 text-slate-600">
                        {row.primaryMethod}
                      </td>
                      <td className="px-4 py-3 text-amber-900 font-medium">
                        {row.coreQuestion}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Conclusão Geral */}
          <section id="conclusao" className="space-y-4 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Síntese Acadêmica</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Conclusão: A Psicologia Contemporânea
            </h2>
            <div className="prose text-slate-700 text-base leading-relaxed space-y-4">
              <p>
                A história da psicologia demonstra que o conhecimento sobre a mente e o comportamento humano não foi construído por uma única mente isolada nem por uma teoria homogênea, mas por um dinâmico embate de paradigmas científicos.
              </p>
              <p>
                A filosofia formulou as perguntas fundamentais sobre a alma e o conhecimento; Wilhelm Wundt estabeleceu o método experimental e o laboratório; o Estruturalismo exigiu rigor anatômico na consciência; o Funcionalismo ancorou a mente na adaptação evolutiva e prática; a Psicanálise revelou as forças inconscientes que movem as paixões humanas; o Behaviorismo forneceu critérios inegociáveis de observação objetiva; e a Gestalt comprovou que a mente humana impõe uma ordem estruturada ao mundo perceptual.
              </p>
              <p>
                Hoje, a Psicologia não vive mais em "trincheiras de escolas". A prática psicológica moderna é <strong>integrativa e baseada em evidências científicas</strong>, combinando descobertas da psicologia cognitiva, das neurociências, da análise do comportamento e de abordagens clínicas humanizadas para promover a saúde mental e o desenvolvimento pleno da sociedade.
              </p>
            </div>
          </section>

          {/* Section: Perguntas para Debate */}
          <section id="debate" className="space-y-6 scroll-mt-24 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2 text-amber-700 text-xs font-semibold uppercase tracking-wider">
              <span>Dinâmica de Sala de Aula</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Perguntas Gerais para Debate em Grupo
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Utilize estas questões para estimular a participação ativa dos colegas e do professor após a exposição oral dos slides:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DEBATING_QUESTIONS.slice(0, 4).map((q) => (
                <div key={q.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2 text-xs">
                  <span className="font-semibold text-amber-900 block text-sm">
                    {q.id}. {q.question}
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    <strong>Ponto de mediação: </strong>{q.suggestedAnswerGuide}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Referências Bibliográficas */}
          <section id="referencias" className="space-y-4 scroll-mt-24 pt-6 border-t border-slate-100 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-amber-700 font-semibold uppercase tracking-wider">
              <span>Fontes & Leituras</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900">
              Referências Bibliográficas
            </h2>
            <ul className="space-y-2 font-mono-code text-[11px] leading-relaxed">
              <li>• FREUD, Sigmund. <em>Cinco Lições de Psicanálise</em>. Rio de Janeiro: Imago, 2006.</li>
              <li>• HERGENHAHN, B. R.; HENLEY, Tracy. <em>An Introduction to the History of Psychology</em>. 8th ed. Boston: Cengage Learning, 2018.</li>
              <li>• JAMES, William. <em>The Principles of Psychology</em>. New York: Henry Holt and Company, 1890.</li>
              <li>• SCHULTZ, Duane P.; SCHULTZ, Sydney Ellen. <em>História da Psicologia Moderna</em>. 11. ed. São Paulo: Cengage Learning, 2019.</li>
              <li>• SKINNER, B. F. <em>Ciência e Comportamento Humano</em>. São Paulo: Martins Fontes, 2003.</li>
              <li>• WATSON, John B. Psychology as the Behaviorist Views it. <em>Psychological Review</em>, v. 20, p. 158-177, 1913.</li>
              <li>• WUNDT, Wilhelm. <em>Principles of Physiological Psychology</em>. Leipzig: Engelmann, 1874.</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};
