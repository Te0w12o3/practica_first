import React from 'react';

export default function Part1View({
  partData,
  answers = {},
  onSelectAnswer
}) {
  return (
    <div className="space-y-6">
      {/* Instructions card */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700">
        <h3 className="font-semibold text-slate-900 mb-1">{partData.title}</h3>
        <p>{partData.instructions}</p>
      </div>

      {/* Passage Card */}
      <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
        <h4 className="text-lg font-bold text-slate-900 mb-4">{partData.passageTitle}</h4>
        <div className="space-y-4 text-base leading-relaxed text-slate-800">
          {partData.passage.map((paragraph, pIdx) => {
            // Replace gaps (1), (2), etc. with interactive pills showing current chosen answer
            const gapRegex = /\((\d+)\)\s*_{2,}/g;
            const elements = [];
            let lastIndex = 0;
            let match;

            while ((match = gapRegex.exec(paragraph)) !== null) {
              const qNum = parseInt(match[1], 10);
              const precedingText = paragraph.substring(lastIndex, match.index);
              elements.push(<span key={`text-${pIdx}-${lastIndex}`}>{precedingText}</span>);

              const selectedOption = answers[qNum];
              const questionObj = partData.questions.find(q => q.number === qNum);
              const selectedText = questionObj?.options.find(o => o.key === selectedOption)?.text;

              elements.push(
                <span
                  key={`gap-${qNum}`}
                  className={`inline-flex items-center px-2 py-0.5 mx-1 font-semibold rounded-md border text-sm transition-all ${
                    selectedText
                      ? 'bg-sky-50 text-sky-800 border-sky-300 shadow-sm'
                      : 'bg-amber-50 text-amber-800 border-amber-300 border-dashed'
                  }`}
                >
                  <span className="text-[11px] font-mono mr-1 text-slate-500">({qNum})</span>
                  {selectedText || '______'}
                </span>
              );

              lastIndex = gapRegex.lastIndex;
            }

            elements.push(<span key={`text-${pIdx}-end`}>{paragraph.substring(lastIndex)}</span>);

            return (
              <p key={pIdx} className="m-0 leading-loose">
                {elements}
              </p>
            );
          })}
        </div>
      </div>

      {/* Questions Options Grid */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Opciones (1 a 8) — Toca para elegir
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {partData.questions.map(q => {
            const currentAnswer = answers[q.number];

            return (
              <div
                key={q.number}
                className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 text-xs font-bold text-slate-700 bg-slate-100 rounded-full">
                    {q.number}
                  </span>
                  <span className="text-xs text-slate-400">1 punto</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {q.options.map(opt => {
                    const isSelected = currentAnswer === opt.key;
                    return (
                      <button
                        key={opt.key}
                        onClick={() => onSelectAnswer(q.number, opt.key)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-medium transition-all text-left touch-manipulation ${
                          isSelected
                            ? 'bg-sky-900 text-white border-sky-900 shadow-sm ring-2 ring-sky-300'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <span
                          className={`flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${
                            isSelected ? 'bg-white text-sky-900' : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          {opt.key}
                        </span>
                        <span className="truncate">{opt.text}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
