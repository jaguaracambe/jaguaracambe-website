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
import suport_monitoring_background from '../../../public/suport/suport_monitoring_background.jpg'
import suport_monitoring_background_mobile from '../../../public/suport/suport_monitoring_background_mobile.jpg'


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

      <section className={styles.volunteer_section}>
        <h2>Parceria Jaguaracambé & Brasília Ambiental</h2>
        <p>
          A Jaguaracambé firmou uma parceria com o Instituto Brasília Ambiental para fortalecer o monitoramento da fauna do Cerrado. Esse acordo de cooperação tem duração de três anos e busca expandir os estudos sobre médios e grandes mamíferos na região, contribuindo para a preservação da biodiversidade.
        </p>
        <p>
          O monitoramento da fauna é essencial para identificar espécies, mapear corredores ecológicos e desenvolver estratégias eficazes de conservação. Além disso, a parceria inclui iniciativas de educação ambiental, intercâmbio científico e capacitação de profissionais na área.
        </p>
        <p>Para mais detalhes sobre o Acordo de Cooperação e o Plano de Trabalho, clique nos botões abaixo:</p>

        <div className={styles.buttons_container}>
          <a className={styles.volunteer_button} href="http://www.ibram.df.gov.br/wp-content/uploads/2024/07/SEI_GDF___131838358___Acordo_de_Cooperacao-1-2024_tarja_ocred-Jaguaracambe.pdf" target="_blank" rel="noopener noreferrer">
            Acordo de Cooperação nº1/2024
          </a>
          <a className={styles.volunteer_button} href="http://www.ibram.df.gov.br/wp-content/uploads/2024/11/SEI_131845526_Plano_de_Trabalho_2-Ibram-jaguaracambe.pdf" target="_blank" rel="noopener noreferrer">
            Plano de Trabalho
          </a>
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

      <section id="support" className={styles.supportContainer}>
        <Image
          src={
            windowWidth > 600
              ? suport_monitoring_background
              : suport_monitoring_background_mobile
          }
          className={styles.suport_background}
          alt="Apoie a Jaguaracambé"
          style={{
            width: "100vw",
            height: "auto",
          }}
        />
        <div className={styles.supportHeader}>
          <h1>APOIE A JAGUARACAMBÉ!</h1>
          <p>
            Ajude a desenvolver pesquisas e projetos que tenham como objetivo promover a
            conservação da biodiversidade.
          </p>
        </div>
        <div className={styles.supportBody}>
          <div className={styles.qrCodePlaceholder}>
            <img src="/suport/qrcode.jpeg" alt="Link do intagram da Pequi" />
          </div>
          <h3>PIX</h3>
          <div className={styles.pixEmail}>
            <img src="/suport/email.svg" alt="Icone de email" />
            <p>Pix: financeiro@jaguaracambe.org.br</p>
          </div>
        </div>

        <div className={styles.contactInfo}>
          <h2>CONHEÇA</h2>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdQsxd2s2MCrYGraOecGpehMmnmwz5VGrDIl3xKxhBvLvq_0w/viewform"
            className={styles.productsButton}
          >
            <h3>NOSSOS PRODUTOS</h3>
          </a>
          <p>Acesse nossas redes</p>
          <div className={styles.socialMedia}>
            <a href="https://www.linkedin.com/company/jaguaracambe/mycompany/">
              <img
                src="/suport/linkedin.svg"
                alt="link do linkedin da Jaguaracamé"
                width={50}
                height={50}
              />
            </a>
            <a href="https://www.instagram.com/ongjaguaracambe/">
              <img
                src="/suport/instagram.svg"
                alt="link do intagram da Jaguaracambé link"
                width={50}
                height={50}
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100090318610135&locale=hi_IN&paipv=0&eav=AfZVgdwZeN8Hf86JasIvQ3tQ09bePS50C47O_64AJBzNE0WpjbXxRqJFx8qg8iI20N0">
              <img
                src="/suport/facebook.svg"
                alt="link do facebook da Jaguaracambé"
                width={50}
                height={50}
              />
            </a>
          </div>
          <p>Acesse também as redes do projeto Sou eu, Pequi!</p>
          <div className={styles.pequi_media}>
            <a href="https://www.instagram.com/soueupequi/">
              <img
                src="/suport/instagram_pequi.svg"
                alt="Link do intagram da Pequi"
              />
            </a>
            <p>Sou Eu, Pequi!</p>
          </div>
        </div>
      </section>


      <footer>  
      © Copyright Jaguaracambé - Associação para Conservação da Biodiversidade
      </footer>
    </main>
  );
}
