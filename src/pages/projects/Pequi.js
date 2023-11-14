import Image from "next/image";
import styles from "../../styles/Pequi.module.css";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";

import intro_backgroung_pequi from "/public/pequi/intro_pequi.jpg";
import intro_backgroung_pequi_mobile from "/public/pequi/intro_pequi_mobile.jpg";
import pequi_cub from "/public/pequi/pequi_cub.jpg";
import pequi_cub_mobile from "/public/pequi/pequi_cub_mobile.jpg";
import lobos_guará from "/public/pequi/lobos_guará.jpg";

export default function Pequi() {
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
              ? intro_backgroung_pequi
              : intro_backgroung_pequi_mobile
          }
          alt="Foto da lobo guará Pequi"
          width={"100vh"}
          height={"auto"}
          priority={true}
        />

        <div className={styles.home_content}>
          <h1>Sou eu, Pequi!</h1>
        </div>
      </section>

      <section className={styles.pequi_definition_section}>
        <div className={styles.pequi_definition_content}>
          <h1>O PROJETO</h1>
          <p>
            A Pequi foi resgatada junto com os outros quatro irmãos, após o
            óbito da mãe, em uma das áreas de monitoramento de lobos, na Bahia,
            pela equipe do Onçafari. A equipe iniciou imediatamente o
            atendimento e, com o apoio do Centro Nacional para Pesquisa e
            Conservação de Carnívoros (CENAP/ICMBio), foram resgatados, cuidados
            e encaminhados para a Fundação Jardim Zoológico de Brasília.
          </p>
          <p>
            No Zoológico permaneceram por alguns meses e receberam todo o
            atendimento clínico/nutricional necessário para garantir que
            crescessem fortes e saudáveis. E foi exatamente isso que aconteceu.
            Os cinco sobreviveram! Isso não é comum em vida livre. Apesar da
            fêmea conseguir gerar até cinco filhotes, dificilmente os cinco
            chegariam à fase adulta. Por este motivo, a reinserção de todos no
            mesmo local não seria o mais indicado.
          </p>
        </div>

        <Image
          src={windowWidth > 650 ? pequi_cub : pequi_cub_mobile}
          atl="Lobo guará Pequi quando era apenas uma filhote"
          style={{
            width: windowWidth > 650 ? "auto" : "100vw",
            height: windowWidth > 650 ? "100vh" : "auto",
          }}
        />
      </section>

      <section className={styles.pequi_informative_section}>
        <Image
          src={lobos_guará}
          alt="Grupo de educaçao ambiental"
          style={{
            width: "100vw",
            height: "auto",
          }}
        />
        <div className={styles.informative_content}>
          <p>
            Desde o resgate, a ideia original sempre foi trabalhar para que
            esses filhotes pudessem ter uma segunda chance. Há anos os
            especialistas que participam do Plano de Ação Nacional para
            Conservação de Canídeos estabeleceram como ação necessária para a
            conservação do lobo-guará, a criação de protocolos para reabilitação
            e soltura de filhotes resgatados. As ameaças à espécie são muitas e,
            a cada ano, aumentam os casos de resgate e chegada desses pequenos
            órfãos.
          </p>
          <p>
            Tínhamos Instituições envolvidas nesse processo, profissionais que
            decidiram abraçar essa causa e cinco filhotes que mereciam esse
            esforço. Foi então que três projetos surgiram. Dois deles no Estado
            da Bahia, pela própria equipe do Onçafari e do Parque Vida Cerrado,
            e um, em Brasília, pela equipe da Jaguaracambé, com a reabilitação e
            a soltura da Pequi.
          </p>
          <p>
            O projeto contou com a construção de um recinto de reabilitação onde
            a Pequi ficou por cerca de 14 meses. Este recinto, construído dentro
            da própria área de soltura, localizado na APA da Cafuringa, no
            Instituto Teosófico de Brasília (ITB), possibilitou que ela tivesse
            contato não apenas com o ambiente, mas com os outros animais já
            residentes no local.
          </p>
        </div>
      </section>

      <footer>
        © Copyright Jaguaracambé - Associação para Conservação da Biodiversidade
      </footer>
    </main>
  );
}
