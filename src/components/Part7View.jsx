import React, { useState } from 'react';
import ReadingPassage from './ReadingPassage';
import { BookOpen, CheckSquare } from 'lucide-react';

export default function Part7View({
  partData,
  answers = {},
  onSelectAnswer,
  highlights = {},
  onUpdateHighlights
}) {
  const [mobileTab, setMobileTab] = useState('both');
  const [activeSectionId, setActiveSectionId] = useState('all');

  // Format sections for ReadingPassage
  const formattedParagraphs = partData.sections
    .filter(sec => activeSectionId === 'all' || sec.id === activeSectionId)
    .map(sec => `[SECTION ${sec.id} - ${sec.author}]\n${sec.text}`);

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
          Textos A–D y Resaltador
        </button>
        <button
          onClick={() => setMobileTab('questions')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
            mobileTab === 'questions' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
          }`}
        >
          <CheckSquare className="w-3.5 h-3.5" />
          Preguntas 43–52
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Reading Passage with Filter Tabs & Highlighting */}
        <div
          className={`lg:col-span-6 xl:col-span-6 lg:sticky lg:top-24 h-[650px] lg:h-[calc(100vh-140px)] flex flex-col gap-2 ${
            mobileTab === 'questions' ? 'hidden lg:flex' : 'flex'
          }`}
        >
          {/* Section filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-lg">
            <button
              onClick={() => setActiveSectionId('all')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                activeSectionId === 'all'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Todos (A–D)
            </button>
            {partData.sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => setActiveSectionId(sec.id)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                  activeSectionId === sec.id
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Sección {sec.id}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-hidden">
            <ReadingPassage
              title={partData.passageTitle}
              author="Cambridge B2 First - Multiple Matching"
              paragraphs={formattedParagraphs}
              passageKey="part7"
              highlights={highlights}
              onUpdateHighlights={onUpdateHighlights}
            />
          </div>
        </div>

        {/* Right Questions List (43 to 52) */}
        <div
          className={`lg:col-span-6 xl:col-span-6 space-y-4 lg:overflow-y-auto lg:h-[calc(100vh-140px)] pr-1 ${
            mobileTab === 'text' ? 'hidden lg:block' : 'block'
          }`}
        >
          {/* Instructions banner */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700">
            <h3 className="font-semibold text-slate-900 mb-1">{partData.title}</h3>
            <p className="text-xs text-slate-600">{partData.instructions}</p>
          </div>

          {/* Questions 43 to 52 */}
          <div className="space-y-3">
            {partData.questions.map((q) => {
              const currentVal = answers[q.number];

              return (
                <div
                  key={q.number}
                  className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-all space-y-2.5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-xs font-bold text-slate-700 bg-slate-100 rounded-full mt-0.5">
                        {q.number}
                      </span>
                      <p className="text-sm font-medium text-slate-800 leading-snug">
                        {q.statement}
                      </p>
                    </div>
                  </div>

                  {/* Option buttons (A, B, C, D) */}
                  <div className="flex items-center gap-2 pt-1 pl-8">
                    {partData.sections.map((sec) => {
                      const isSelected = currentVal === sec.id;
                      return (
                        <button
                          key={sec.id}
                          onClick={() => onSelectAnswer(q.number, sec.id)}
                          className={`flex items-center justify-center w-10 h-9 rounded-lg border text-sm font-bold transition-all touch-manipulation ${
                            isSelected
                              ? 'bg-sky-900 text-white border-sky-900 shadow-sm ring-2 ring-sky-300 scale-105'
                              : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                          }`}
                        >
                          {sec.id}
                        </button>
                      );
                    })}
                    {currentVal && (
                      <span className="text-xs text-slate-400 ml-2">
                        Elegido: <strong className="text-sky-900 font-bold">{currentVal}</strong>
                      </span>
                    )}
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
