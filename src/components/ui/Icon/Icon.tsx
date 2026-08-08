import { icons, type IconName } from './icons';

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

/**
 * Иконка 24×24. Декоративная по умолчанию: aria-hidden, чтобы скринридер
 * не читал её вместо подписи рядом.
 */
export function Icon({ name, className, size }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  );
}
