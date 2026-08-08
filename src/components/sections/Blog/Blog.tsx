import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { articles, featuredArticle } from '@/data/articles';
import { useReveal } from '@/hooks/useReveal';
import styles from './Blog.module.scss';

/** Блог: одна большая статья и три компактные карточки сбоку. */
export function Blog() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section id="blog">
      <Container>
        <div ref={headRef} className="reveal">
          <SectionHead
            tag="Блог"
            title="Полезно почитать"
            lead="Разбираем мифы и отвечаем на частые вопросы о здоровье зубов."
          />
        </div>

        <div ref={gridRef} className={`${styles.grid} reveal`}>
          <article className={`${styles.card} ${styles.featured}`}>
            <a className={styles.art} href="#blog">
              <img src={featuredArticle.imageSrc} alt="" loading="lazy" />
            </a>
            <span className={styles.tag}>{featuredArticle.tag}</span>
            <h3 className={styles.title}>
              <a href="#blog">{featuredArticle.title}</a>
            </h3>
            <p className={styles.excerpt}>{featuredArticle.excerpt}</p>
            <span className={styles.meta}>
              {featuredArticle.date} · {featuredArticle.readingTime}
            </span>
          </article>

          <div className={styles.side}>
            {articles.map((article) => (
              <article key={article.title} className={`${styles.card} ${styles.compact}`}>
                <a className={styles.art} href="#blog">
                  <img src={article.imageSrc} alt="" loading="lazy" />
                </a>
                <span className={styles.compactBody}>
                  <span className={styles.tag}>{article.tag}</span>
                  <h3 className={styles.title}>
                    <a href="#blog">{article.title}</a>
                  </h3>
                  <span className={styles.meta}>{article.date}</span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
