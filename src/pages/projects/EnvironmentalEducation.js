import Image from "next/image";
import styles from "../../styles/EnvironmentalEducation.module.css";
import Header from "../../components/Header";

export default function EnvironmentalEducation() {

  return (
    <main className={styles.homepage_container}>
      <Header />
      <section className={styles.home_intro_section}>
        <div className={styles.image_wrapper}>
          <Image
            src={"/education/intro_education.png"}
            alt="Description of Image"
            priority={true}
            fill={true}
          />
        </div>
        <div className={styles.home_content}>
          <h1>JAGUARACAMBÉ</h1>
          <p>Associação para Conservação da Biodiversidade</p>
        </div>
      </section>

      <footer>Powered by 
        link
      </footer>
    </main>
  );
}
