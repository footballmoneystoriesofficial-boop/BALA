import React, { useState, useEffect } from 'react';
import { GROUP_ROLES_TEMPLATE } from '../data/psychologyContent';
import { Users, Clock, CheckSquare, Lightbulb, Play, Pause, RotateCcw, Edit2, ShieldAlert } from 'lucide-react';

export const GroupPresentationPlanner: React.FC = () => {
  // Customizable member names
  const [memberNames, setMemberNames] = useState<string[]>([
    'Integrante 1',
    'Integrante 2',
    'Integrante 3',
    'Integrante 4',
    'Integrante 5'
  ]);
  const [editingIdx, setEditingIdx] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState('');

  // Rehearsal timer
  const [activeSpeakerIdx, setActiveSpeakerIdx] = useState<number>(0);
  const [speakerSeconds, setSpeakerSeconds] = useState<number>(0);
  const [isRehearsalRunning, setIsRehearsalRunning] = useState<boolean>(false);

  // Group checklist
  const [checklist, setChecklist] = useState<{ id: number; text: string; done: boolean }[]>([
    { id: 1, text: 'Definir o nome de cada integrante para cada bloco temático', done: true },
    { id: 2, text: 'Ensaio cronometrado de no máximo 4 a 5 minutos por pessoa', done: false },
    { id: 3, text: 'Revisar a distinção entre Reforço Negativo e Punição (evita erro na frente do professor)', done: true },
    { id: 4, text: 'Conferir se os slides e imagens abrem corretamente no projetor da sala', done: false },
    { id: 5, text: 'Escolher 1 ou 2 perguntas de debate para abrir para os colegas ao final', done: false },
    { id: 6, text: 'Imprimir ou salvar cópia do resumo acadêmico em PDF', done: false }
  ]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRehearsalRunning) {
      timer = setInterval(() => {
        setSpeakerSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRehearsalRunning]);

  const toggleChecklistItem = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const handleStartEdit = (idx: number) => {
    setEditingIdx(idx);
    setEditingValue(memberNames[idx]);
  };

  const handleSaveEdit = (idx: number) => {
    if (editingValue.trim()) {
      setMemberNames((prev) => {
        const next = [...prev];
        next[idx] = editingValue.trim();
        return next;
      });
    }
    setEditingIdx(null);
  };

  const formatSecs = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
          <Users className="w-4 h-4" />
          <span>Gestão & Ensaio da Equipe</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
          Roteiro de Apresentação e Divisão de Papéis
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Organize quem fala cada parte, personalize os nomes dos colegas do grupo, controle o cronômetro de ensaio e garanta que todos apresentem de forma equilibrada e sem atropelos.
        </p>
      </div>

      {/* Live Rehearsal Stopwatch Card */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Ensaio Cronometrado da Equipe
            </span>
            <div className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
              Falando agora: <span className="text-amber-300">{memberNames[activeSpeakerIdx]}</span>
            </div>
            <p className="text-xs text-slate-400">
              {GROUP_ROLES_TEMPLATE[activeSpeakerIdx]?.role} · Meta sugerida: {GROUP_ROLES_TEMPLATE[activeSpeakerIdx]?.time}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-3xl sm:text-4xl font-mono-code font-bold text-white">
              {formatSecs(speakerSeconds)}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsRehearsalRunning(!isRehearsalRunning)}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {isRehearsalRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isRehearsalRunning ? 'Pausar' : 'Iniciar'}</span>
              </button>

              <button
                onClick={() => {
                  setIsRehearsalRunning(false);
                  setSpeakerSeconds(0);
                }}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl transition-colors cursor-pointer"
                title="Zerar cronômetro"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Speaker Selector */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-400 mr-2">Trocar de orador:</span>
          {memberNames.map((name, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveSpeakerIdx(i);
                setSpeakerSeconds(0);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                activeSpeakerIdx === i
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Group Division Cards */}
      <div className="space-y-4">
        <h2 className="font-display text-2xl font-bold text-slate-900">
          Divisão Temática por Integrante
        </h2>
        <p className="text-xs text-slate-500">
          Clique no ícone de lápis para colocar o nome real dos membros do seu grupo:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GROUP_ROLES_TEMPLATE.map((role, idx) => {
            const isEditing = editingIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-3">
                  {/* Name and Edit row */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    {isEditing ? (
                      <div className="flex items-center gap-2 w-full">
                        <input
                          type="text"
                          value={editingValue}
                          onChange={(e) => setEditingValue(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSaveEdit(idx)}
                          className="px-2 py-1 text-xs border border-amber-400 rounded bg-amber-50/50 w-full font-semibold"
                          autoFocus
                        />
                        <button
                          onClick={() => handleSaveEdit(idx)}
                          className="px-2 py-1 bg-amber-700 text-white rounded text-xs cursor-pointer"
                        >
                          Salvar
                        </button>
                      </div>
                    ) : (
                      <>
                        <div>
                          <div className="font-display text-lg font-bold text-slate-900">
                            {memberNames[idx]}
                          </div>
                          <div className="text-xs text-amber-800 font-medium">
                            {role.role}
                          </div>
                        </div>
                        <button
                          onClick={() => handleStartEdit(idx)}
                          className="p-1.5 text-slate-400 hover:text-slate-800 cursor-pointer"
                          title="Editar nome do integrante"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Estimated time */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>Tempo sugerido: <strong>{role.time}</strong></span>
                  </div>

                  {/* Bullet points to cover */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Tópicos a Abordar:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {role.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-amber-600 font-bold">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Practical speaking tip */}
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
                  <span className="font-semibold text-slate-800 block text-[11px]">
                    Dica de Apresentação:
                  </span>
                  <p className="leading-relaxed">{role.tips}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Preparation Checklist */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex items-center gap-2 font-display text-xl font-bold text-slate-900">
          <CheckSquare className="w-5 h-5 text-amber-700" />
          <span>Checklist da Apresentação</span>
        </div>
        <p className="text-xs text-slate-500">
          Marque os itens à medida que o grupo ensaiar e finalizar a preparação:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {checklist.map((item) => (
            <div
              key={item.id}
              onClick={() => toggleChecklistItem(item.id)}
              className={`p-3.5 rounded-xl border flex items-start gap-3 cursor-pointer transition-colors text-xs ${
                item.done
                  ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => {}}
                className="mt-0.5 rounded text-amber-700 focus:ring-amber-500 cursor-pointer"
              />
              <span className={`leading-relaxed ${item.done ? 'line-through opacity-75' : 'font-medium'}`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
