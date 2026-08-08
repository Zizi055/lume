import clinicDetail from '@/assets/images/clinic-dentist-editorial-detail.jpg';
import clinicMain from '@/assets/images/clinic-dentist-editorial.jpg';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { SectionHead } from '@/components/ui/SectionHead';
import { useParallax } from '@/hooks/useParallax';
import { useReveal } from '@/hooks/useReveal';
import styles from './Clinic.module.scss';

/** Блок о пространстве клиники: пара кадров с лёгким смещением по скроллу. */
export function Clinic() {
  const textRef = useReveal<HTMLDivElement>();
  const galleryRef = useReveal<HTMLDivElement>();
  const { containerRef, targetRef } = useParallax<HTMLDivElement, HTMLDivElement>({
    distance: -30,
    fromCenter: true,
  });

  // Один и тот же узел одновременно наблюдается на появление и служит
  // точкой отсчёта для параллакса.
  const setGalleryNode = (node: HTMLDivElement | null) => {
    galleryRef.current = node;
    containerRef.current = node;
  };

  return (
    <section className={styles.clinic} id="clinic">
      <Container className={styles.inner}>
        <div ref={textRef} className={`${styles.text} reveal`}>
          <SectionHead
            tag="Пространство"
            title="Пространство, в котором можно расслабиться."
            tight
          />
          <p>
            Мы создали клинику, где современная медицина сочетается с ощущением спокойствия и
            человеческого внимания — от материалов до освещения.
          </p>
        </div>

        <div ref={setGalleryNode} className={`${styles.gallery} reveal-stagger`}>
          <div className={`${styles.photo} ${styles.main}`}>
            <img
              src={clinicMain}
              alt="Ассистент клиники LUMÉ готовит инструменты перед приёмом"
              loading="lazy"
            />
            <div className={styles.badge}>
              <Icon name="check-circle" />
              <span>Стерилизация по стандарту ISO 13485</span>
            </div>
          </div>

          <div ref={targetRef} className={`${styles.photo} ${styles.detail}`}>
            <img
              src={clinicDetail}
              alt="Инструменты и оборудование клиники LUMÉ крупным планом"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
