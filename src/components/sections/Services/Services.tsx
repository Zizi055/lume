import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { SectionHead } from '@/components/ui/SectionHead';
import { services } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';
import styles from './Services.module.scss';

/**
 * Список услуг в виде «оглавления».
 *
 * Активная строка хранится в состоянии, а не в CSS :has() — так превью
 * реагирует и на фокус с клавиатуры, а не только на мышь.
 */
export function Services() {
  const headRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="services">
      <Container>
        <div ref={headRef} className="reveal">
          <SectionHead
            tag="Услуги"
            title="Всё необходимое для здоровья улыбки."
            lead="Полный цикл стоматологической помощи — от профилактики до сложной хирургии, для взрослых и детей."
          />
        </div>

        <div ref={listRef} className={`${styles.list} reveal`}>
          {services.map((service, index) => (
            <a
              key={service.num}
              className={styles.row}
              href="#contact"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
            >
              <span className={styles.num}>{service.num}</span>
              <span className={styles.body}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </span>
              <span className={styles.arrow}>
                <Icon name="arrow-up-right" />
              </span>
            </a>
          ))}

          <div className={styles.stage} aria-hidden="true">
            {services.map((service, index) => (
              <div
                key={service.num}
                className={[styles.preview, activeIndex === index && styles.previewActive]
                  .filter(Boolean)
                  .join(' ')}
              >
                <img src={service.previewSrc} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
