import React from 'react';
import { DEFAULT_COLORS } from '@site/src/data/icon-catalog';
import { LUCIDE_MAP } from './lucide-map';

// inline icon for the manual.
// material symbols use snake_case names ("attach_file"),
// lucide icons use PascalCase names ("Eye").
// color: "black" (default), "red" (uva red), or any css colour.
export default function Icon({ name, color = 'black', size = 20 }) {
  const resolvedColor = DEFAULT_COLORS[color] || color;
  const resolvedSize = Number(size) || 20;

  if (!name) {
    return null;
  }

  // snake_case / all-lowercase -> material symbols ligature
  if (/^[a-z0-9_]+$/.test(name)) {
    return (
      <span
        className="material-symbols-outlined manual-icon"
        style={{ fontSize: resolvedSize, color: resolvedColor }}
        aria-hidden="true"
      >
        {name}
      </span>
    );
  }

  const LucideIcon = LUCIDE_MAP[name];
  if (LucideIcon) {
    return (
      <LucideIcon
        className="manual-icon"
        size={resolvedSize}
        color={resolvedColor}
        aria-hidden="true"
      />
    );
  }

  // unknown name: show it as text so the problem is visible, not silent
  return <span title="unknown icon">[{name}]</span>;
}
