import { useId, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Icon } from '@/components/ui/Icon';
import { serviceNames } from '@/data/services';
import { useReveal } from '@/hooks/useReveal';
import type { AppointmentFormValues } from '@/types';
import styles from './Booking.module.scss';

const initialValues: AppointmentFormValues = {
  name: '',
  phone: '',
  concern: '',
  service: '',
};

/**
 * Форма записи на консультацию.
 *
 * Бэкенда у демо нет: проверяем данные штатной валидацией браузера
 * и показываем экран подтверждения. Когда появится API, отправка
 * добавляется в одном месте — в handleSubmit.
 */
export function Booking() {
  const revealRef = useReveal<HTMLDivElement>();
  const [values, setValues] = useState<AppointmentFormValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  // useId вместо жёстких id: гарантирует уникальность связки label + поле,
  // даже если форму когда-нибудь отрендерят на странице дважды.
  const fieldId = useId();

  const handleChange = (field: keyof AppointmentFormValues) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setValues((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.wrap}>
      <Container>
        <div ref={revealRef} className={`${styles.booking} reveal`} id="contact">
          <div className={styles.container}>
            <div className={styles.inner}>
              <div>
                <span className={styles.tag}>Запись</span>
                <h2 className={styles.title}>Давайте начнём с&nbsp;разговора.</h2>
                <p className={styles.text}>
                  Оставьте имя и телефон — администратор свяжется с вами, чтобы подобрать удобное
                  время консультации.
                </p>
              </div>

              <div className={styles.form}>
                {submitted ? (
                  <div className={styles.success} role="status">
                    <Icon name="check-circle" />
                    <span>
                      Заявка отправлена! Мы свяжемся с вами в ближайшее рабочее время, чтобы
                      подтвердить запись.
                    </span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor={`${fieldId}-name`}>Имя</label>
                        <input
                          id={`${fieldId}-name`}
                          type="text"
                          autoComplete="name"
                          placeholder="Как к вам обращаться"
                          required
                          value={values.name}
                          onChange={handleChange('name')}
                        />
                      </div>

                      <div className={styles.field}>
                        <label htmlFor={`${fieldId}-phone`}>Телефон</label>
                        <input
                          id={`${fieldId}-phone`}
                          type="tel"
                          autoComplete="tel"
                          placeholder="+7 (000) 000-00-00"
                          required
                          value={values.phone}
                          onChange={handleChange('phone')}
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor={`${fieldId}-concern`}>Что вас беспокоит?</label>
                      <textarea
                        id={`${fieldId}-concern`}
                        placeholder="Необязательно — можно рассказать в двух словах"
                        value={values.concern}
                        onChange={handleChange('concern')}
                      />
                    </div>

                    <div className={`${styles.field} ${styles.secondary}`}>
                      <label htmlFor={`${fieldId}-service`}>Услуга (необязательно)</label>
                      <select
                        id={`${fieldId}-service`}
                        value={values.service}
                        onChange={handleChange('service')}
                      >
                        <option value="">Выберите услугу</option>
                        {serviceNames.map((name) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <Button type="submit" block>
                      Записаться на консультацию
                    </Button>

                    <p className={styles.note}>
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
