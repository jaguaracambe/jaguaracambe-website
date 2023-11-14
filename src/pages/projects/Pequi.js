import Image from "next/image";
import styles from "../../styles/Pequi.module.css";
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';

import intro_backgroung_pequi from "/public/pequi/intro_pequi.jpg"
import intro_backgroung_pequi_mobile from "/public/pequi/intro_pequi_mobile.jpg"

export default function Pequi() {

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className={styles.homepage_container}>
      <Header />
      <section className={styles.home_intro_section}>
  
        <Image
            src={windowWidth > 650 ? intro_backgroung_pequi : intro_backgroung_pequi_mobile}
            alt="Foto da lobo guará Pequi"
            width={"100vh"}
            height={"auto"}
            priority={true}
          />
      
        <div className={styles.home_content}>
          <h1>JAGUARACAMBÉ</h1>
          <p>Associação para Conservação da Biodiversidade</p>
        </div>
      </section>

      <footer>Powered by 
        link
      </footer>
    </main>
  );
}
