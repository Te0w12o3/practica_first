import React, { useState } from 'react';
import ReadingPassage from './ReadingPassage';
import { BookOpen, ListOrdered, CheckCircle2 } from 'lucide-react';

export default function Part6View({
  partData,
  answers = {},
  onSelectAnswer,
  highlights = {},
  onUpdateHighlights
}) {
  const [mobileTab, setMobileTab] = useState('both');
  const [activeGapNumber, setActiveGapNumber] = useState(37);

  // Check which sentences (A..G) are already used
  const usedSentences = Object.values(answers);

  // Pre-process passage to show placed sentence inside gap
  const customPassageParagraphs = partData.passage.map((para) => {
    // Matches (37) [______]
    return para.replace(/\((\d+)\)\s*\[_{2,}\]/g, (match, gapNum) => {
      const gNum = parseInt(gapNum, 10);
      const chosenKey = answers[gNum];
      if (chosenKey) {
        const sentenceObj = partData.gappedSentences.find(s => s.key === chosenKey);
        return ` [GAP ${gNum} => ${chosenKey}: "${sentenceObj?.text || ''}"] `;
      }
      return ` [GAP ${gNum}: ____________] `;
    });
  });

  return (
    <div className="space-y-4">
      {/* Mobile view switcher for iPad portrait */}
      <div className="lg:hidden flex items-center justify-center p-1 bg-slate-200/80 rounded-lg">
        <button
          onClick={() => setMobileTab('text')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
            mobileTab === 'text' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          Texto y Resaltador
        </button>
        <button
          onClick={() => setMobileTab('sentences')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
            mobileTab === 'sentences' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
          }`}
        >
          <ListOrdered className="w-3.5 h-3.5" />
          Oraciones A–G (Gaps 37–42)
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Reading Passage with Highlighting */}
        <div
          className={`lg:col-span-6 xl:col-span-6 lg:sticky lg:top-24 h-[650px] lg:h-[calc(100vh-140px)] ${
            mobileTab === 'sentences' ? 'hidden lg:block' : 'block'
          }`}
        >
          <ReadingPassage
            title={partData.passageTitle}
            author={partData.author}
            paragraphs={customPassageParagraphs}
            passageKey="part6"
            highlights={highlights}
            onUpdateHighlights={onUpdateHighlights}
          />
        </div>

        {/* Right Console: Gap selector and Sentence cards (A to G) */}
        <div
          className={`lg:col-span-6 xl:col-span-6 space-y-5 lg:overflow-y-auto lg:h-[calc(100vh-140px)] pr-1 ${
            mobileTab === 'text' ? 'hidden lg:block' : 'block'
          }`}
        >
          {/* Instructions banner */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700">
            <h3 className="font-semibold text-slate-900 mb-1">{partData.title}</h3>
            <p className="text-xs text-slate-600">{partData.instructions}</p>
          </div>

          {/* Active Gap Selector Tabs */}
          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
            <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              1. Selecciona el hueco a completar:
            </span>
            <div className="grid grid-cols-6 gap-2">
              {partData.questions.map((q) => {
                const isSelected = activeGapNumber === q.number;
                const assignedKey = answers[q.number];
                return (
                  <button
                    key={q.number}
                    onClick={() => setActiveGapNumber(q.number)}
                    className={`flex flex-col items-center justify-center py-2 px-1 rounded-lg border text-xs font-bold transition-all touch-manipulation ${
                      isSelected
                        ? 'bg-sky-900 text-white border-sky-900 shadow-sm ring-2 ring-sky-300'
                        : assignedKey
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{q.number}</span>
                    <span className="text-[10px] font-normal mt-0.5">
                      {assignedKey ? `[${assignedKey}]` : 'Vacío'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sentence Cards (A to G) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                2. Elige la oración para el Hueco {activeGapNumber}:
              </span>
              {answers[activeGapNumber] && (
                <button
                  onClick={() => onSelectAnswer(activeGapNumber, '')}
                  className="text-xs text-rose-600 hover:underline font-medium"
                >
                  Quitar del hueco {activeGapNumber}
                </button>
              )}
            </div>

            {partData.gappedSentences.map((sent) => {
              const assignedToGap = Object.keys(answers).find(
                (k) => answers[k] === sent.key
              );
              const isSelectedForActive = answers[activeGapNumber] === sent.key;

              return (
                <div
                  key={sent.key}
                  onClick={() => onSelectAnswer(activeGapNumber, sent.key)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer touch-manipulation ${
                    isSelectedForActive
                      ? 'bg-sky-50 border-sky-600 shadow-sm ring-2 ring-sky-400'
                      : assignedToGap
                      ? 'bg-slate-100/70 border-slate-200 opacity-70'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                        isSelectedForActive
                          ? 'bg-sky-900 text-white'
                          : assignedToGap
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {sent.key}
                    </span>

                    <div className="flex-1">
                      <p className="text-sm text-slate-800 leading-snug">{sent.text}</p>
                      {assignedToGap && (
                        <span className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          Asignada al Hueco {assignedToGap}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
