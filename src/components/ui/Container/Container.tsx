import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Тег обёртки — иногда контейнер сам должен быть сеткой секции. */
  as?: ElementType;
}

/** Контентная колонка с общими полями. Ширину задаёт миксин container. */
export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return <Tag className={[styles.container, className].filter(Boolean).join(' ')}>{children}</Tag>;
}
