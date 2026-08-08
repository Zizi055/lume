/** Пункт главного меню. Ведёт на якорь секции на этой же странице. */
export interface NavLink {
  label: string;
  href: `#${string}`;
}

/** Причина выбрать клинику — блок «Почему LUMÉ». */
export interface TrustItem {
  num: string;
  title: string;
  description: string;
}

/** Строка в списке услуг. Превью показывается при наведении на десктопе. */
export interface Service {
  num: string;
  title: string;
  description: string;
  previewSrc: string;
}

/** Врач в списке команды. */
export interface Doctor {
  name: string;
  role: string;
  experience: string;
  photoSrc: string;
}

/** История пациента. Крупная карточка (`featured`) идёт с фотографией. */
export interface Story {
  meta: string[];
  quote: string;
  featured?: boolean;
  photoSrc?: string;
}

/** Карточка статьи в блоге. */
export interface Article {
  tag: string;
  title: string;
  date: string;
  excerpt?: string;
  readingTime?: string;
  imageSrc: string;
}

/** PDF-материал для скачивания. */
export interface Material {
  title: string;
}

/** Данные формы записи на консультацию. */
export interface AppointmentFormValues {
  name: string;
  phone: string;
  concern: string;
  service: string;
}
