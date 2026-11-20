import React from 'react';
import { Grid, ChevronUp, ChevronDown } from 'lucide-react';

export default function QuestionMatrix({
  activePart,
  onSelectPart,
  answers = {},
  isOpen,
  onToggleOpen
}) {
  const getPartForQuestion = (qNum) => {
    if (qNum <= 8) return 1;
    if (qNum <= 16) return 2;
    if (qNum <= 24) return 3;
    if (qNum <= 30) return 4;
    if (qNum <= 36) return 5;
    if (qNum <= 42) return 6;
    return 7;
  };

  const questions = Array.from({ length: 52 }, (_, i) => i + 1);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-20 bg-white/95 backdrop-blur border-t border-slate-200 shadow-lg transition-all">
      {/* Drawer Toggle Bar */}
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
        <button
          onClick={onToggleOpen}
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900"
        >
          <Grid className="w-3.5 h-3.5 text-teal-700" />
          <span>Navegador de Preguntas (1 a 52)</span>
          {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>

        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-800" /> Respondida
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200 border border-slate-300" /> Sin responder
          </span>
        </div>
      </div>

      {/* Expanded Grid */}
      {isOpen && (
        <div className="max-w-7xl mx-auto px-4 py-3 border-t border-slate-100 max-h-48 overflow-y-auto">
          <div className="grid grid-cols-8 sm:grid-cols-13 md:grid-cols-26 gap-1.5">
            {questions.map((qNum) => {
              const partOfQ = getPartForQuestion(qNum);
              const isAnswered = answers[qNum] !== undefined && String(answers[qNum]).trim().length > 0;
              const isCurrentPart = activePart === partOfQ;

              return (
                <button
                  key={qNum}
                  onClick={() => onSelectPart(partOfQ)}
                  title={`Pregunta ${qNum} (Parte ${partOfQ})`}
                  className={`flex items-center justify-center h-7 rounded text-xs font-bold transition-all touch-manipulation ${
                    isAnswered
                      ? 'bg-sky-800 text-white shadow-xs hover:bg-sky-900'
                      : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'
                  } ${isCurrentPart ? 'ring-2 ring-teal-500' : ''}`}
                >
                  {qNum}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
