import Image from "next/image";
import styles from "../../styles/EnvironmentalEducation.module.css";
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';
import kid_learning from '../../../public/education/kid_learning.jpg'
import kid_learning_mobile from '../../../public/education/kid_learning_mobile.jpg'
import group_background from '../../../public/education/group_background.jpg'
import suport_education_background from '../../../public/suport/suport_education_background.jpg'


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
            src={
              windowWidth > 650
                ? "/education/intro_education.png"
                : "/education/intro_education_mobile.jpg"
            }
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

      <section className={styles.education_definition_section}>
        <Image
          src={windowWidth > 650 ? kid_learning : kid_learning_mobile}
          style={{
            width: windowWidth > 650 ? "auto" : "100vw",
            height: windowWidth > 650 ? "100vh" : "auto",
          }}
        />

        <div className={styles.educantion_definition_content}>
          <h1>O que é educação ambiental?</h1>
          <p>
            A Educação Ambiental compreende os processos por meio dos quais o
            indivíduo e a coletividade constroem valores sociais, conhecimentos,
            habilidades, atitudes e competências voltadas para a conservação do
            meio ambiente, bem de uso comum do povo, essencial à sadia qualidade
            de vida e sua sustentabilidade.
          </p>
          <p>
            A Jaguaracambé tem como um de seus alicerces a Educação Ambiental,
            tanto como um projeto sólido aplicável, quanto como uma finalidade
            maior intrínseca e inserida em todos os nossos projetos. A educação
            produz conhecimento e este conhecimento nos possibilita entender
            melhor o nosso mundo, suas complexidades, sua biodiversidade e
            beleza.
          </p>
        </div>
      </section>

      <section className={styles.education_informative_section}>
        <Image
          src={group_background}
          style={{
            width: "100vw",
            height: "auto",
          }}
        />
        <div className={styles.informative_content}>
          <p>
            Entendemos que para conservar é necessário, antes de qualquer coisa,
            conhecer pois conservamos aquilo que conhecemos e temos afinidade,
            aquilo que está conectado conosco. Assim, o Projeto de Educação
            Ambiental da ONG Jaguacambé tem como objetivo maior diminuir o
            “analfabetismo ambiental”, ou seja, a falta de conhecimento sobre o
            meio ambiente. O nosso grande desafio é promover a mudança de
            valores, posturas e atitudes, em prol da sustentabilidade e
            conservação da biodiversidade do meio ambiente como um todo.
          </p>
          <p>
            Dentro do nosso projeto iremos trabalhar a Educação Ambiental em
            duas vertentes: em âmbito Formal (dentro ambiente de ensino),
            prioritariamente no Ensino Fundamental, e Não-Formal (fora do
            ambiente de ensino), para o público em geral, com disseminação de
            conhecimentos a respeito do meio ambiente, preservação ambiental e
            sustentabilidade, promovendo momentos de reflexões e de interações
            com o meio natural, favorecendo o despertar de uma consciência
            crítica.
          </p>
          <p>
            Atualmente a Jaguaracambé vem desenvolvendo um trabralho no Centro
            de Ensino Fundamental 113 – Recanto das Emas / DF juntamente com o
            corpo docente da escola com o objetivo de disseminar conhecimentos a
            respeito do meio ambiente, preservação ambiental e sustentabilidade,
            em especial do Cerrado no Distrito Federal, e dessa forma,
            proporcionar momentos de aprendizagem e reflexão, em busca da
            transformação pessoal.
          </p>
        </div>
      </section>

      <section className={styles.supportContainer}>
        <Image
          src={suport_education_background}
          style={{
            width: "100vw",
            height: "auto",
          }}
        />
        <div className={styles.supportHeader}>
          <h1>APOIE A JAGUARACAMBÉ!</h1>
          <p>
            Desenvolver pesquisas e projetos que tenham como objetivo promover a
            conservação da biodiversidade.
          </p>
        </div>
        <div className={styles.supportBody}>
          {/* Placeholder for the image */}
          <div className={styles.qrCodePlaceholder}>
            {/* Assuming you want to place a QR code or image here */}
          </div>
          <div className={styles.pixEmail}>
              <p>Pix: financeiro@jaguaracambe.org.br</p>
              {/* Add any additional contact details here */}
            </div>
        </div>
        <div className={styles.contactInfo}>
            <button className={styles.discoverButton}>CONHEÇA</button>
            <button className={styles.productsButton}>NOSSOS PRODUTOS</button>
            <div className={styles.socialMedia}>
              {/* Icons or text for social media links */}
              <a href="your-linkedin-url">LinkedIn</a>
              <a href="your-instagram-url">Instagram</a>
              <a href="your-facebook-url">Facebook</a>
            </div>
          </div>

      </section>

      <footer>Powered by link</footer>
    </main>
  );
}
