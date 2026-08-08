import { useEffect, useState } from 'react';

/**
 * Возвращает true, когда страница прокручена ниже порога.
 * Нужен шапке: в самом верху она прозрачная, дальше — со стеклом и тенью.
 */
export function useScrolled(offset = 12): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > offset);

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [offset]);

  return scrolled;
}
