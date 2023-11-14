import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/Monitoring.module.css";
import React, { useState, useEffect } from "react";


import monitoring_intro  from '../../../public/monitoring/monitoring_intro.jpg'
import monitoring_intro_mobile  from '../../../public/monitoring/monitoring_intro_mobile.jpg'
import researcher_working from '../../../public/monitoring/researcher_working.jpg'
import researcher_working_mobile from '../../../public/monitoring/researcher_working_mobile.jpg'
import monitoring_animal from '../../../public/monitoring/monitoring_animal.jpg'
import monitoring_animal_mobile from '../../../public/monitoring/monitoring_animal_mobile.jpg'



export default function Monitoring() {

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
              ? monitoring_intro
              : monitoring_intro_mobile
          }
          alt="Pesquisador da ONG Jaguaracambé trabalhando no projeto de AVALIAÇÃO SANITÁRIA"
          width={"100%"}
          height={"auto"}
          priority={true}
        />

        <div className={styles.home_content}>
          <h1>Monitoramento</h1>
        </div>
      </section>

      <section className={styles.monitoring_definition_section}>
        <Image
          src={windowWidth > 650 ? researcher_working : researcher_working_mobile}
          atl="Pesquisadores da ONG Jaguaracambé fazendo avaliaçao sanitária de um Lobó Guará"
          style={{
            width: windowWidth > 650 ? "auto" : "100vw",
            height: windowWidth > 650 ? "100vh" : "auto",
          }}
        />

        <div className={styles.monitoring_definition_content}>
          <h1>O PROJETO</h1>
          <p>
          Nossos projetos são desenvolvidos de forma interligada, portanto, nesse momento o monitoramento de fauna é realizado em conjunto com o projeto de avaliação sanitária, simultaneamente as expedições nas três unidades de conservação estudadas: Estação Ecológica de Águas Emendadas, Parque Nacional de Brasília e Área de Proteção Ambiental da Cafuringa.
          </p>
          <p>
          O monitoramento é realizado através de armadilhas fotográficas, que é um dispositivo que registra fotos e vídeos, funciona por sensor de movimento e calor, fica ativo 24h, por vários dias e armazena os arquivos em cartão SD. O método de monitoramento por armadilha fotográfica é eficiente nos estudos de mamíferos de médio e grande porte e permite identificar com precisão as espécies. O equipamento é instalado em locais com maior probabilidade de registros das espécies do local e esses locais são selecionados de acordo com os indícios da fauna, como fezes e pegadas.
          </p>
        </div>
      </section>

      <section className={styles.monitoring_informative_section}>
        <Image
          src={windowWidth > 650 ? monitoring_animal : monitoring_animal_mobile}
          alt="Pequi em um recinto"
          style={{
            width: "100vw",
            height: "auto",
          }}
        />
        <div className={styles.monitoring_informative_content}>
          <p>
          Este trabalho é importante para a produção de dados relevantes para uma grande diversidade de pesquisas. Estimar a riqueza e composição de espécies, identificar espécies ameaçadas, endêmicas, raras ou cinegéticas, produzir lista de espécies, identificar possíveis impactos as espécies e produzir estratégias de conservação são alguns dos dados que este tipo de estudo pode gerar.           </p>
          <p>
          Além disso, esses dados são de grande importância para o projeto de avaliação sanitária, pois através deles são selecionados os locais de instalação das armadilhas de captura, proporcionando assim uma maior chance de captura, uma vez que as espécies alvo foram registradas nas armadilhas fotográficas          
          </p>
        </div>
      </section>




      <footer>  
      © Copyright Jaguaracambé - Associação para Conservação da Biodiversidade
      </footer>
    </main>
  );
}
