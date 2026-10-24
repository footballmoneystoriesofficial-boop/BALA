import React from 'react';
import { Presentation, BookOpen, GitCompare, Sparkles, HelpCircle, Users, Printer } from 'lucide-react';

export type ActiveTab = 'paper' | 'slides' | 'comparison' | 'cases' | 'quiz' | 'group';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onPrint: () => void;
  onStartSlides: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onPrint,
  onStartSlides
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200 no-print transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand title, one line wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('paper')}
              className="text-left group cursor-pointer focus-visible:outline-none"
            >
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-amber-700 transition-colors whitespace-nowrap">
                PsicoHistória
              </span>
            </button>
          </div>

          {/* Zone 2: Navigation tabs with single-line labels */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => setActiveTab('paper')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'paper'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Trabalho Completo</span>
            </button>

            <button
              onClick={() => setActiveTab('slides')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'slides'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Presentation className="w-4 h-4" />
              <span>Modo Slides</span>
            </button>

            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'comparison'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <GitCompare className="w-4 h-4" />
              <span>Matriz Comparativa</span>
            </button>

            <button
              onClick={() => setActiveTab('cases')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'cases'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Simulador de Casos</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'quiz'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Debate & Quiz</span>
            </button>

            <button
              onClick={() => setActiveTab('group')}
              className={`px-3 py-2 text-xs xl:text-sm font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'group'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Roteiro do Grupo</span>
            </button>
          </nav>

          {/* Zone 3: Primary action button + print quick action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onPrint}
              title="Imprimir ou Salvar em PDF"
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onStartSlides}
              className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm cursor-pointer"
            >
              <Presentation className="w-4 h-4" />
              <span>Apresentar Slides</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary tab bar */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-100 scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('paper')}
            className={`px-2.5 py-1.5 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'paper' ? 'bg-slate-900 text-white' : 'text-slate-600'
            }`}
          >
            Trabalho
          </button>
          <button
            onClick={() => setActiveTab('slides')}
            className={`px-2.5 py-1.5 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'slides' ? 'bg-slate-900 text-white' : 'text-slate-600'
            }`}
          >
            Slides
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-2.5 py-1.5 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'comparison' ? 'bg-slate-900 text-white' : 'text-slate-600'
            }`}
          >
            Comparação
          </button>
          <button
            onClick={() => setActiveTab('cases')}
            className={`px-2.5 py-1.5 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'cases' ? 'bg-slate-900 text-white' : 'text-slate-600'
            }`}
          >
            Casos
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-2.5 py-1.5 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'quiz' ? 'bg-slate-900 text-white' : 'text-slate-600'
            }`}
          >
            Debate & Quiz
          </button>
          <button
            onClick={() => setActiveTab('group')}
            className={`px-2.5 py-1.5 font-medium rounded-md whitespace-nowrap ${
              activeTab === 'group' ? 'bg-slate-900 text-white' : 'text-slate-600'
            }`}
          >
            Grupo
          </button>
        </div>
      </div>
    </header>
  );
};
