"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <Link
        className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/addList" ? styles.active : ""
        }`}
        href="/addList"
      >
        AddList
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/testnav" ? styles.active : ""
        }`}
        href="/testnav"
      >
        TestNav
      </Link>
      <Link
        className={`${styles.link} ${
          pathname === "/quotes" ? styles.active : ""
        }`}
        href="/quotes"
      >
        Quotes
      </Link>
    </nav>
  );
};
