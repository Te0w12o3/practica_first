import React from 'react';

export default function Part3View({
  partData,
  answers = {},
  onTextChange
}) {
  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700">
        <h3 className="font-semibold text-slate-900 mb-1">{partData.title}</h3>
        <p>{partData.instructions}</p>
        <p className="mt-1 text-xs text-slate-500 italic">
          Tip: Transforma la palabra base en mayúsculas (prefijos, sufijos, sustantivo/adjetivo/adverbio/verbo) para que encaje en el espacio.
        </p>
      </div>

      {/* Interactive Passage with Root Word Badges */}
      <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
        <h4 className="text-lg font-bold text-slate-900 mb-4">{partData.passageTitle}</h4>
        <div className="space-y-4 text-base leading-relaxed text-slate-800">
          {partData.passage.map((paragraph, pIdx) => {
            const gapRegex = /\((\d+)\)\s*_{2,}/g;
            const elements = [];
            let lastIndex = 0;
            let match;

            while ((match = gapRegex.exec(paragraph)) !== null) {
              const qNum = parseInt(match[1], 10);
              const precedingText = paragraph.substring(lastIndex, match.index);
              elements.push(<span key={`text-${pIdx}-${lastIndex}`}>{precedingText}</span>);

              const questionObj = partData.questions.find(q => q.number === qNum);
              const baseWord = questionObj?.baseWord || '';
              const currentVal = answers[qNum] || '';

              elements.push(
                <span key={`input-gap-${qNum}`} className="inline-flex items-center align-middle mx-1.5 my-1">
                  <span className="text-xs font-mono text-slate-500 mr-1">({qNum})</span>
                  <input
                    type="text"
                    value={currentVal}
                    placeholder="Escribir..."
                    onChange={(e) => onTextChange(qNum, e.target.value.toUpperCase())}
                    className="w-32 sm:w-40 px-2.5 py-1 text-sm font-semibold tracking-wide text-slate-900 bg-sky-50/50 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all text-center uppercase"
                  />
                  <span className="ml-1.5 px-2 py-0.5 text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded">
                    [{baseWord}]
                  </span>
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

      {/* Grid of Word Formation Cards */}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
          Formación de palabras (17 a 24)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {partData.questions.map(q => {
            const val = answers[q.number] || '';
            return (
              <div
                key={q.number}
                className="p-3.5 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col justify-between gap-2 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center w-6 h-6 text-xs font-bold text-slate-700 bg-slate-100 rounded-full">
                    {q.number}
                  </span>
                  <span className="px-2 py-0.5 text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 rounded">
                    {q.baseWord}
                  </span>
                </div>
                <input
                  type="text"
                  value={val}
                  placeholder={`Derivada de ${q.baseWord}`}
                  onChange={(e) => onTextChange(q.number, e.target.value.toUpperCase())}
                  className="w-full px-3 py-2 text-sm font-bold tracking-wider text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white uppercase text-center transition-all"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
