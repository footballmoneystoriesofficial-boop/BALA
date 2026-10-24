import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/psychologyContent';
import { Sparkles, Brain, ArrowRight, CheckCircle2, Lightbulb } from 'lucide-react';

export const CaseSimulatorView: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);
  const [activeSchoolFilter, setActiveSchoolFilter] = useState<string>('all');

  const currentCase = CASE_STUDIES.find(c => c.id === selectedCaseId) || CASE_STUDIES[0];

  const displayedInterpretations = activeSchoolFilter === 'all'
    ? currentCase.interpretations
    : currentCase.interpretations.filter(i => i.school.toLowerCase() === activeSchoolFilter.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Laboratório de Casos Práticos</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
          Simulador: "Como Cada Escola Explica Este Comportamento?"
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Um dos pontos mais elogiados pelos professores é a capacidade de aplicar as teorias a casos reais do cotidiano. Veja o mesmo fenômeno humano interpretado por lentes epistemológicas completamente distintas.
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CASE_STUDIES.map((c) => (
          <button
            key={c.id}
            onClick={() => {
              setSelectedCaseId(c.id);
              setActiveSchoolFilter('all');
            }}
            className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
              selectedCaseId === c.id
                ? 'bg-amber-50/80 border-amber-300 shadow-sm ring-1 ring-amber-300'
                : 'bg-white border-slate-200/90 hover:border-slate-300 text-slate-700'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 mb-1">
              <Brain className="w-3.5 h-3.5 text-amber-600" />
              <span>Estudo de Caso</span>
            </div>
            <h3 className="font-display text-base font-bold text-slate-900 line-clamp-1">
              {c.title}
            </h3>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {c.scenario}
            </p>
          </button>
        ))}
      </div>

      {/* Selected Scenario Spotlight Box */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
              Cenário Selecionado
            </span>
            <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
              {currentCase.title}
            </h2>
          </div>
        </div>

        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-sm text-slate-800 leading-relaxed italic">
          "{currentCase.scenario}"
        </div>

        {/* Filter by school */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
          <span className="text-slate-500 font-medium mr-1">Filtrar Escola:</span>
          {['all', 'Behaviorismo', 'Psicanálise', 'Funcionalismo', 'Gestalt'].map((school) => (
            <button
              key={school}
              onClick={() => setActiveSchoolFilter(school)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                activeSchoolFilter === school
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {school === 'all' ? 'Ver Todas as Interpretações' : school}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of School Interpretations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayedInterpretations.map((interp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-display text-xl font-bold text-slate-900">
                  {interp.school}
                </span>
                <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/50">
                  {interp.keyConcept}
                </span>
              </div>

              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Mecanismo Explicativo
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {interp.explanation}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Interpretação Canônica
              </span>
              <span>Lente Paradigmática</span>
            </div>
          </div>
        ))}
      </div>

      {/* Classroom takeaway banner */}
      <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
        <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
          <Lightbulb className="w-4 h-4" />
          <span>Lição Fundamental para a Apresentação Oral</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Nenhum dos psicólogos dessas escolas estava necessariamente mentindo ou inventando: o comportamento humano é multifacetado. O Behaviorista examina as contingências de reforço externas; o Psicanalista investiga os conflitos reprimidos e defesas do Ego; o Funcionalista analisa o propósito adaptativo de sobrevivência; e o Gestaltista examina a organização imediata do campo perceptual. O psicólogo moderno integra essas visões.
        </p>
      </div>
    </div>
  );
};
