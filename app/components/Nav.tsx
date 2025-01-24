"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();
  const navList = [
    { name: 'Home', route: '/' },
    { name: 'Counter', route: '/counter' },
    { name: 'AddList', route: '/addList' },
    { name: 'TestNav', route: '/testnav' },
    { name: 'Quotes', route: '/quotes' }
  ];

  return (
    <nav className={styles.nav}>
      {navList.map((navItem, index) => (
        <Link
          key={index}
          className={`${styles.link} ${pathname === navItem.route ? styles.active : ""
            }`}
          href={navItem.route}
        >
          {navItem.name}
        </Link>
      ))}
    </nav>
  );
};
