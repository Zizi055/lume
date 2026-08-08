import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { contacts } from '@/data/navigation';
import styles from './Footer.module.scss';

const serviceLinks = [
  'Терапия',
  'Имплантация и хирургия',
  'Ортодонтия',
  'Детская стоматология',
];

const aboutLinks = [
  { label: 'Пространство', href: '#clinic' },
  { label: 'Врачи', href: '#doctors' },
  { label: 'Истории пациентов', href: '#stories' },
  { label: 'Блог', href: '#blog' },
];

const socials = [
  { name: 'vk', label: 'VK' },
  { name: 'telegram', label: 'Telegram' },
  { name: 'instagram', label: 'Instagram' },
] as const;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div>
            <a href="#top" className={styles.logo}>
              LUMÉ
            </a>
            <p className={styles.about}>
              Современная стоматология для всей семьи — понятные цены, спокойная атмосфера и врачи,
              которые объясняют каждый шаг.
            </p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a key={social.name} className={styles.social} href="#" aria-label={social.label}>
                  <Icon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.colTitle}>Услуги</h4>
            <ul className={styles.list}>
              {serviceLinks.map((label) => (
                <li key={label}>
                  <a href="#services">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>О клинике</h4>
            <ul className={styles.list}>
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={styles.colTitle}>Контакты</h4>
            <ul className={styles.list}>
              <li>
                <a href={contacts.phoneHref}>
                  <Icon name="phone" className={styles.colIcon} />
                  {contacts.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contacts.email}`}>
                  <Icon name="mail" className={styles.colIcon} />
                  {contacts.email}
                </a>
              </li>
              <li>
                <span>
                  <Icon name="pin" className={styles.colIcon} />
                  {contacts.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>LUMÉ © 2026. Все права защищены.</span>
        </div>
      </Container>
    </footer>
  );
}
