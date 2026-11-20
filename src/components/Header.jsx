import React from 'react';
import { Clock, Play, Pause, RotateCcw, Award, CheckCircle } from 'lucide-react';

export default function Header({
  exams,
  currentExamId,
  onSelectExam,
  activePart,
  onSelectPart,
  answers = {},
  timeLeft,
  isTimerRunning,
  onToggleTimer,
  onResetTimer,
  isUntimed,
  onToggleUntimed,
  onSubmitExam
}) {
  const currentExam = exams.find(e => e.id === currentExamId) || exams[0];

  // Calculate total answered questions out of 52
  const answeredCount = Object.keys(answers).filter(k => {
    const val = answers[k];
    return val !== undefined && val !== null && String(val).trim().length > 0;
  }).length;

  const progressPercentage = Math.round((answeredCount / 52) * 100);

  // Format timer MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isTimeCritical = timeLeft < 600 && !isUntimed; // < 10 mins

  // Parts definition
  const parts = [
    { num: 1, label: 'P1: Vocabulario', range: '1–8', count: 8 },
    { num: 2, label: 'P2: Gramática', range: '9–16', count: 8 },
    { num: 3, label: 'P3: Formación', range: '17–24', count: 8 },
    { num: 4, label: 'P4: Frases', range: '25–30', count: 6 },
    { num: 5, label: 'P5: Lectura', range: '31–36', count: 6 },
    { num: 6, label: 'P6: Gapped', range: '37–42', count: 6 },
    { num: 7, label: 'P7: Matching', range: '43–52', count: 10 }
  ];

  return (
    <header className="sticky top-0 z-30 bg-[#0A4D68] text-white shadow-md border-b border-[#083344]">
      {/* Top Banner: Exam Selector, Timer, Actions */}
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Brand & Exam Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-400/20 border border-sky-400/40 text-sky-200 font-bold text-sm">
              B2
            </span>
            <div>
              <h1 className="text-sm sm:text-base font-bold tracking-tight text-white flex items-center gap-1.5">
                Cambridge First Simulator
                <span className="hidden md:inline-block text-[11px] font-normal px-2 py-0.5 rounded-full bg-teal-900/60 text-teal-200 border border-teal-500/30">
                  Reading & Use of English
                </span>
              </h1>
            </div>
          </div>

          {/* Exam Dropdown */}
          <select
            value={currentExamId}
            onChange={(e) => onSelectExam(e.target.value)}
            className="text-xs sm:text-sm bg-[#08384D] border border-sky-500/30 text-sky-100 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-sky-400 font-medium"
          >
            {exams.map(ex => (
              <option key={ex.id} value={ex.id} className="bg-slate-900 text-white">
                {ex.title}
              </option>
            ))}
          </select>
        </div>

        {/* Center: Timer & Untimed Controls */}
        <div className="flex items-center gap-2">
          {!isUntimed ? (
            <div
              className={`flex items-center gap-2 px-3 py-1 rounded-full border text-xs sm:text-sm font-mono font-bold tracking-wider transition-colors ${
                isTimeCritical
                  ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse'
                  : 'bg-[#083344] border-sky-500/30 text-white'
              }`}
            >
              <Clock className="w-3.5 h-3.5 text-sky-300" />
              <span>{timeFormatted}</span>

              <button
                onClick={onToggleTimer}
                title={isTimerRunning ? 'Pausar tiempo' : 'Reanudar tiempo'}
                className="hover:text-sky-300 transition-colors ml-1 p-0.5"
              >
                {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={onResetTimer}
                title="Reiniciar a 75 minutos"
                className="hover:text-sky-300 transition-colors p-0.5"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <span className="text-xs px-2.5 py-1 bg-[#083344] border border-sky-500/30 text-sky-200 rounded-full font-medium">
              Modo sin límite de tiempo
            </span>
          )}

          <button
            onClick={onToggleUntimed}
            title="Alternar entre examen con cronómetro o práctica libre"
            className="text-[11px] underline text-sky-200 hover:text-white px-1"
          >
            {isUntimed ? 'Activar 75 min' : 'Sin tiempo'}
          </button>
        </div>

        {/* Right: Answered Progress & Finish Button */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-xs font-medium text-sky-200">
              {answeredCount} / 52 respondidas
            </span>
            <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-0.5">
              <div
                className="h-full bg-emerald-400 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <button
            onClick={onSubmitExam}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-slate-950 font-bold text-xs sm:text-sm rounded-lg shadow-sm transition-all touch-manipulation"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Corregir y Puntaje</span>
          </button>
        </div>
      </div>

      {/* Parts Navigation Bar (Part 1 to Part 7) */}
      <div className="bg-[#08384D] px-2 sm:px-6 overflow-x-auto scrollbar-none border-t border-[#072b3b]">
        <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 py-1.5 min-w-max">
          {parts.map(p => {
            const isActive = activePart === p.num;

            // Count answered in this specific part
            let start = 1;
            let end = 8;
            if (p.num === 2) { start = 9; end = 16; }
            else if (p.num === 3) { start = 17; end = 24; }
            else if (p.num === 4) { start = 25; end = 30; }
            else if (p.num === 5) { start = 31; end = 36; }
            else if (p.num === 6) { start = 37; end = 42; }
            else if (p.num === 7) { start = 43; end = 52; }

            let partAnswered = 0;
            for (let i = start; i <= end; i++) {
              if (answers[i] && String(answers[i]).trim().length > 0) {
                partAnswered++;
              }
            }

            const isPartComplete = partAnswered === p.count;

            return (
              <button
                key={p.num}
                onClick={() => onSelectPart(p.num)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all touch-manipulation ${
                  isActive
                    ? 'bg-sky-400 text-slate-950 shadow-sm'
                    : 'text-sky-100 hover:bg-sky-950/60'
                }`}
              >
                <span>{p.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive
                      ? 'bg-slate-950 text-sky-200'
                      : isPartComplete
                      ? 'bg-emerald-500 text-slate-950'
                      : 'bg-[#0A4D68] text-sky-200'
                  }`}
                >
                  {partAnswered}/{p.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
