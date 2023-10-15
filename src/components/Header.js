import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/Logo.png" alt="YLogo da ONG jaguaracambé" width={77} height={77} />
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.link}>SOBRE A ONG</a>
        <a href="#" className={styles.link}>PROJETOS</a>
        <a href="#" className={styles.link}>ESPÉCIES</a>
        <a href="#" className={styles.link}>APOIE</a>
      </nav>
    </header>
  );
}

export default Header;
