import { useEffect, useRef } from 'react';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Добавляет элементу класс `is-visible`, когда он появляется во вьюпорте.
 * После срабатывания перестаём наблюдать — анимация одноразовая, лишние
 * коллбэки при скролле не нужны.
 *
 * Если IntersectionObserver недоступен, сразу показываем контент:
 * лучше без анимации, чем пустая страница.
 */
export function useReveal<T extends HTMLElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
