import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { navLinks } from '@/data/navigation';
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useScrolled } from '@/hooks/useScrolled';
import styles from './Header.module.scss';

/**
 * Липкая шапка. В самом верху страницы прозрачная, при скролле получает
 * фон со стеклом — чтобы меню читалось поверх фотографии первого экрана.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  useBodyScrollLock(menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={[styles.header, scrolled && styles.scrolled].filter(Boolean).join(' ')}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          LUMÉ
        </a>

        <nav className={styles.nav} aria-label="Основное меню">
          {navLinks.map((link) => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="#contact" className={styles.desktopCta}>
            Записаться
          </Button>

          <button
            type="button"
            className={[styles.burger, menuOpen && styles.burgerOpen].filter(Boolean).join(' ')}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Меню всегда в разметке: так якорные ссылки видит поиск, а состояние
          открытия управляет только видимостью. */}
      <nav
        id="mobile-nav"
        className={[styles.mobileNav, menuOpen && styles.open].filter(Boolean).join(' ')}
        aria-label="Мобильное меню"
      >
        {navLinks.map((link) => (
          <a key={link.href} className={styles.link} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <Button href="#contact" onClick={closeMenu}>
          Записаться
        </Button>
      </nav>
    </header>
  );
}
