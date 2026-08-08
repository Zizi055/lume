import type { Service } from '@/types';
import kidsPreview from '@/assets/images/service-preview-kids.jpg';

// Превью-фото лежат на Unsplash: в демо-проекте это дешевле, чем тащить
// шесть тяжёлых картинок в репозиторий. Локально хранится только детское фото.
const unsplash = (id: string, crop = '') =>
  `https://images.unsplash.com/${id}?w=520&h=620&fit=crop${crop}&q=80&auto=format`;

export const services: Service[] = [
  {
    num: '01',
    title: 'Терапия',
    description: 'Лечение кариеса и профилактика осложнений без лишней боли.',
    previewSrc: unsplash('photo-1664529845836-433c172142ca'),
  },
  {
    num: '02',
    title: 'Имплантация и хирургия',
    description: 'Удаление и имплантация с бережным подходом к каждому случаю.',
    previewSrc: unsplash('photo-1593022356769-11f762e25ed9'),
  },
  {
    num: '03',
    title: 'Ортодонтия',
    description: 'Брекеты и элайнеры для ровного и уверенного результата.',
    previewSrc: unsplash('photo-1656514894252-fb336a3ad6a6'),
  },
  {
    num: '04',
    title: 'Детская стоматология',
    description: 'Первый визит без слёз — специально для маленьких пациентов.',
    previewSrc: kidsPreview,
  },
  {
    num: '05',
    title: 'Эстетическая стоматология',
    description: 'Безопасное отбеливание и реставрация формы зубов.',
    previewSrc: unsplash('photo-1489278353717-f64c6ee8a4d2', '&crop=faces'),
  },
  {
    num: '06',
    title: 'Гигиена и профилактика',
    description: 'Профессиональная чистка и уход за полостью рта.',
    previewSrc: unsplash('photo-1607613009820-a29f7bb81c04'),
  },
];

/** Список услуг для выпадающего поля в форме записи. */
export const serviceNames = services.map((service) => service.title);
