import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Следит за системной настройкой «уменьшить движение».
 *
 * Стартовое значение — false, реальное читаем в эффекте: обращение к window
 * во время рендера ломает любой не-браузерный запуск (SSR, тесты).
 * Подписываемся на change, а не читаем один раз — настройку меняют на лету,
 * и параллакс должен выключаться сразу.
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(QUERY);
    setPrefersReduced(media.matches);

    const onChange = (event: MediaQueryListEvent) => setPrefersReduced(event.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return prefersReduced;
}
