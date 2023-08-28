import Link from 'next/link';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.headerList}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page1">Page 1</Link>
        </li>
        <li>
          <Link href="/page2">Page 2</Link>
        </li>
      </ul>
    </div>
  );
}
