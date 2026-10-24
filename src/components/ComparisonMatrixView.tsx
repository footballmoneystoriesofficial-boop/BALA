import React, { useState } from 'react';
import { COMPARISON_MATRIX, SchoolComparison } from '../data/psychologyContent';
import { GitCompare, Filter, CheckCircle, HelpCircle, AlertCircle, Sparkles } from 'lucide-react';

export const ComparisonMatrixView: React.FC = () => {
  const [selectedSchool, setSelectedSchool] = useState<string>('all');
  const [activeCriterion, setActiveCriterion] = useState<string>('all');

  const filteredSchools = selectedSchool === 'all'
    ? COMPARISON_MATRIX
    : COMPARISON_MATRIX.filter(s => s.name.toLowerCase() === selectedSchool.toLowerCase());

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 uppercase tracking-wider">
          <GitCompare className="w-4 h-4" />
          <span>Análise Comparativa Sistemática</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
          Matriz das 5 Grandes Escolas Psicológicas
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Compare as divergências fundamentais de cada escola quanto ao seu objeto de estudo, método experimental, pergunta norteadora e críticas históricas.
        </p>
      </div>

      {/* Interactive Controls & Filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl border border-slate-200/90 shadow-xs">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500 font-medium mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtrar Escola:</span>
          </span>
          {['all', 'Estruturalismo', 'Funcionalismo', 'Psicanálise', 'Behaviorismo', 'Gestalt'].map((school) => (
            <button
              key={school}
              onClick={() => setSelectedSchool(school)}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                selectedSchool === school
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {school === 'all' ? 'Todas as Escolas (Visão Geral)' : school}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of School Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSchools.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col justify-between space-y-6 hover:border-slate-300 transition-colors"
          >
            <div className="space-y-4">
              {/* Header of Card */}
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    {item.name}
                  </h3>
                  <span className="text-[11px] font-mono-code text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {item.historicalPeriod}
                  </span>
                </div>
                <div className="text-xs text-amber-800 font-medium mt-1">
                  {item.representative}
                </div>
              </div>

              {/* Core Question & Focus */}
              <div className="space-y-3 text-xs leading-relaxed">
                <div>
                  <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                    Pergunta Norteadora
                  </span>
                  <div className="p-3 bg-amber-50/70 rounded-lg text-amber-950 font-medium border border-amber-200/50">
                    "{item.coreQuestion}"
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-0.5">
                    Foco / Objeto de Estudo
                  </span>
                  <p className="text-slate-700">{item.focus}</p>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-0.5">
                    Método Principal
                  </span>
                  <p className="text-slate-700">{item.primaryMethod}</p>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-0.5">
                    Exemplo Prático do Cotidiano
                  </span>
                  <p className="text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    {item.practicalExample}
                  </p>
                </div>
              </div>
            </div>

            {/* Strengths & Criticisms footer */}
            <div className="pt-4 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex items-start gap-1.5 text-emerald-800">
                <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" />
                <p><strong>Legado:</strong> {item.strengths}</p>
              </div>

              <div className="flex items-start gap-1.5 text-rose-800">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-rose-600" />
                <p><strong>Críticas:</strong> {item.criticisms}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comprehensive Full Table for Printing / Export */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
        <h3 className="font-display text-xl font-bold text-slate-900">
          Quadro Sinóptico Completo
        </h3>
        <p className="text-xs text-slate-500">
          Estrutura condensada para revisão rápida e impressão acadêmica:
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-left text-xs">
            <thead className="bg-slate-100 text-slate-900 font-semibold">
              <tr>
                <th className="px-3 py-3">Escola</th>
                <th className="px-3 py-3">Pergunta Central</th>
                <th className="px-3 py-3">Objeto Primário</th>
                <th className="px-3 py-3">Método Predominante</th>
                <th className="px-3 py-3">Exemplo Típico</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {COMPARISON_MATRIX.map((item) => (
                <tr key={item.name} className="hover:bg-slate-50/70">
                  <td className="px-3 py-3 font-semibold text-slate-900 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="px-3 py-3 text-amber-900 font-medium">
                    {item.coreQuestion}
                  </td>
                  <td className="px-3 py-3 text-slate-700">
                    {item.focus}
                  </td>
                  <td className="px-3 py-3 text-slate-600">
                    {item.primaryMethod}
                  </td>
                  <td className="px-3 py-3 text-slate-500 text-[11px]">
                    {item.practicalExample}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
