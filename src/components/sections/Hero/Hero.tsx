import heroPhoto from '@/assets/images/hero-dentist-editorial.jpg';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { heroStats } from '@/data/hero';
import { useParallax } from '@/hooks/useParallax';
import { useReveal } from '@/hooks/useReveal';
import styles from './Hero.module.scss';

/**
 * Первый экран. Фотография двигается медленнее страницы — приём даёт
 * ощущение глубины; scale(1.08) нужен, чтобы при сдвиге не открывался край.
 */
export function Hero() {
  const revealRef = useReveal<HTMLDivElement>();
  const { containerRef, targetRef } = useParallax<HTMLDivElement, HTMLImageElement>({
    distance: -24,
    extraTransform: 'scale(1.08)',
  });

  return (
    <section className={styles.hero} id="top">
      <div className={styles.photo} ref={containerRef}>
        <img
          ref={targetRef}
          src={heroPhoto}
          alt="Ассистент клиники LUMÉ готовит инструменты перед приёмом"
          // Первый экран виден сразу: грузим сразу, декодируем асинхронно,
          // чтобы картинка не блокировала отрисовку текста.
          loading="eager"
          decoding="async"
        />
      </div>

      <div className={styles.scrim} aria-hidden="true" />

      <Container className={styles.inner}>
        <div className={`${styles.content} reveal`} ref={revealRef}>
          <span className={styles.eyebrow}>Современная стоматология</span>

          <h1 className={styles.title}>
            Стоматология, в&nbsp;которую хочется <em>возвращаться.</em>
          </h1>

          <p className={styles.subtitle}>
            Спокойное лечение, понятный план и врачи, которые объясняют каждый шаг.
          </p>

          <div className={styles.actions}>
            <Button href="#contact">Записаться на консультацию</Button>
            <a className={styles.textLink} href="#services">
              Посмотреть услуги
              <Icon name="arrow-right" />
            </a>
          </div>

          <div className={styles.stats}>
            {heroStats.map((stat) => (
              <div key={stat.value} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
