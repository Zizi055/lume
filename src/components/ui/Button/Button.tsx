import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

interface BaseProps {
  variant?: 'primary';
  block?: boolean;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Кнопка и ссылка-кнопка в одном компоненте: визуально это одно и то же,
 * а тег выбирается по наличию href — так ссылки остаются ссылками
 * и работают правой кнопкой и клавиатурой.
 */
export function Button({ variant = 'primary', block, children, className, ...rest }: ButtonProps) {
  const classes = [styles.btn, styles[variant], block && styles.block, className]
    .filter(Boolean)
    .join(' ');

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
