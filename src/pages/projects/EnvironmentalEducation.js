import Image from "next/image";
import styles from "../../styles/EnvironmentalEducation.module.css";
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';
import intro_education from '../../../public/education/intro_education.jpeg'
import intro_education_mobile from '../../../public/education/intro_education_mobile.jpg'
import kid_learning from '../../../public/education/kid_learning.jpg'
import kid_learning_mobile from '../../../public/education/kid_learning_mobile.jpg'
import group_background from '../../../public/education/group_background.jpg'
import suport_education_background from '../../../public/suport/suport_education_background.jpg'
import suport_education_background_mobile from '../../../public/suport/suport_education_background_mobile.jpg'


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
            src={windowWidth > 650 ? intro_education : intro_education_mobile}
            alt="Estudantes no zoologico aprendendo sobre educaçao ambiental com a Jaguaracambé"
            width={"100vh"}
            height={"auto"}
            priority={true}
          />
        </div>
        <div className={styles.home_content}>
          <h1>EDUCAÇÃO AMBIENTAL</h1>
        </div>
      </section>

      <section className={styles.education_definition_section}>
        <Image
          src={windowWidth > 650 ? kid_learning : kid_learning_mobile}
          atl="Estudante no zoológico aprendendo sobre educaçao ambiental coma Jaguaracambé"
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
          alt="Grupo de educaçao ambiental"
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
          src={windowWidth > 600 ? suport_education_background : suport_education_background_mobile}
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
          <div className={styles.qrCodePlaceholder}>
            <img
              src="/suport/qrcode.jpeg"
              alt="Link do intagram da Pequi"
            />
          </div>
          <h3>PIX</h3>
          <div className={styles.pixEmail}>
            <img src="/suport/email.svg" alt="Icone de email" />
            <p>Pix: financeiro@jaguaracambe.org.br</p>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <h2>CONHEÇA</h2>
          <a href="your-linkedin-url" className={styles.productsButton}>
            <h3>NOSSOS PRODUTOS</h3>
          </a>
          <p>Acesse nossas redes</p>
          <div className={styles.socialMedia}>
            <a href="your-linkedin-url">
              <img
                src="/suport/linkedin.svg"
                alt="link do linkedin da Jaguaracamé"
              />
            </a>
            <a href="your-instagram-url">
              <img
                src="/suport/instagram.svg"
                alt="link do intagram da Jaguaracambé link"
              />
            </a>
            <a href="your-facebook-url">
              <img
                src="/suport/facebook.svg"
                alt="link do facebook da Jaguaracambé"
              />
            </a>
          </div>
          <p>Acesse também as redes do projeto Sou eu, Pequi!</p>
          <div className={styles.pequi_media}>
            <a href="your-instagram-url">
              <img
                src="/suport/instagram_pequi.svg"
                alt="Link do intagram da Pequi"
              />
            </a>
            <p>Sou Eu, Pequi!</p>
          </div>
        </div>
      </section>

      <footer className="suport_footer">
        © Copyright Jaguaracambé - Associação para Conservação da Biodiversidade
      </footer>
    </main>
  );
}
