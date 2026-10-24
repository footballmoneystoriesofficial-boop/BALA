import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';
import { COMMON_ERRORS_CORRECTED } from '../data/psychologyContent';

export const CorrectionsBanner: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl overflow-hidden mb-8 transition-all">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-4 flex items-center justify-between cursor-pointer hover:bg-amber-100/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-amber-950 flex items-center gap-2">
              <span>Auditoria Conceitual & Erros Frequentes Corrigidos</span>
              <span className="text-xs font-normal text-amber-800">
                · {COMMON_ERRORS_CORRECTED.length} pontos de atenção crítica
              </span>
            </h3>
            <p className="text-xs text-amber-800/90 mt-0.5">
              Revisamos e organizamos o trabalho para eliminar confusões conceituais comuns que costumam tirar pontos em apresentações.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-amber-900 text-xs font-medium shrink-0 ml-4">
          <span>{isOpen ? 'Ocultar detalhes' : 'Ver correções'}</span>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </div>

      {isOpen && (
        <div className="px-5 pb-5 pt-2 border-t border-amber-200/60 bg-white/60 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {COMMON_ERRORS_CORRECTED.map((item, idx) => (
              <div 
                key={idx} 
                className="p-3.5 bg-white rounded-lg border border-slate-200/80 text-xs shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-slate-900">{item.topic}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{item.tag}</span>
                </div>
                
                <div className="space-y-2 mt-2">
                  <div className="flex items-start gap-1.5 text-rose-700 bg-rose-50/70 p-2 rounded">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Erro comum: </span>
                      <span>{item.mistake}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-1.5 text-emerald-800 bg-emerald-50/80 p-2 rounded">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Correção correta no trabalho: </span>
                      <span>{item.correction}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
