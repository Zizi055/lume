import { Button } from '@/components/ui/Button';
import styles from './MobileCta.module.scss';

/** Кнопка записи, закреплённая внизу экрана на мобильных. */
export function MobileCta() {
  return (
    <div className={styles.wrap}>
      <Button href="#contact" block className={styles.button}>
        Записаться
      </Button>
    </div>
  );
}
