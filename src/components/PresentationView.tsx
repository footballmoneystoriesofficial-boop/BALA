import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize, 
  Minimize, 
  FileText, 
  User, 
  Clock, 
  Lightbulb, 
  X,
  Play,
  RotateCcw
} from 'lucide-react';
import { PRESENTATION_SLIDES } from '../data/psychologyContent';

interface PresentationViewProps {
  initialSlide?: number;
  onExit: () => void;
}

export const PresentationView: React.FC<PresentationViewProps> = ({
  initialSlide = 0,
  onExit
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(initialSlide);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const totalSlides = PRESENTATION_SLIDES.length;
  const slide = PRESENTATION_SLIDES[currentSlideIndex];

  // Timer counter
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowSpeakerNotes((prev) => !prev);
      } else if (e.key === 'Escape') {
        if (!document.fullscreenElement) {
          onExit();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, onExit]);

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col select-none overflow-hidden font-sans">
      {/* Top Slide Control Bar */}
      <div className="h-14 px-6 border-b border-slate-800/80 bg-slate-900/90 flex items-center justify-between text-xs shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={onExit}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer py-1 px-2 rounded-md hover:bg-slate-800"
            title="Voltar ao texto (Esc)"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">Sair do Modo Slides</span>
          </button>

          <span className="text-slate-600 hidden sm:inline">|</span>

          <div className="flex items-center gap-2 text-slate-300">
            <span className="font-semibold text-white">Slide {currentSlideIndex + 1}</span>
            <span className="text-slate-500">de {totalSlides}</span>
          </div>
        </div>

        {/* Center Presentation Timer */}
        <div className="flex items-center gap-2 bg-slate-800/80 px-3 py-1 rounded-full text-slate-300 font-mono-code text-[11px]">
          <Clock className="w-3.5 h-3.5 text-amber-400" />
          <span>{formatTimer(timerSeconds)}</span>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className="hover:text-white text-slate-400 transition-colors cursor-pointer ml-1"
            title={isTimerRunning ? 'Pausar Cronômetro' : 'Iniciar Cronômetro'}
          >
            <Play className={`w-3 h-3 ${isTimerRunning ? 'text-amber-400 fill-amber-400' : ''}`} />
          </button>
          <button
            onClick={() => {
              setIsTimerRunning(false);
              setTimerSeconds(0);
            }}
            className="hover:text-white text-slate-400 transition-colors cursor-pointer"
            title="Zerar Cronômetro"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer font-medium ${
              showSpeakerNotes
                ? 'bg-amber-600 text-white'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
            title="Atalho: tecla N"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Notas do Orador</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            title="Tela Cheia (F)"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Slide Stage Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Slide Canvas */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-8 overflow-y-auto max-w-6xl mx-auto w-full">
          <div className="space-y-6">
            {/* Meta indicator */}
            <div className="flex items-center gap-3 text-xs font-semibold text-amber-400 tracking-wider uppercase">
              <span>{slide.speaker}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Tempo estimado: {slide.duration}</span>
            </div>

            {/* Slide Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300">
                {slide.subtitle}
              </p>
            </div>

            {/* Split Content: Bullets + Image/Highlight Box */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
              <div className={slide.image ? 'lg:col-span-7 space-y-4' : 'lg:col-span-12 space-y-4'}>
                <ul className="space-y-3.5 text-sm sm:text-base text-slate-200">
                  {slide.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {slide.highlightBox && (
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs sm:text-sm space-y-1.5 mt-4">
                    <div className="flex items-center gap-1.5 font-semibold text-amber-300">
                      <Lightbulb className="w-4 h-4" />
                      <span>{slide.highlightBox.title}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {slide.highlightBox.content}
                    </p>
                  </div>
                )}
              </div>

              {slide.image && (
                <div className="lg:col-span-5">
                  <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-xl max-h-[340px]">
                    <img
                      src={slide.image}
                      alt={slide.imageAlt || 'Slide visual'}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover max-h-[340px]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Speaker Notes Sidebar / Drawer */}
        {showSpeakerNotes && (
          <aside className="w-80 sm:w-96 bg-slate-900 border-l border-slate-800 p-6 flex flex-col justify-between overflow-y-auto text-xs shrink-0 shadow-2xl animate-in slide-in-from-right-4 duration-150">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <User className="w-4 h-4" />
                  <span>Roteiro do Orador ({slide.speaker})</span>
                </div>
                <button
                  onClick={() => setShowSpeakerNotes(false)}
                  className="text-slate-500 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                <span className="text-slate-400 font-medium">Tempo Recomendado:</span>
                <div className="text-slate-200 font-semibold">{slide.duration}</div>
              </div>

              <div className="space-y-2">
                <span className="text-slate-400 font-medium">O Que Dizer na Apresentação:</span>
                <p className="text-slate-300 leading-relaxed bg-slate-950/70 p-3.5 rounded-lg border border-slate-800">
                  {slide.speakerNotes}
                </p>
              </div>

              <div className="p-3 rounded-lg bg-amber-950/40 border border-amber-800/40 text-amber-200 space-y-1">
                <span className="font-semibold block">Dica de Postura:</span>
                <p className="text-[11px] text-amber-200/90 leading-relaxed">
                  Olhe para a turma, evite ler os slides palavra por palavra e use as mãos para ilustrar conceitos.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-slate-500 text-[11px]">
              Dica: Use as setas do teclado (← e →) para passar os slides rapidamente.
            </div>
          </aside>
        )}
      </div>

      {/* Bottom Navigation & Progress Bar */}
      <div className="h-16 px-6 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between shrink-0">
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:hover:bg-slate-800 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Slide Anterior</span>
        </button>

        {/* Dots Selector */}
        <div className="hidden sm:flex items-center gap-1.5">
          {PRESENTATION_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentSlideIndex
                  ? 'w-6 bg-amber-500'
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Ir para o slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === totalSlides - 1}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-40 disabled:hover:bg-amber-600 text-white rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
        >
          <span>Próximo Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
