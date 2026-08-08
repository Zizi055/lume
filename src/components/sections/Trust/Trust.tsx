import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { trustItems } from '@/data/trust';
import { useReveal } from '@/hooks/useReveal';
import styles from './Trust.module.scss';

/** Блок «Почему LUMÉ» — четыре причины доверять клинике. */
export function Trust() {
  const headRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section className={styles.trust}>
      <Container>
        <div ref={headRef} className="reveal">
          <SectionHead
            tag="Почему LUMÉ"
            title={<>Забота о здоровье начинается с&nbsp;доверия.</>}
            className={styles.head}
          />
        </div>

        <div ref={listRef} className={`${styles.list} reveal-stagger`}>
          {trustItems.map((item) => (
            <div key={item.num} className={styles.item}>
              <span className={styles.num}>{item.num}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
