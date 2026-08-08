import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface ParallaxOptions {
  /** Максимальный сдвиг в пикселях. Отрицательный — элемент отстаёт от скролла. */
  distance?: number;
  /** Дополнительные трансформации, которые нужно сохранить (например, scale). */
  extraTransform?: string;
  /** Считать прогресс от центра элемента, а не от его верхней границы. */
  fromCenter?: boolean;
}

/**
 * Лёгкий параллакс по скроллу.
 *
 * `containerRef` — элемент, по положению которого считаем прогресс,
 * `targetRef` — то, что реально двигаем.
 *
 * Геометрию читаем и transform пишем внутри requestAnimationFrame и не чаще
 * одного раза за кадр: иначе на каждое событие scroll браузер пересчитывает
 * лейаут и появляются рывки.
 */
export function useParallax<C extends HTMLElement, T extends HTMLElement>({
  distance = -24,
  extraTransform = '',
  fromCenter = false,
}: ParallaxOptions = {}) {
  const containerRef = useRef<C | null>(null);
  const targetRef = useRef<T | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target) return;

    let ticking = false;

    const update = () => {
      ticking = false;

      const rect = container.getBoundingClientRect();
      const viewport = window.innerHeight || 800;
      if (rect.bottom <= 0 || rect.top >= viewport) return;

      const progress = fromCenter
        ? (rect.top + rect.height / 2 - viewport / 2) / viewport
        : rect.top / viewport;

      const shift = (progress * distance).toFixed(1);
      target.style.transform = `translateY(${shift}px) ${extraTransform}`.trim();
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [distance, extraTransform, fromCenter, prefersReducedMotion]);

  return { containerRef, targetRef };
}
