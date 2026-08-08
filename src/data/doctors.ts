import type { Doctor } from '@/types';

const portrait = (id: string) =>
  `https://images.unsplash.com/${id}?w=200&h=200&fit=crop&crop=faces&q=80&auto=format`;

/** Главный врач — выносится отдельным крупным блоком над списком команды. */
export const leadDoctor = {
  name: 'Дмитрий Соколов',
  eyebrow: 'Главный врач',
  role: 'Хирург-имплантолог · стаж 15 лет',
  photoSrc:
    'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=760&h=910&fit=crop&crop=faces&q=80&auto=format',
} as const;

export const doctors: Doctor[] = [
  {
    name: 'Екатерина Волкова',
    role: 'Врач-терапевт',
    experience: 'Стаж 12 лет',
    photoSrc: portrait('photo-1614436201459-156d322d38c6'),
  },
  {
    name: 'Павел Морозов',
    role: 'Детский стоматолог',
    experience: 'Стаж 7 лет',
    photoSrc: portrait('photo-1568602471122-7832951cc4c5'),
  },
  {
    name: 'Анна Лебедева',
    role: 'Врач-ортодонт',
    experience: 'Стаж 9 лет',
    photoSrc: portrait('photo-1580489944761-15a19d654956'),
  },
];
