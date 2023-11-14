import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/HealthAssessment.module.css";
import React, { useState, useEffect } from "react";


import health_intro  from '../../../public/health_assessment/health_intro.jpg'
import health_intro_mobile  from '../../../public/health_assessment/health_intro_mobile.jpg'
import researcher_working  from '../../../public/health_assessment/researcher_working.jpg'
import researcher_working_mobile  from '../../../public/health_assessment/researcher_working_mobile.jpg'


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

      <section className={styles.health_definition_section}>
        <Image
          src={windowWidth > 650 ? researcher_working : researcher_working_mobile}
          atl="Pesquisadores da ONG Jaguaracambé fazendo avaliaçao sanitária de um Lobó Guará"
          style={{
            width: windowWidth > 650 ? "auto" : "100vw",
            height: windowWidth > 650 ? "100vh" : "auto",
          }}
        />

        <div className={styles.health_definition_content}>
          <h1>O PROJETO</h1>
          <p>
          A proximidade das áreas preservadas com áreas urbanas e rurais vêm possibilitando um contato maior entre as espécies de animais silvestres com os animais domésticos e humanos, esse fator aliado à crise da biodiversidade e à diminuição das espécies, favorece a adaptação de microrganismos causadores de doenças, o que consequentemente pode facilitar o surgimento de novas enfermidades. Além disso, o estabelecimento de doenças infecciosas pode contribuir para a extinção local de várias espécies de animais selvagens, o que por sua vez, também ocasiona a redução das populações de espécies.
          </p>
          <p>
          Todos esses fatores estão diretamente relacionados ao conceito de Saúde Única, que reconhece a importância do equilíbrio entre a saúde humana, animal e ambiental para que sejam estabelecidas políticas públicas adequadas de prevenção e controle de enfermidades.
          </p>
        </div>
      </section>

      <footer>Powered by 
        link
      </footer>
    </main>
  );
}
