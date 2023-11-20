import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/Species.module.css";
import React, { useState, useEffect } from "react";

import mustelid  from '../../../public/species/mustelid.png'
import mustelid_mobile  from '../../../public/species/mustelid_mobile.png'


export default function Mustelid() {

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
              ? mustelid
              : mustelid_mobile
          }
          alt="Pesquisador da ONG Jaguaracambé trabalhando no projeto de AVALIAÇÃO SANITÁRIA"
          width={"100%"}
          height={"auto"}
          priority={true}
        />

        <div className={styles.home_content}>
          <p>Mustelídeos</p>
          <h1>EM BREVE!</h1>
          <h2>PÁGINA EM CONSTRUÇÃO</h2>
          
        </div>
      </section>



      <footer>  
      © Copyright Jaguaracambé - Associação para Conservação da Biodiversidade
      </footer>
    </main>
  );
}
