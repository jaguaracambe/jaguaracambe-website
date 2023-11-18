import Image from "next/image";
import styles from "../../styles/Pequi.module.css";
import Header from "../../components/Header";
import React, { useState, useEffect } from "react";

import intro_backgroung_pequi from "/public/pequi/intro_pequi.jpg";
import intro_backgroung_pequi_mobile from "/public/pequi/intro_pequi_mobile.jpg";
import pequi_cub from "/public/pequi/pequi_cub.jpg";
import pequi_cub_mobile from "/public/pequi/pequi_cub_mobile.jpg";
import lobos_guará from "/public/pequi/lobos_guará.jpg";
import lobos_guara_adultos from "/public/pequi/lobós_guaras_adultos.jpg";
import monitoring_background from "/public/pequi/monitoring_background.jpg";
import monitoring_background_mobile from "/public/pequi/monitoring_background_mobile.jpg";
import pequi_in_nature from "/public/pequi/pequi_in_nature.jpg";


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
          width={"100vw"}
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
          alt="Lobos guarás resgatados quando eram filhotes"
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

      <section className={styles.lobos_guara_adultos}> 
        <Image
            src={lobos_guara_adultos}
            alt="Lobos guarás resgatados já adultos"
            style={{
              width: "100vw",
              height: "auto",
            }}
          />
      </section>

      <section className={styles.monitoring_section}>
        <Image
          src={windowWidth > 650 ? monitoring_background : monitoring_background_mobile}
          atl="Lobo guará Pequi com o seu colar de monitoramento"
          style={{
            width: windowWidth > 650 ? "auto" : "100vw",
            height: windowWidth > 650 ? "100vh" : "auto",
          }}
        />

        <div className={styles.monitoring_section_content}>
          <p>
          O monitoramento da Pequi, foi realizado por câmeras para reduzir ao máximo o contato com humanos, e foi possível vê-la interagindo com lobos de vida livre que se aproximavam do recinto. Após verificadas as condições para soltura (habilidade de caça, redução do imprinting humano, consumo de frutos nativos, e etc), ela recebeu um colar GPS, doado pelo Instituto Smithsonian, para o monitoramento que permite rastrear sua localização enquanto ela se desloca pelo Cerrado.
          </p>
          <p>
          Cerca de trinta dias antes da soltura, o colar foi instalado e foi realizado um check-up geral. Além disso, a equipe da Jaguaracambé esteve em campo, fazendo um levantamento sanitário dos carnívoros do Cerrado, inclusive na área de soltura da Pequi. Também foram realizadas atividades com a comunidade local para explicar o projeto e os passos a seguir no período pós-soltura. Este trabalho é muito importante para protegê-la e conscientizar a população da importância da conservação do lobo-guará e do Cerrado.
          </p>
          <p>
          No dia 17 de abril de 2023 a Pequi foi solta. Foi realizado uma soltura branda, em que o recinto foi aberto e acompanhada a sua livre e espontânea saída do recinto. Após isso, o monitoramento através do colar GPS segue sendo feito até o presente momento.
          </p>
          <p>
          Todo esse cuidado foi muito importante para minimizar os riscos para a soltura da Pequi. Isso significa que não há riscos? Infelizmente não. As ameaças para os lobos de vida livre são as mesmas que a Pequi vai enfrentar e, por este motivo, foi preciso ter a convicção de que ela estava pronta para este desafio.
          </p>
        </div>
      </section>

      <section className={styles.pequi_nature_section}>
        <Image
          src={pequi_in_nature}
          alt="Pequi em um recinto"
          style={{
            width: "auto",
            height: "100vh",
          }}
        />
        <div className={styles.pequi_nature_content}>
          <p>
          Durante esses primeiros meses de monitoramento já foi possível visualizar todo seu deslocamento por uma grande área do Cerrado e seu progresso de exploração. Além disso, são feitas visualizações periódicas da Pequi de forma presencial través do rastreamento por rádiotelemetria, para avaliação de suas condições. Pequi segue bem e enfrentando com êxito os desafios da vida livre.
          </p>
          <p>
          Nós acreditamos neste projeto porque entendemos que a Pequi pode ser uma grande embaixadora da sua espécie e do Cerrado. Novos projetos podem surgir a partir desse trabalho e desejamos que essa história sensibilize muitas pessoas. Precisamos entender que conservação não se faz sozinho e que a nossa biodiversidade precisa de nós!
          </p>
          <p>
          Ao longo de todo o processo de monitoramento teremos a enorme alegria de compartilhar com todos vocês a evolução da Pequi. E desejamos ver ainda muitas Pequizinhas espalhadas por este Cerrado lindo, que tanto amamos.
          </p>
        </div>
      </section>


      <footer>
        © Copyright Jaguaracambé - Associação para Conservação da Biodiversidade
      </footer>
    </main>
  );
}
