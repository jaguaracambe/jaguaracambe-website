import styles from '../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '/public/logo.png'



const Header = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={`${styles.header} ${isActive ? styles.active : ''}`}>
      <div className={styles.top_header}>
        <div className={styles.logo}>
          <Image src={logo} alt="Logo da ONG jaguaracambé" width={49} height={49}/>
        </div>
        <button className={styles.btn_mobile} onClick={toggleMenu}>
            <span className={styles.hamburger}></span>
        </button>
      </div>
      <nav className={styles.nav}>
        <Link href="/#about_section" className={styles.link} onClick={toggleMenu}>SOBRE A ONG</Link>
        <Link href="/#projects" className={styles.link} onClick={toggleMenu}>PROJETOS</Link>
        <Link href="/#species" className={styles.link} onClick={toggleMenu}>ESPÉCIES</Link>
        <Link href="/#support" className={styles.link} onClick={toggleMenu}>APOIE</Link>
      </nav>
    </header>
  );
}

export default Header;
