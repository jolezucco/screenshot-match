import type { SVGProps } from "react";

/** Icona WhatsApp (disegno generico, nessun file esterno) */
export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48a.92.92 0 0 0-.66.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

/** Icona Instagram (disegno generico) */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Piccolo ornamento: tralcio di vite */
export function VineOrnament(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 22 C30 22 40 12 62 16 C72 18 76 24 80 24 C84 24 88 18 98 16 C120 12 130 22 156 22" />
      <path d="M62 16 C60 8 66 4 72 6 C70 12 66 15 62 16Z" fill="currentColor" fillOpacity="0.15" />
      <path d="M98 16 C100 8 94 4 88 6 C90 12 94 15 98 16Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="80" cy="30" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="76" cy="34" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="84" cy="34" r="2.1" fill="currentColor" stroke="none" />
      <path d="M36 18 c-3 -6 2 -9 5 -7 M124 18 c3 -6 -2 -9 -5 -7" />
    </svg>
  );
}

/** Profilo di colline (decorazione) */
export function HillsOrnament(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 400 80" fill="none" aria-hidden="true" preserveAspectRatio="none" {...props}>
      <path d="M0 80 L0 52 C60 30 110 30 160 46 C210 62 250 22 310 26 C350 29 380 40 400 46 L400 80 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M0 80 L0 64 C70 48 120 54 180 62 C240 70 300 44 400 58 L400 80 Z" fill="currentColor" fillOpacity="0.28" />
      <g stroke="currentColor" strokeOpacity="0.35" strokeWidth="1">
        <path d="M200 66 L230 52 M215 68 L245 54 M230 70 L260 56 M245 71 L275 58" />
      </g>
    </svg>
  );
}
