import React from 'react';
import { Highlighter, Eraser, Info } from 'lucide-react';

export const HIGHLIGHT_COLORS = [
  { id: 'yellow', label: 'Amarillo', hex: '#FEF08A', borderHex: '#FACC15', class: 'bg-yellow-200 text-yellow-950' },
  { id: 'green', label: 'Verde', hex: '#BBF7D0', borderHex: '#4ADE80', class: 'bg-green-200 text-green-950' },
  { id: 'pink', label: 'Rosa', hex: '#FECDD3', borderHex: '#FB7185', class: 'bg-rose-200 text-rose-950' },
  { id: 'blue', label: 'Celeste', hex: '#BAE6FD', borderHex: '#38BDF8', class: 'bg-sky-200 text-sky-950' }
];

export default function HighlighterToolbar({
  activeColor,
  setActiveColor,
  onClearAllHighlights,
  highlightCount = 0
}) {
  return (
    <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-2 px-3 py-2 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm rounded-t-xl">
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="flex items-center gap-1 text-xs font-semibold text-slate-600 mr-1">
          <Highlighter className="w-3.5 h-3.5 text-teal-700" />
          <span className="hidden sm:inline">Resaltador:</span>
        </span>

        {HIGHLIGHT_COLORS.map(color => {
          const isSelected = activeColor === color.id;
          return (
            <button
              key={color.id}
              onClick={() => setActiveColor(isSelected ? null : color.id)}
              title={`Resaltar con ${color.label}`}
              className={`group relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full transition-all touch-manipulation ${
                isSelected ? 'ring-2 ring-slate-800 scale-110 shadow-sm' : 'hover:scale-105'
              }`}
              style={{ backgroundColor: color.hex, borderColor: color.borderHex }}
            >
              <span
                className="w-4 h-4 rounded-full border"
                style={{ backgroundColor: color.hex, borderColor: color.borderHex }}
              />
              {isSelected && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-slate-900 rounded-full border-2 border-white" />
              )}
            </button>
          );
        })}

        <div className="h-5 w-px bg-slate-200 mx-1" />

        <button
          onClick={() => setActiveColor(activeColor === 'eraser' ? null : 'eraser')}
          title="Borrador de resaltado"
          className={`flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-lg transition-colors touch-manipulation ${
            activeColor === 'eraser'
              ? 'bg-rose-100 text-rose-800 ring-2 ring-rose-400'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Eraser className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Borrador</span>
        </button>

        {highlightCount > 0 && (
          <button
            onClick={onClearAllHighlights}
            title="Borrar todos los resaltados del texto"
            className="text-[11px] text-slate-500 hover:text-rose-600 underline px-1 transition-colors"
          >
            Limpiar todo ({highlightCount})
          </button>
        )}
      </div>

      <div className="text-[11px] text-slate-500 hidden md:flex items-center gap-1">
        <Info className="w-3 h-3 text-slate-400" />
        <span>Selecciona texto en el iPad o ratón para marcarlo</span>
      </div>
    </div>
  );
}
