import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="YLogo da ONG jaguaracambé" width={77} height={77} />
      </div>
      <nav className={styles.nav}>
        <Link href="/#about_section" className={styles.link}>SOBRE A ONG</Link>
        <Link href="/#projects" className={styles.link}>PROJETOS</Link>
        <Link href="/" className={styles.link}>ESPÉCIES</Link>
        <Link href="/" className={styles.link}>APOIE</Link>
      </nav>
    </header>
  );
}

export default Header;
