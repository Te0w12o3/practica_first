import React, { useRef, useState, useEffect } from 'react';
import HighlighterToolbar, { HIGHLIGHT_COLORS } from './HighlighterToolbar';

export default function ReadingPassage({
  title,
  author,
  paragraphs = [],
  passageKey,
  highlights = {},
  onUpdateHighlights
}) {
  const containerRef = useRef(null);
  const [activeColor, setActiveColor] = useState('yellow');
  const [selectionPopover, setSelectionPopover] = useState(null);

  // Handle selection (mouse or touch on iPad)
  const handleSelection = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.toString().trim()) {
      setSelectionPopover(null);
      return;
    }

    const selectedText = selection.toString().trim();
    if (selectedText.length < 2) return;

    // Check if selection is within our passage container
    if (!containerRef.current || !containerRef.current.contains(selection.anchorNode)) {
      setSelectionPopover(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setSelectionPopover({
      text: selectedText,
      top: rect.top - containerRect.top + containerRef.current.scrollTop - 44,
      left: Math.max(10, rect.left - containerRect.left + rect.width / 2 - 80)
    });

    // If activeColor is already set and not eraser, we can either auto-apply or let user tap
    if (activeColor && activeColor !== 'eraser') {
      applyHighlight(activeColor, selectedText);
      selection.removeAllRanges();
      setSelectionPopover(null);
    }
  };

  const applyHighlight = (colorId, textToHighlight) => {
    const text = textToHighlight || selectionPopover?.text;
    if (!text) return;

    const newHighlights = {
      ...(highlights[passageKey] || {}),
      [text]: colorId
    };

    onUpdateHighlights(passageKey, newHighlights);
    setSelectionPopover(null);
    window.getSelection()?.removeAllRanges();
  };

  const removeHighlight = (textToRemove) => {
    const current = { ...(highlights[passageKey] || {}) };
    delete current[textToRemove];
    onUpdateHighlights(passageKey, current);
    setSelectionPopover(null);
  };

  const clearAllHighlights = () => {
    onUpdateHighlights(passageKey, {});
    setSelectionPopover(null);
  };

  const currentHighlights = highlights[passageKey] || {};
  const highlightCount = Object.keys(currentHighlights).length;

  // Render paragraph with highlighted phrases
  const renderAnnotatedParagraph = (paragraphText, pIndex) => {
    // If no highlights, render directly
    if (highlightCount === 0) {
      return <span>{paragraphText}</span>;
    }

    // Build regex of highlighted strings
    const entries = Object.entries(currentHighlights);
    if (entries.length === 0) return <span>{paragraphText}</span>;

    // Sort by length descending to match longer phrases first
    entries.sort((a, b) => b[0].length - a[0].length);

    // Escape regex characters
    const escapedTerms = entries.map(([term]) =>
      term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );

    const pattern = new RegExp(`(${escapedTerms.join('|')})`, 'gi');
    const parts = paragraphText.split(pattern);

    return (
      <span>
        {parts.map((part, i) => {
          const matchEntry = entries.find(
            ([term]) => term.toLowerCase() === part.toLowerCase()
          );

          if (matchEntry) {
            const [matchedTerm, colorId] = matchEntry;
            const colorDef = HIGHLIGHT_COLORS.find(c => c.id === colorId) || HIGHLIGHT_COLORS[0];

            return (
              <mark
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  if (activeColor === 'eraser') {
                    removeHighlight(matchedTerm);
                  } else if (activeColor) {
                    applyHighlight(activeColor, matchedTerm);
                  } else {
                    removeHighlight(matchedTerm);
                  }
                }}
                title="Toca para cambiar o borrar resaltado"
                className={`cursor-pointer px-1 py-0.5 rounded transition-all hover:opacity-80 ${colorDef.class}`}
                style={{ backgroundColor: colorDef.hex }}
              >
                {part}
              </mark>
            );
          }
          return <span key={i}>{part}</span>;
        })}
      </span>
    );
  };

  return (
    <div className="relative flex flex-col h-full bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      {/* Highlighter Top Toolbar */}
      <HighlighterToolbar
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        onClearAllHighlights={clearAllHighlights}
        highlightCount={highlightCount}
      />

      {/* Reading Text Body */}
      <div
        ref={containerRef}
        onMouseUp={handleSelection}
        onTouchEnd={handleSelection}
        className="relative flex-1 p-5 sm:p-7 overflow-y-auto select-text leading-relaxed text-slate-800"
      >
        {/* Floating Quick Selection Tooltip */}
        {selectionPopover && (
          <div
            style={{ top: `${selectionPopover.top}px`, left: `${selectionPopover.left}px` }}
            className="absolute z-30 flex items-center gap-1.5 p-1.5 bg-slate-900/95 text-white rounded-full shadow-xl border border-slate-700 animate-in fade-in zoom-in-95 duration-150"
          >
            {HIGHLIGHT_COLORS.map(c => (
              <button
                key={c.id}
                onClick={() => applyHighlight(c.id)}
                className="w-6 h-6 rounded-full hover:scale-110 active:scale-95 transition-transform"
                style={{ backgroundColor: c.hex }}
                title={`Resaltar ${c.label}`}
              />
            ))}
            <button
              onClick={() => removeHighlight(selectionPopover.text)}
              className="px-2 py-0.5 text-xs text-rose-300 hover:text-white"
            >
              Borrar
            </button>
          </div>
        )}

        {/* Passage Header */}
        <div className="mb-6 border-b border-slate-100 pb-4">
          <div className="inline-block px-2.5 py-0.5 mb-2 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200 rounded-full">
            Texto de Lectura Oficial
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-display">
            {title}
          </h2>
          {author && <p className="text-xs text-slate-500 mt-1 italic">{author}</p>}
        </div>

        {/* Paragraphs with academic line numbers */}
        <div className="space-y-5 text-[15px] sm:text-[16px] leading-[1.8] text-slate-700 font-sans">
          {paragraphs.map((para, index) => {
            const lineNumber = (index + 1) * 5;
            return (
              <div key={index} className="relative group pl-7 sm:pl-9">
                <span className="absolute left-0 top-0.5 text-[11px] font-mono text-slate-400 select-none group-hover:text-slate-600 transition-colors">
                  {lineNumber}
                </span>
                <p className="m-0 text-justify hyphens-auto">
                  {renderAnnotatedParagraph(para, index)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
