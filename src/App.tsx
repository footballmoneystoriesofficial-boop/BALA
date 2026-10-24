import React, { useState } from 'react';
import { Header, ActiveTab } from './components/Header';
import { FullTextView } from './components/FullTextView';
import { PresentationView } from './components/PresentationView';
import { ComparisonMatrixView } from './components/ComparisonMatrixView';
import { CaseSimulatorView } from './components/CaseSimulatorView';
import { QuizDebateView } from './components/QuizDebateView';
import { GroupPresentationPlanner } from './components/GroupPresentationPlanner';
import { BookOpen, Presentation, GitCompare, Sparkles, HelpCircle, Users, ArrowUp } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('paper');
  const [slideInitialIndex, setSlideInitialIndex] = useState<number>(0);

  const handleStartSlides = (index: number = 0) => {
    setSlideInitialIndex(index);
    setActiveTab('slides');
  };

  const handlePrint = () => {
    window.print();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navigation Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onPrint={handlePrint}
        onStartSlides={() => handleStartSlides(0)}
      />

      {/* Main View Area */}
      <div className="flex-1">
        {activeTab === 'paper' && (
          <FullTextView
            onGoToSlides={handleStartSlides}
            onGoToSimulator={() => setActiveTab('cases')}
          />
        )}

        {activeTab === 'slides' && (
          <PresentationView
            initialSlide={slideInitialIndex}
            onExit={() => setActiveTab('paper')}
          />
        )}

        {activeTab === 'comparison' && (
          <ComparisonMatrixView />
        )}

        {activeTab === 'cases' && (
          <CaseSimulatorView />
        )}

        {activeTab === 'quiz' && (
          <QuizDebateView />
        )}

        {activeTab === 'group' && (
          <GroupPresentationPlanner />
        )}
      </div>

      {/* Floating Scroll to Top button (only on document reading view) */}
      {activeTab === 'paper' && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 transition-all cursor-pointer no-print z-30"
          title="Voltar ao início"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 no-print mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-slate-900 text-sm">
              PsicoHistória
            </span>
            <span aria-hidden="true">·</span>
            <span>Trabalho Acadêmico de Psicologia: História, Fundamentos e Escolas</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <button onClick={() => setActiveTab('paper')} className="hover:text-slate-900 cursor-pointer">
              Trabalho
            </button>
            <button onClick={() => setActiveTab('slides')} className="hover:text-slate-900 cursor-pointer">
              Slides
            </button>
            <button onClick={() => setActiveTab('comparison')} className="hover:text-slate-900 cursor-pointer">
              Matriz
            </button>
            <button onClick={() => setActiveTab('cases')} className="hover:text-slate-900 cursor-pointer">
              Casos
            </button>
            <button onClick={() => setActiveTab('quiz')} className="hover:text-slate-900 cursor-pointer">
              Quiz
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
