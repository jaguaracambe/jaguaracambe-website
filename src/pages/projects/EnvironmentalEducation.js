import Image from "next/image";
import styles from "../../styles/EnvironmentalEducation.module.css";
import Header from "../../components/Header";
import React, { useState, useEffect } from 'react';
import kid_learning from '../../../public/education/kid_learning.jpg'
import kid_learning_mobile from '../../../public/education/kid_learning_mobile.jpg'



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

      </section>

      <footer>Powered by link</footer>
    </main>
  );
}
