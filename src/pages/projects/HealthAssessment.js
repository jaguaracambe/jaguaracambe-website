import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/HealthAssessment.module.css";
import React, { useState, useEffect } from "react";


import health_intro  from '../../../public/health_assessment/health_intro.jpg'
import health_intro_mobile  from '../../../public/health_assessment/health_intro_mobile.jpg'


export default function HealthAssessment() {

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className={styles.homepage_container}>
      <Header />
      <section className={styles.home_intro_section}>
        <Image
          src={
            windowWidth > 650
              ? health_intro
              : health_intro_mobile
          }
          alt="Pesquisador da ONG Jaguaracambé trabalhando no projeto de AVALIAÇÃO SANITÁRIA"
          width={"100%"}
          height={"auto"}
          priority={true}
          objectFit="cover"
        />

        <div className={styles.home_content}>
          <h1>AVALIAÇÃO SANITÁRIA</h1>
        </div>
      </section>

      <footer>Powered by 
        link
      </footer>
    </main>
  );
}
