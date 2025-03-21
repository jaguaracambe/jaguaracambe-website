import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/HealthAssessment.module.css";
import React, { useState, useEffect } from "react";


import health_intro  from '../../../public/health_assessment/health_intro.jpg'
import health_intro_mobile  from '../../../public/health_assessment/health_intro_mobile.jpg'
import researcher_working  from '../../../public/health_assessment/researcher_working.jpg'
import researcher_working_mobile  from '../../../public/health_assessment/researcher_working_mobile.jpg'
import animal_helth_avaliation from '../../../public/health_assessment/animal_helth_avaliation.jpg'
import health_assessment from '../../../public/health_assessment/health_assessment.jpg'
import health_assessment_mobile from '../../../public/health_assessment/health_assessment_mobile.jpg'
import suport_health_background from '../../../public/suport/suport_health_background.jpg'
import suport_health_background_mobile from '../../../public/suport/suport_health_background_mobile.jpg'

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

      <section className={styles.animal_helth_avaliation}> 
        <Image
            src={animal_helth_avaliation}
            alt="Lobos guarás resgatados já adultos"
            quality={100}
            style={{
              width: "100vw",
              height: "auto",
            }}
          />
      </section>

      <section className={styles.health_informative_section}>
        <div className={styles.health_informative_content}>
          <p>Com o objetivo de contribuir com informações sanitárias, necessárias tanto para a promoção de estratégias mais eficazes de conservação de fauna, quanto para o estabelecimento de políticas diretamente ligadas à saúde pública, os pesquisadores da Jaguaracambé vêm desenvolvendo projetos de pesquisa e investigação de agentes infecciosos que podem ser encontrados tanto em animais selvagens, quanto domésticos que circulam em unidades de conservação e áreas preservadas.</p>
          <p>
          Atualmente a OSC Jaguaracambé está executando o segundo ano do projeto de avaliação sanitária de carnívoros em Unidades de Conservação (UCs) do Distrito Federal, por atuação em rede com a Fundação Grupo Esquel Brasil e parceria com a Secretaria do Meio Ambiente – SEMA do Distrito Federal (SEMA – DF), com financiamento obtido por emenda parlamentar. No primeiro ano foram executadas 8 campanhas de expedição para colheita de amostras biológicas, sendo 2 financiadas por recursos obtidos pela Jaguaracambé. Nessas expedições, houve um total de 10 carnívoros silvestres capturados e 14 carnívoros domésticos, incluindo 13 cães e 1 gato. As UCs trabalhadas foram: Estação Ecológica de Águas Emendadas (ESEC-AE), Parque Nacional de Brasília (PNB) e Área de Proteção Ambiental (APA) da Cafuringa. Neste trabalho estão sendo realizadas expedições periódicas em UCs do Distrito Federal, com o objetivo de capturar as espécies alvo (Ordem Carnívora), para a colheita de amostras de material biológico, necessários para avaliação clínica e pesquisa diagnóstica de agentes infecciosos.          </p>
          <p>
            As capturas foram feitas com todo o cuidado para que não ocorra nenhum tipo de intercorrência com os animais, que são soltos após plena recuperação anestésica, no mesmo local de captura.
          </p>
        </div>

        <Image
          src={windowWidth > 650 ? health_assessment : health_assessment_mobile}
          atl="Pesquisadores da ONG Jaguaracambé fazendo avaliaçao sanitária de um Lobó Guará"
          style={{
            width: windowWidth > 650 ? "auto" : "100vw",
            height: windowWidth > 650 ? "100vh" : "auto",
          }}
        />

      </section>

      <section id="support" className={styles.supportContainer}>
        <Image
          src={
            windowWidth > 600
              ? suport_health_background
              : suport_health_background_mobile
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
