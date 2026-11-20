import React from 'react';

export default function Part4View({
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
        <div className="mt-2 flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-0.5 bg-sky-100 text-sky-800 rounded font-medium">
            2 a 5 palabras
          </span>
          <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded font-medium">
            Incluye la palabra dada sin cambiarla
          </span>
          <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-medium">
            Hasta 2 puntos por pregunta
          </span>
        </div>
      </div>

      {/* Transformation Items */}
      <div className="space-y-4">
        {partData.questions.map((q) => {
          const val = answers[q.number] || '';
          const words = val.trim() ? val.trim().split(/\s+/) : [];
          const wordCount = words.length;
          const includesKeyWord = val.toUpperCase().includes(q.keyWord.toUpperCase());
          const isWordCountValid = wordCount >= 2 && wordCount <= 5;

          return (
            <div
              key={q.number}
              className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-all space-y-3"
            >
              {/* Question header */}
              <div className="flex items-center justify-between">
                <span className="flex items-center justify-center w-7 h-7 text-xs font-bold text-slate-700 bg-slate-100 rounded-full">
                  {q.number}
                </span>
                <span className="text-xs font-semibold text-slate-500">2 puntos</span>
              </div>

              {/* Original sentence */}
              <div className="text-[15px] text-slate-700 pl-2 border-l-2 border-slate-300">
                {q.firstSentence}
              </div>

              {/* Key Word Badge */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-500">Palabra clave:</span>
                <span className="px-3 py-1 font-mono font-black text-sm tracking-widest text-indigo-900 bg-indigo-100 border border-indigo-200 rounded-md">
                  {q.keyWord}
                </span>
              </div>

              {/* Second Sentence with Input Box */}
              <div className="p-4 bg-slate-50/80 border border-slate-200 rounded-lg">
                <div className="flex flex-wrap items-center gap-2 text-base text-slate-900 font-medium">
                  <span>{q.secondSentencePrefix}</span>
                  <input
                    type="text"
                    value={val}
                    placeholder={`Completar (ej. ${q.keyWord.toLowerCase()}...)`}
                    onChange={(e) => onTextChange(q.number, e.target.value.toUpperCase())}
                    className="flex-1 min-w-[220px] px-3.5 py-1.5 text-base font-bold tracking-wide text-slate-900 bg-white border-2 border-sky-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-sky-600 uppercase transition-all shadow-sm"
                  />
                  <span>{q.secondSentenceSuffix}</span>
                </div>

                {/* Live validation feedback chips */}
                {val.trim().length > 0 && (
                  <div className="mt-2.5 flex items-center gap-3 text-xs">
                    <span
                      className={`inline-flex items-center gap-1 font-medium ${
                        isWordCountValid ? 'text-emerald-700' : 'text-amber-700 font-semibold'
                      }`}
                    >
                      Palabras: {wordCount} / 5 {isWordCountValid ? '✓' : '(debe tener entre 2 y 5)'}
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 font-medium ${
                        includesKeyWord ? 'text-emerald-700' : 'text-rose-600'
                      }`}
                    >
                      {includesKeyWord ? '✓ Contiene ' + q.keyWord : '✗ Debe incluir ' + q.keyWord}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
