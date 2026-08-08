import { Container } from '@/components/ui/Container';
import { SectionHead } from '@/components/ui/SectionHead';
import { doctors, leadDoctor } from '@/data/doctors';
import { useReveal } from '@/hooks/useReveal';
import styles from './Doctors.module.scss';

/** Команда клиники: крупный блок главного врача и список остальных. */
export function Doctors() {
  const headRef = useReveal<HTMLDivElement>();
  const leadRef = useReveal<HTMLDivElement>();
  const teamRef = useReveal<HTMLDivElement>();

  return (
    <section id="doctors">
      <Container>
        <div ref={headRef} className="reveal">
          <SectionHead tag="Команда" title="Люди, которым вы доверяете своё здоровье." />
        </div>

        <div ref={leadRef} className={`${styles.lead} reveal`}>
          <div className={styles.leadPhoto}>
            <img src={leadDoctor.photoSrc} alt={`${leadDoctor.name}, главный врач LUMÉ`} loading="lazy" />
          </div>

          <div>
            <span className={styles.leadEyebrow}>{leadDoctor.eyebrow}</span>
            <h3 className={styles.leadName}>{leadDoctor.name}</h3>
            <p className={styles.leadRole}>{leadDoctor.role}</p>
            <p className={styles.leadBio}>
              Дмитрий основал LUMÉ с идеей, что{' '}
              <span className="serif">хорошая стоматология — это в первую очередь разговор</span>. Он
              убеждён: если пациент понимает, что и зачем происходит, тревоги становится в разы
              меньше, а результат — устойчивее.
            </p>
          </div>
        </div>

        <div ref={teamRef} className={`${styles.team} reveal`}>
          {doctors.map((doctor) => (
            <div key={doctor.name} className={styles.row}>
              <span className={styles.avatar}>
                <img src={doctor.photoSrc} alt={doctor.name} loading="lazy" />
              </span>
              <span className={styles.rowText}>
                <span className={styles.name}>{doctor.name}</span>
                <span className={styles.role}>{doctor.role}</span>
                <span className={styles.exp}>{doctor.experience}</span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
