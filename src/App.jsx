import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { EXAMS } from './data/exams';
import { calculateExamScore } from './utils/cambridgeScoring';
import Header from './components/Header';
import Part1View from './components/Part1View';
import Part2View from './components/Part2View';
import Part3View from './components/Part3View';
import Part4View from './components/Part4View';
import Part5View from './components/Part5View';
import Part6View from './components/Part6View';
import Part7View from './components/Part7View';
import QuestionMatrix from './components/QuestionMatrix';
import ResultsModal from './components/ResultsModal';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentExamId, setCurrentExamId] = useState(() => {
    return localStorage.getItem('cambridge_fce_exam_id') || EXAMS[0].id;
  });

  const currentExam = EXAMS.find(e => e.id === currentExamId) || EXAMS[0];

  const [activePart, setActivePart] = useState(1);

  // Answers keyed by question number (1 to 52)
  const [answers, setAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem(`cambridge_fce_answers_${currentExamId}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Highlights keyed by passageKey (e.g., 'part5', 'part6', 'part7')
  const [highlights, setHighlights] = useState(() => {
    try {
      const saved = localStorage.getItem(`cambridge_fce_highlights_${currentExamId}`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Timer: 75 minutes = 4500 seconds
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem(`cambridge_fce_time_${currentExamId}`);
    return saved ? parseInt(saved, 10) : 75 * 60;
  });
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isUntimed, setIsUntimed] = useState(false);

  // Matrix drawer state
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);

  // Score report state
  const [scoreReport, setScoreReport] = useState(null);
  const [showResultsModal, setShowResultsModal] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('cambridge_fce_exam_id', currentExamId);
  }, [currentExamId]);

  useEffect(() => {
    localStorage.setItem(`cambridge_fce_answers_${currentExamId}`, JSON.stringify(answers));
  }, [answers, currentExamId]);

  useEffect(() => {
    localStorage.setItem(`cambridge_fce_highlights_${currentExamId}`, JSON.stringify(highlights));
  }, [highlights, currentExamId]);

  useEffect(() => {
    localStorage.setItem(`cambridge_fce_time_${currentExamId}`, String(timeLeft));
  }, [timeLeft, currentExamId]);

  // Timer interval
  useEffect(() => {
    if (!isTimerRunning || isUntimed || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          handleGradeExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimerRunning, isUntimed, timeLeft]);

  // Handlers
  const handleSelectExam = (examId) => {
    setCurrentExamId(examId);
    setActivePart(1);
    try {
      const savedAnswers = localStorage.getItem(`cambridge_fce_answers_${examId}`);
      setAnswers(savedAnswers ? JSON.parse(savedAnswers) : {});
      const savedHighlights = localStorage.getItem(`cambridge_fce_highlights_${examId}`);
      setHighlights(savedHighlights ? JSON.parse(savedHighlights) : {});
      const savedTime = localStorage.getItem(`cambridge_fce_time_${examId}`);
      setTimeLeft(savedTime ? parseInt(savedTime, 10) : 75 * 60);
    } catch {
      setAnswers({});
      setHighlights({});
      setTimeLeft(75 * 60);
    }
    setScoreReport(null);
    setShowResultsModal(false);
  };

  const handleSelectAnswer = (qNumber, value) => {
    setAnswers(prev => ({
      ...prev,
      [qNumber]: value
    }));
  };

  const handleTextChange = (qNumber, value) => {
    setAnswers(prev => ({
      ...prev,
      [qNumber]: value
    }));
  };

  const handleUpdateHighlights = (passageKey, newHighlights) => {
    setHighlights(prev => ({
      ...prev,
      [passageKey]: newHighlights
    }));
  };

  const handleGradeExam = () => {
    const report = calculateExamScore(currentExam, answers);
    setScoreReport(report);
    setShowResultsModal(true);

    if (report.pass) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestartExam = () => {
    setAnswers({});
    setHighlights({});
    setTimeLeft(75 * 60);
    localStorage.removeItem(`cambridge_fce_answers_${currentExamId}`);
    localStorage.removeItem(`cambridge_fce_highlights_${currentExamId}`);
    localStorage.removeItem(`cambridge_fce_time_${currentExamId}`);
    setScoreReport(null);
    setShowResultsModal(false);
    setActivePart(1);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans pb-16">
      {/* Top Academic Header */}
      <Header
        exams={EXAMS}
        currentExamId={currentExamId}
        onSelectExam={handleSelectExam}
        activePart={activePart}
        onSelectPart={setActivePart}
        answers={answers}
        timeLeft={timeLeft}
        isTimerRunning={isTimerRunning}
        onToggleTimer={() => setIsTimerRunning(p => !p)}
        onResetTimer={() => setTimeLeft(75 * 60)}
        isUntimed={isUntimed}
        onToggleUntimed={() => setIsUntimed(p => !p)}
        onSubmitExam={handleGradeExam}
      />

      {/* Main Examination Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activePart === 1 && (
          <Part1View
            partData={currentExam.part1}
            answers={answers}
            onSelectAnswer={handleSelectAnswer}
          />
        )}

        {activePart === 2 && (
          <Part2View
            partData={currentExam.part2}
            answers={answers}
            onTextChange={handleTextChange}
          />
        )}

        {activePart === 3 && (
          <Part3View
            partData={currentExam.part3}
            answers={answers}
            onTextChange={handleTextChange}
          />
        )}

        {activePart === 4 && (
          <Part4View
            partData={currentExam.part4}
            answers={answers}
            onTextChange={handleTextChange}
          />
        )}

        {activePart === 5 && (
          <Part5View
            partData={currentExam.part5}
            answers={answers}
            onSelectAnswer={handleSelectAnswer}
            highlights={highlights}
            onUpdateHighlights={handleUpdateHighlights}
          />
        )}

        {activePart === 6 && (
          <Part6View
            partData={currentExam.part6}
            answers={answers}
            onSelectAnswer={handleSelectAnswer}
            highlights={highlights}
            onUpdateHighlights={handleUpdateHighlights}
          />
        )}

        {activePart === 7 && (
          <Part7View
            partData={currentExam.part7}
            answers={answers}
            onSelectAnswer={handleSelectAnswer}
            highlights={highlights}
            onUpdateHighlights={handleUpdateHighlights}
          />
        )}

        {/* Section Navigation Footer */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => setActivePart(p => Math.max(1, p - 1))}
            disabled={activePart === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all ${
              activePart === 1
                ? 'opacity-40 cursor-not-allowed text-slate-400 bg-slate-100'
                : 'text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 shadow-xs'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Parte Anterior</span>
          </button>

          <span className="text-xs font-semibold text-slate-500">
            Parte {activePart} de 7
          </span>

          {activePart < 7 ? (
            <button
              onClick={() => setActivePart(p => Math.min(7, p + 1))}
              className="flex items-center gap-2 px-5 py-2 bg-[#0A4D68] hover:bg-[#088395] text-white rounded-lg font-semibold text-xs sm:text-sm shadow-xs transition-all"
            >
              <span>Siguiente Parte</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handleGradeExam}
              className="flex items-center gap-2 px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs sm:text-sm shadow-xs transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Finalizar y Ver Puntaje</span>
            </button>
          )}
        </div>
      </main>

      {/* Bottom Floating Question Drawer */}
      <QuestionMatrix
        activePart={activePart}
        onSelectPart={setActivePart}
        answers={answers}
        isOpen={isMatrixOpen}
        onToggleOpen={() => setIsMatrixOpen(p => !p)}
      />

      {/* Score & Review Modal */}
      {showResultsModal && scoreReport && (
        <ResultsModal
          scoreReport={scoreReport}
          exam={currentExam}
          onClose={() => setShowResultsModal(false)}
          onRestartExam={handleRestartExam}
        />
      )}
    </div>
  );
}
