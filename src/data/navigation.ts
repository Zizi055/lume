import type { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Услуги', href: '#services' },
  { label: 'Врачи', href: '#doctors' },
  { label: 'О клинике', href: '#clinic' },
  { label: 'Блог', href: '#blog' },
  { label: 'Контакты', href: '#contact' },
];

export const contacts = {
  phone: '+7 (000) 000-00-00',
  phoneHref: 'tel:+70000000000',
  email: 'hello@lume-demo.ru',
  address: 'г. Город, ул. Примерная, 0',
} as const;
