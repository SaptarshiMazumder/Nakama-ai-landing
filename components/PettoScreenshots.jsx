'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const shots = [
  { src: '/assets/pet-to-ai/pet-to-home.png', alt: 'Pet-to AI homepage' },
  { src: '/assets/pet-to-ai/pet-to-generator.png', alt: 'Pet-to AI generator' },
  { src: '/assets/pet-to-ai/pet-to-gallery.png', alt: 'Pet-to AI gallery' },
];

export default function PettoScreenshots() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => { if (e.key === 'Escape') setActive(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  const lightbox = active !== null && createPortal(
    <div className="petto-lightbox" onClick={() => setActive(null)}>
      <button className="petto-lightbox-close" onClick={() => setActive(null)} aria-label="Close">✕</button>
      <button
        className="petto-lightbox-nav petto-lightbox-prev"
        onClick={(e) => { e.stopPropagation(); setActive((active + shots.length - 1) % shots.length); }}
        aria-label="Previous"
      >‹</button>
      <img
        src={shots[active].src}
        alt={shots[active].alt}
        className="petto-lightbox-img"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="petto-lightbox-nav petto-lightbox-next"
        onClick={(e) => { e.stopPropagation(); setActive((active + 1) % shots.length); }}
        aria-label="Next"
      >›</button>
    </div>,
    document.body
  );

  return (
    <>
      <div className="petto-screenshots">
        {shots.map((s, i) => (
          <button key={i} className="petto-screenshot-btn" onClick={() => setActive(i)} aria-label={`View ${s.alt}`}>
            <img src={s.src} alt={s.alt} className="petto-screenshot" />
          </button>
        ))}
      </div>
      {lightbox}
    </>
  );
}
