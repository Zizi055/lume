import type { Article } from '@/types';
import blogFeatured from '@/assets/images/blog-featured-diagnostics.jpg';

const thumb = (id: string, crop = '') =>
  `https://images.unsplash.com/${id}?w=220&h=220&fit=crop${crop}&q=80&auto=format`;

/** Главная статья блога — большая карточка слева. */
export const featuredArticle: Article = {
  tag: 'Технологии',
  title: 'Как современная диагностика делает лечение точнее',
  excerpt:
    '3D-снимки и цифровое сканирование против интуиции: разбираем, что изменилось в подходе к лечению за последние годы.',
  date: '12 июня 2026',
  readingTime: '6 мин чтения',
  imageSrc: blogFeatured,
};

export const articles: Article[] = [
  {
    tag: 'Гигиена',
    title: 'Почему важна гигиена полости рта',
    date: '28 мая 2026',
    imageSrc: thumb('photo-1686030969145-6bf9f3155472'),
  },
  {
    tag: 'Первый визит',
    title: 'Что происходит на первой консультации',
    date: '14 мая 2026',
    imageSrc: thumb('photo-1704455306251-b4634215d98f'),
  },
  {
    tag: 'Мнение врача',
    title: 'Почему важно объяснять план лечения',
    date: '2 мая 2026',
    imageSrc: thumb('photo-1522556189639-b150ed9c4330', '&crop=faces'),
  },
];
