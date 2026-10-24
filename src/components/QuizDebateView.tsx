import React, { useState } from 'react';
import { QUIZ_QUESTIONS, DEBATING_QUESTIONS } from '../data/psychologyContent';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, MessageSquare, ChevronDown, ChevronUp, Award } from 'lucide-react';

export const QuizDebateView: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'quiz' | 'debate'>('quiz');
  
  // Quiz State
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  // Debate State
  const [expandedDebateId, setExpandedDebateId] = useState<number | null>(1);

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (showResults) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  const score = calculateScore();
  const totalQuestions = QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(userAnswers).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>Dinâmica & Validação Acadêmica</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
          Debate em Sala & Quiz de Fixação
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Prepare-se para perguntas difíceis da banca ou faça uma dinâmica interativa com os colegas de turma ao final da apresentação.
        </p>
      </div>

      {/* Subtab Segmented Control */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl max-w-md">
        <button
          onClick={() => setActiveSubTab('quiz')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'quiz'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Award className="w-4 h-4 text-amber-600" />
          <span>Quiz de Fixação ({totalQuestions} questões)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('debate')}
          className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 ${
            activeSubTab === 'debate'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <MessageSquare className="w-4 h-4 text-amber-600" />
          <span>Roteiro de Debate ({DEBATING_QUESTIONS.length} temas)</span>
        </button>
      </div>

      {/* QUIZ TAB CONTENT */}
      {activeSubTab === 'quiz' && (
        <div className="space-y-6">
          {/* Quiz Top Action Banner */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-wrap items-center justify-between gap-4 shadow-xs">
            <div>
              <div className="text-xs text-slate-500 font-medium">Progresso do Teste:</div>
              <div className="text-sm font-semibold text-slate-900 mt-0.5">
                {answeredCount} de {totalQuestions} respondidas
              </div>
            </div>

            <div className="flex items-center gap-3">
              {showResults ? (
                <div className="flex items-center gap-3">
                  <div className="text-sm font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                    Resultado: {score}/{totalQuestions} acertos ({Math.round((score / totalQuestions) * 100)}%)
                  </div>
                  <button
                    onClick={resetQuiz}
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Refazer Quiz</span>
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowResults(true)}
                  disabled={answeredCount === 0}
                  className="px-4 py-2 bg-amber-700 hover:bg-amber-800 disabled:opacity-40 text-white rounded-lg text-xs font-medium transition-colors cursor-pointer disabled:cursor-not-allowed shadow-xs"
                >
                  Conferir Respostas & Explicações
                </button>
              )}
            </div>
          </div>

          {/* List of Quiz Questions */}
          <div className="space-y-4">
            {QUIZ_QUESTIONS.map((q, idx) => {
              const selectedOpt = userAnswers[q.id];
              const isAnswered = selectedOpt !== undefined;
              const isCorrect = selectedOpt === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                        Questão {idx + 1} · {q.schoolTag}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {q.question}
                      </h3>
                    </div>

                    {showResults && (
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shrink-0 ${
                          isCorrect
                            ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                            : 'bg-rose-50 text-rose-800 border border-rose-200'
                        }`}
                      >
                        {isCorrect ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Correto</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-3.5 h-3.5 text-rose-600" />
                            <span>Incorreto</span>
                          </>
                        )}
                      </span>
                    )}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = selectedOpt === optIdx;
                      let optionClasses = 'p-3 rounded-xl border text-xs text-left transition-all cursor-pointer flex items-start gap-2.5 ';

                      if (showResults) {
                        if (optIdx === q.correctIndex) {
                          optionClasses += 'bg-emerald-50/90 border-emerald-300 text-emerald-950 font-semibold ring-1 ring-emerald-300';
                        } else if (isSelected) {
                          optionClasses += 'bg-rose-50 border-rose-300 text-rose-950 line-through';
                        } else {
                          optionClasses += 'bg-slate-50 border-slate-200 text-slate-500 opacity-60';
                        }
                      } else {
                        if (isSelected) {
                          optionClasses += 'bg-amber-50/90 border-amber-300 text-amber-950 font-semibold ring-1 ring-amber-300';
                        } else {
                          optionClasses += 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={showResults}
                          onClick={() => handleSelectOption(q.id, optIdx)}
                          className={optionClasses}
                        >
                          <span className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[11px] font-semibold shrink-0 text-slate-600">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="leading-relaxed mt-0.5">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Detailed Explanation upon checking results */}
                  {showResults && (
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                      <span className="font-semibold text-slate-900 block">
                        Comentário Acadêmico:
                      </span>
                      <p className="leading-relaxed">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* DEBATE TAB CONTENT */}
      {activeSubTab === 'debate' && (
        <div className="space-y-4">
          <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 text-xs text-amber-950">
            <strong>Dica para os Apresentadores:</strong> Lance uma ou duas dessas questões para a plateia ou use-as caso o professor pergunte "Como vocês relacionam essa teoria com os problemas de hoje?".
          </div>

          <div className="space-y-3">
            {DEBATING_QUESTIONS.map((item) => {
              const isExpanded = expandedDebateId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs"
                >
                  <div
                    onClick={() => setExpandedDebateId(isExpanded ? null : item.id)}
                    className="p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="space-y-1 pr-4">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-700">
                        Tema de Debate {item.id}
                      </span>
                      <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                        {item.question}
                      </h3>
                      <p className="text-xs text-slate-500">
                        Contexto histórico: {item.context}
                      </p>
                    </div>

                    <div className="text-slate-400 shrink-0">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4 text-xs">
                      <div>
                        <span className="font-semibold text-slate-900 block mb-2">
                          Pontos para Conduzir a Discussão na Sala:
                        </span>
                        <ul className="space-y-1.5 pl-4 list-disc text-slate-600 leading-relaxed">
                          {item.guidingPoints.map((pt, i) => (
                            <li key={i}>{pt}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-slate-800 space-y-1">
                        <span className="font-semibold text-amber-900 block">
                          Resposta de Referência Recomendada:
                        </span>
                        <p className="leading-relaxed text-slate-700">
                          {item.suggestedAnswerGuide}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
