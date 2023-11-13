import Image from "next/image";
import styles from "../../styles/EnvironmentalEducation.module.css";
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';


export default function EnvironmentalEducation() {

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
        <div className={styles.image_wrapper}>
          <Image
            src={windowWidth > 650 ? "/education/intro_education.png" : "/education/intro_education_mobile.jpg"}
            alt="Description of Image"
            width={windowWidth > 650 ? 1599 : 300}
            height={windowWidth > 650 ? 582 : 1292}
            priority={true}
          />
        </div>
        <div className={styles.home_content}>
          <h1>JAGUARACAMBÉ</h1>
          <p>Associação para Conservação da Biodiversidade</p>
        </div>
      </section>

      <section>
        
      </section>

      <footer>Powered by 
        link
      </footer>
    </main>
  );
}
