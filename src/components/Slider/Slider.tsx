import React, { useEffect, useRef, useState } from 'react';
import './Slider.css';

interface SliderProps {
  slides: string[];                
  auto?: boolean;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  initialIndex?: number;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  slides,
  auto = true,
  interval = 4000,
  showArrows = true,
  showDots = true,
  initialIndex = 0,
  className = '',
}) => {
  const [index, setIndex] = useState<number>(initialIndex);
  const timerRef = useRef<number | null>(null);

  const startTimer = () => {
    if (!auto || slides.length <= 1) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length, interval, auto]);

  const goTo = (i: number) => {
    setIndex((i + slides.length) % slides.length);
    startTimer();
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // intentionally not including prev/next in deps to avoid re-binding frequently
    // index changes handled by goTo which resets timer
  }, []); // eslint-disable-line

  if (!slides || slides.length === 0) return null;

  return (
    <div className={`slider ${className}`} role="region" aria-roledescription="carousel">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
        aria-live="polite"
      >
        {slides.map((src, i) => (
          <div
            key={i}
            className="slider-slide"
            style={{ backgroundImage: `url(${src})` }}
            role="img"
            aria-label={`slide ${i + 1}`}
          />
        ))}
      </div>

      {showArrows && slides.length > 1 && (
        <>
          <button className="slider-arrow slider-arrow--prev" onClick={prev} aria-label="Previous slide">
            ‹
          </button>
          <button className="slider-arrow slider-arrow--next" onClick={next} aria-label="Next slide">
            ›
          </button>
        </>
      )}

      {showDots && slides.length > 1 && (
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === index ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slider;