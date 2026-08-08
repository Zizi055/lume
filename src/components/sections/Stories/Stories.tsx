import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { stories } from '@/data/stories';
import { useReveal } from '@/hooks/useReveal';
import styles from './Stories.module.scss';

/** Отзывы пациентов: одна карточка с фотографией, остальные — только цитата. */
export function Stories() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className={styles.stories} id="stories">
      <Container>
        <div ref={headRef} className="reveal">
          <SectionHead tag="Истории пациентов" title="Истории, которые говорят за нас." />
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          {stories.map((story) => (
            <article
              key={story.quote}
              className={[styles.story, story.featured && styles.featured]
                .filter(Boolean)
                .join(' ')}
            >
              {story.featured && story.photoSrc && (
                <div className={styles.photo}>
                  <img src={story.photoSrc} alt="Пациентка клиники LUMÉ" loading="lazy" />
                </div>
              )}

              <div className={story.featured ? styles.featuredBody : undefined}>
                <div className={styles.meta}>
                  {story.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <p className={styles.quote}>{story.quote}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
