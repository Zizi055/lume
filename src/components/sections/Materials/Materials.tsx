import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { SectionHead } from '@/components/ui/SectionHead';
import { materials } from '@/data/materials';
import { useReveal } from '@/hooks/useReveal';
import styles from './Materials.module.scss';

/** Памятки в PDF: короткий блок перед подвалом. */
export function Materials() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className={styles.materials}>
      <Container>
        <div ref={headRef} className="reveal">
          <SectionHead
            tag="Материалы"
            title={<span className={styles.title}>Полезные материалы</span>}
            tight
          />
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {materials.map((material) => (
            <a key={material.title} className={styles.card} href="#materials">
              <span className={styles.badge}>
                <Icon name="doc" />
              </span>
              <span className={styles.body}>
                <span className={styles.cardTitle}>{material.title}</span>
                <span className={styles.link}>
                  Скачать PDF
                  <Icon name="arrow-right" />
                </span>
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
