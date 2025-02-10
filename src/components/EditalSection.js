// components/EditalSection.js
import styles from '../styles/Home.module.css';

export default function EditalSection() {
  return (
    <div className={styles.project_content}>
      <h2>Edital de Voluntários Bolsistas</h2>
      <p>
        Confira o edital para voluntários bolsistas e inscreva-se no link abaixo:
      </p>
      <div className={styles.buttonContainer}>
        <a
          href="https://drive.google.com/file/d/1yHmo9Pf25t0QqK4j3L38Y28FJytHHun-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Baixar Edital
        </a>
        <a
          href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__ntAa1dUMkVFSE42Nk9UQUlPRDQ4UENBSFJYSzE1SC4u&route=shorturl"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inscricaoButton}
        >
          Formulário de Inscrição
        </a>
      </div>
    </div>
  );
}
