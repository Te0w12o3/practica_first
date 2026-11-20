import React, { useState } from 'react';
import { Award, CheckCircle, XCircle, AlertTriangle, ArrowRight, RotateCcw, Filter, BookOpen } from 'lucide-react';

export default function ResultsModal({
  scoreReport,
  exam,
  onClose,
  onRestartExam
}) {
  const [filterMode, setFilterMode] = useState('all'); // 'all', 'errors', 'correct'
  const [filterPart, setFilterPart] = useState('all'); // 'all', '1'..'7'

  const {
    readingRaw,
    readingMax,
    readingScale,
    useOfEnglishRaw,
    useOfEnglishMax,
    useOfEnglishScale,
    overallScale,
    cefrLevel,
    grade,
    pass,
    partResults,
    totalRawScore,
    totalMaxScore
  } = scoreReport;

  // Flatten all questions for detailed review
  const allReviewItems = [];

  const addItemsFromPart = (partNum, partData, details) => {
    partData.questions.forEach((q) => {
      const d = details[q.number] || {};
      allReviewItems.push({
        partNum,
        partTitle: partData.title,
        number: q.number,
        prompt: q.question || q.statement || q.firstSentence || `Hueco (${q.number})`,
        baseWord: q.baseWord || null,
        keyWord: q.keyWord || null,
        userAnswer: d.userAnswer || '(En blanco)',
        correctAnswer: d.correctAnswer || '',
        acceptedAlternatives: d.acceptedAlternatives || [],
        isCorrect: !!d.isCorrect,
        isPartial: !!d.isPartial,
        score: d.score !== undefined ? d.score : (d.isCorrect ? (partNum === 5 || partNum === 6 ? 2 : 1) : 0),
        maxScore: d.maxScore || (partNum === 4 || partNum === 5 || partNum === 6 ? 2 : 1),
        explanation: d.explanation || q.explanation || ''
      });
    });
  };

  if (partResults.part1) addItemsFromPart(1, exam.part1, partResults.part1.details);
  if (partResults.part2) addItemsFromPart(2, exam.part2, partResults.part2.details);
  if (partResults.part3) addItemsFromPart(3, exam.part3, partResults.part3.details);
  if (partResults.part4) addItemsFromPart(4, exam.part4, partResults.part4.details);
  if (partResults.part5) addItemsFromPart(5, exam.part5, partResults.part5.details);
  if (partResults.part6) addItemsFromPart(6, exam.part6, partResults.part6.details);
  if (partResults.part7) addItemsFromPart(7, exam.part7, partResults.part7.details);

  const filteredItems = allReviewItems.filter(item => {
    if (filterPart !== 'all' && String(item.partNum) !== filterPart) return false;
    if (filterMode === 'errors' && item.isCorrect) return false;
    if (filterMode === 'correct' && !item.isCorrect) return false;
    return true;
  });

  const totalErrors = allReviewItems.filter(i => !i.isCorrect && !i.isPartial).length;
  const totalCorrect = allReviewItems.filter(i => i.isCorrect).length;
  const totalPartial = allReviewItems.filter(i => i.isPartial).length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header: Cambridge Scale Score Banner */}
        <div className="p-6 bg-gradient-to-r from-[#0A4D68] to-[#088395] text-white flex-shrink-0">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 text-white uppercase tracking-wider">
                  Cambridge English Scale
                </span>
                <span className="text-xs text-sky-100">{exam.title}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight font-display">
                Informe de Resultados Oficial
              </h2>
            </div>

            {/* Score Capsule */}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur px-5 py-3 rounded-xl border border-white/20">
              <div className="text-center">
                <span className="block text-[11px] font-semibold text-sky-200 uppercase tracking-wider">
                  Puntaje Global
                </span>
                <span className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  {overallScale}
                </span>
                <span className="text-xs text-sky-200"> / 190</span>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="text-left">
                <span className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded-md ${
                  pass ? 'bg-emerald-400 text-slate-950' : 'bg-amber-400 text-slate-950'
                }`}>
                  {cefrLevel}
                </span>
                <span className="block text-xs font-medium text-white mt-1">
                  {grade}
                </span>
              </div>
            </div>
          </div>

          {/* Sub-scores grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-white/15 text-xs">
            <div className="bg-white/10 p-2.5 rounded-lg">
              <span className="block text-sky-200 text-[11px]">Reading Scale:</span>
              <span className="text-base font-bold text-white">{readingScale} / 190</span>
              <span className="block text-[11px] text-sky-200/80">({readingRaw} / {readingMax} aciertos)</span>
            </div>
            <div className="bg-white/10 p-2.5 rounded-lg">
              <span className="block text-sky-200 text-[11px]">Use of English Scale:</span>
              <span className="text-base font-bold text-white">{useOfEnglishScale} / 190</span>
              <span className="block text-[11px] text-sky-200/80">({useOfEnglishRaw} / {useOfEnglishMax} aciertos)</span>
            </div>
            <div className="bg-white/10 p-2.5 rounded-lg">
              <span className="block text-sky-200 text-[11px]">Aciertos Totales:</span>
              <span className="text-base font-bold text-emerald-300">{totalCorrect} correctas</span>
              <span className="block text-[11px] text-sky-200/80">{totalErrors} errores</span>
            </div>
            <div className="bg-white/10 p-2.5 rounded-lg">
              <span className="block text-sky-200 text-[11px]">Puntaje Raw Total:</span>
              <span className="text-base font-bold text-white">{totalRawScore} / {totalMaxScore}</span>
              <span className="block text-[11px] text-sky-200/80">({Math.round((totalRawScore/totalMaxScore)*100)}%)</span>
            </div>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="p-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-semibold text-slate-700">Filtrar:</span>
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                filterMode === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              Todas (52)
            </button>
            <button
              onClick={() => setFilterMode('errors')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                filterMode === 'errors' ? 'bg-rose-600 text-white' : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
              }`}
            >
              Solo Errores ({totalErrors})
            </button>
            <button
              onClick={() => setFilterMode('correct')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                filterMode === 'correct' ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200'
              }`}
            >
              Solo Aciertos ({totalCorrect})
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Por Parte:</span>
            <select
              value={filterPart}
              onChange={(e) => setFilterPart(e.target.value)}
              className="bg-white border border-slate-300 rounded px-2 py-1 text-slate-700 font-medium"
            >
              <option value="all">Todas las partes (1 a 7)</option>
              <option value="1">Parte 1 (Multiple Choice Cloze)</option>
              <option value="2">Parte 2 (Open Cloze)</option>
              <option value="3">Parte 3 (Word Formation)</option>
              <option value="4">Parte 4 (Key Word Transformations)</option>
              <option value="5">Parte 5 (Reading Comprehension)</option>
              <option value="6">Parte 6 (Gapped Text)</option>
              <option value="7">Parte 7 (Multiple Matching)</option>
            </select>
          </div>
        </div>

        {/* Detailed Question Review List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              No hay preguntas en este filtro.
            </div>
          ) : (
            filteredItems.map((item) => {
              return (
                <div
                  key={item.number}
                  className={`p-4 rounded-xl border transition-all ${
                    item.isCorrect
                      ? 'bg-emerald-50/40 border-emerald-200'
                      : item.isPartial
                      ? 'bg-amber-50/50 border-amber-300'
                      : 'bg-rose-50/50 border-rose-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                        item.isCorrect
                          ? 'bg-emerald-600 text-white'
                          : item.isPartial
                          ? 'bg-amber-500 text-white'
                          : 'bg-rose-600 text-white'
                      }`}>
                        {item.number}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {item.partTitle}
                      </span>
                    </div>

                    <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                      item.isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : item.isPartial
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {item.score} / {item.maxScore} pt{item.maxScore > 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Question Prompt or context */}
                  <div className="text-sm font-semibold text-slate-800 mb-3">
                    {item.prompt}
                    {item.baseWord && (
                      <span className="ml-2 font-mono text-xs px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded">
                        [{item.baseWord}]
                      </span>
                    )}
                    {item.keyWord && (
                      <span className="ml-2 font-mono text-xs px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-black">
                        KEY: {item.keyWord}
                      </span>
                    )}
                  </div>

                  {/* Answers Comparison Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    {/* User Answer */}
                    <div className={`p-2.5 rounded-lg border ${
                      item.isCorrect
                        ? 'bg-white border-emerald-300 text-emerald-950'
                        : item.isPartial
                        ? 'bg-white border-amber-300 text-amber-950'
                        : 'bg-rose-100/70 border-rose-300 text-rose-950 font-bold'
                    }`}>
                      <span className="block text-[11px] font-semibold text-slate-500 mb-0.5">
                        Tu respuesta:
                      </span>
                      <div className="flex items-center gap-1.5 font-mono text-sm">
                        {item.isCorrect ? (
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        ) : item.isPartial ? (
                          <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                        )}
                        <span className={!item.isCorrect && !item.isPartial ? 'line-through text-rose-700' : ''}>
                          {item.userAnswer}
                        </span>
                      </div>
                    </div>

                    {/* Official Correct Answer */}
                    <div className="p-2.5 rounded-lg border bg-emerald-50 border-emerald-300 text-emerald-950 font-bold">
                      <span className="block text-[11px] font-semibold text-emerald-800 mb-0.5">
                        Respuesta Oficial Correcta:
                      </span>
                      <div className="font-mono text-sm text-emerald-900">
                        {item.correctAnswer}
                        {item.acceptedAlternatives.length > 0 && (
                          <span className="text-[11px] text-emerald-700 block font-normal mt-0.5">
                            (También se acepta: {item.acceptedAlternatives.join(', ')})
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Official Explanation / Clue */}
                  {item.explanation && (
                    <div className="mt-2.5 p-2 bg-white/80 rounded border border-slate-200 text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-800">Pista / Justificación Oficial:</strong> {item.explanation}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <button
            onClick={onRestartExam}
            className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reiniciar este Examen
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs sm:text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-all"
          >
            Volver a la Pantalla de Examen
          </button>
        </div>

      </div>
    </div>
  );
}
