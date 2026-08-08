import type { JSX } from 'react';

/**
 * Иконки храню инлайном, а не спрайтом или библиотекой: их десяток,
 * они не меняются, а так они попадают в бандл без лишнего запроса
 * и красятся через currentColor.
 */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export const icons = {
  'arrow-right': (
    <g {...stroke}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </g>
  ),
  'arrow-up-right': (
    <g {...stroke}>
      <path d="M7 17 17 7M8 7h9v9" />
    </g>
  ),
  phone: (
    <g {...stroke}>
      <path d="M4 5c0 8.3 6.7 15 15 15l3-4-6-3-2 2c-2.5-1.2-4-2.7-5-5l2-2-3-6z" />
    </g>
  ),
  pin: (
    <g {...stroke}>
      <circle cx="12" cy="10" r="3" />
      <path d="M12 21c5-5.5 8-9.3 8-12.5A8 8 0 1 0 4 8.5C4 11.7 7 15.5 12 21z" />
    </g>
  ),
  mail: (
    <g {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 6l8 7 8-7" />
    </g>
  ),
  'check-circle': (
    <g {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.3l2.4 2.4 4.6-5" />
    </g>
  ),
  doc: (
    <g {...stroke}>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v4h4M9.5 12h5M9.5 15.5h5" />
    </g>
  ),
  vk: (
    <path
      fill="currentColor"
      d="M13 17.5c-6.3 0-9.9-4.3-10-11.5h3.1c.1 5.4 2.4 7.7 4.2 8.1V6h3v4.5c1.7-.2 3.5-2.3 4.1-4.5h3c-.5 2.7-2.5 4.8-3.9 5.7 1.4.7 3.7 2.5 4.6 5.8h-3.3c-.7-2.1-2.3-3.7-4.5-3.9v3.9z"
    />
  ),
  telegram: (
    <path
      fill="currentColor"
      d="M21 4 2.6 11.2c-1.2.5-1.2 1.2-.2 1.5l4.7 1.5 1.8 5.6c.2.6.5.8 1 .8.4 0 .6-.2.9-.5l2.2-2.1 4.6 3.4c.8.5 1.4.2 1.6-.8L21.9 5.3c.3-1.3-.4-1.8-1-1.3z"
    />
  ),
  instagram: (
    <g>
      <rect x="3" y="3" width="18" height="18" rx="5" {...stroke} />
      <circle cx="12" cy="12" r="4" {...stroke} />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
    </g>
  ),
} satisfies Record<string, JSX.Element>;

export type IconName = keyof typeof icons;
