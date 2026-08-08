import type { ReactNode } from 'react';
import styles from './SectionHead.module.scss';

interface SectionHeadProps {
  tag: string;
  title: ReactNode;
  /** Правая колонка с описанием. На мобильных уходит под заголовок. */
  lead?: ReactNode;
  tight?: boolean;
  className?: string;
}

/** Шапка секции: подпись-категория, заголовок и необязательный лид. */
export function SectionHead({ tag, title, lead, tight, className }: SectionHeadProps) {
  return (
    <div className={[styles.head, tight && styles.tight, className].filter(Boolean).join(' ')}>
      <div>
        <span className={styles.tag}>{tag}</span>
        <h2 className={styles.title}>{title}</h2>
      </div>
      {lead && <p className={styles.lead}>{lead}</p>}
    </div>
  );
}
