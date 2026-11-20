import React, { useState } from 'react';
import ReadingPassage from './ReadingPassage';
import { BookOpen, HelpCircle } from 'lucide-react';

export default function Part5View({
  partData,
  answers = {},
  onSelectAnswer,
  highlights = {},
  onUpdateHighlights
}) {
  const [mobileTab, setMobileTab] = useState('both'); // 'text', 'questions', or 'both'

  return (
    <div className="space-y-4">
      {/* Mobile view switcher for iPad portrait / small screens */}
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
          onClick={() => setMobileTab('questions')}
          className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
            mobileTab === 'questions' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          Preguntas 31–36
        </button>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Reading Passage (55% on desktop) */}
        <div
          className={`lg:col-span-7 xl:col-span-7 lg:sticky lg:top-24 h-[650px] lg:h-[calc(100vh-140px)] ${
            mobileTab === 'questions' ? 'hidden lg:block' : 'block'
          }`}
        >
          <ReadingPassage
            title={partData.passageTitle}
            author={partData.author}
            paragraphs={partData.passage}
            passageKey="part5"
            highlights={highlights}
            onUpdateHighlights={onUpdateHighlights}
          />
        </div>

        {/* Right Questions Console (45% on desktop) */}
        <div
          className={`lg:col-span-5 xl:col-span-5 space-y-5 lg:overflow-y-auto lg:h-[calc(100vh-140px)] pr-1 ${
            mobileTab === 'text' ? 'hidden lg:block' : 'block'
          }`}
        >
          {/* Instructions banner */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700">
            <h3 className="font-semibold text-slate-900 mb-1">{partData.title}</h3>
            <p className="text-xs text-slate-600">{partData.instructions}</p>
          </div>

          {/* Question cards */}
          {partData.questions.map((q) => {
            const currentSelection = answers[q.number];

            return (
              <div
                key={q.number}
                className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center justify-center w-7 h-7 text-xs font-bold text-slate-700 bg-slate-100 rounded-full">
                    {q.number}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">2 puntos</span>
                </div>

                <p className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                  {q.question}
                </p>

                <div className="space-y-2 pt-1">
                  {q.options.map((opt) => {
                    const isSelected = currentSelection === opt.key;
                    return (
                      <button
                        key={opt.key}
                        onClick={() => onSelectAnswer(q.number, opt.key)}
                        className={`w-full flex items-start gap-3 p-3 rounded-lg border text-sm text-left transition-all touch-manipulation ${
                          isSelected
                            ? 'bg-sky-900 text-white border-sky-900 shadow-sm ring-2 ring-sky-300'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                        }`}
                      >
                        <span
                          className={`flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold mt-0.5 ${
                            isSelected ? 'bg-white text-sky-900' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {opt.key}
                        </span>
                        <span className="leading-snug">{opt.text}</span>
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
