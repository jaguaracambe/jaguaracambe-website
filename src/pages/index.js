import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import LazyYoutube from "../components/LazyYoutube";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

import jaguaracambe from "/public/home/jaguaracambé.jpeg"

import jaguaracambe_mobile from "/public/home/jaguaracambé_mobile.jpg"
import species_background from "/public/home/species_background.jpg"
import species_background_mobile from "/public/home/species_background_mobile.jpg"
import canids from "/public/home/species/canids.jpg"
import felids from "/public/home/species/felids.jpg"
import procyonids from "/public/home/species/procyonids.jpg"
import mephitids from "/public/home/species/mephitids.jpg"
import mustelid from "/public/home/species/mustelid.jpg"

import support_jaguaracambé from '/public/suport/suport_jaguaracambé.jpg'
import support_jaguaracambé_mobile from '/public/suport/suport_jaguaracambé_mobile.jpg'



export default function Home() {

  const [windowWidth, setWindowWidth] = useState(null);

  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const projects = [
    {
      title: "EDUCAÇÃO AMBIENTAL",
      description:
        "A Jaguaracambé tem como um de seus alicerces a Educação Ambiental, tanto como um projeto sólido aplicável, quanto como uma finalidade maior intrínseca e inserida em todos os nossos projetos. A educação produz conhecimento e este conhecimento nos possibilita entender melhor o nosso mundo, suas complexidades, sua biodiversidade e beleza.",
      banner: "/projects_banners/environmental_education.jpg",
      page_source: "/projects/EnvironmentalEducation"
    },
    {
      title: "sou eu, pequi",
      description:
        "Nós acreditamos neste projeto porque entendemos que a Pequi pode ser uma grande embaixadora da sua espécie e do Cerrado. Novos projetos podem surgir a partir desse trabalho e desejamos que essa história sensibilize muitas pessoas. Precisamos entender que conservação não se faz sozinho e que a nossa biodiversidade precisa de nós!",
      banner: "/projects_banners/it's_me_pequi.jpg",
      page_source: "/projects/Pequi",
    },
    {
      title: "AVALIAÇÃO SANITÁRIA",
      description:
        "Com o objetivo de contribuir com informações sanitárias, os pesquisadores da Jaguaracambé vêm desenvolvendo projetos de pesquisa e investigação de agentes infecciosos que podem ser encontrados tanto em animais selvagens, quanto domésticos que circulam em unidades de conservação e áreas preservadas.",
      banner: "/projects_banners/health_assessment.jpg",
      page_source: "/projects/HealthAssessment",
    },
    {
      title: "MONITORAMENTO",
      description:
        "Com o objetivo de contribuir com informações sanitárias, os pesquisadores da Jaguaracambé vêm desenvolvendo projetos de pesquisa e investigação de agentes infecciosos que podem ser encontrados tanto em animais selvagens, quanto domésticos que circulam em unidades de conservação e áreas preservadas.",
      banner: "/projects_banners/monitoring.jpg",
      page_source: "/projects/Monitoring",
    },
  ];

  const species = [
    {
      title: "CANÍDEOS",
      link: '/species/Canids',
      banner: canids,
    },
    {
      title: "FELÍDEOS",
      link:'/species/Felids',
      banner: felids,
    },
    {
      title: "MEFITÍDEOS",
      link:'/species/Mephitids',
      banner: mephitids,
    },
    {
      title: "mustelídeos",
      link:'/species/Mustelid',
      banner: mustelid,
    },
    {
      title: "PROCIONÍDEOS",
      link:'/species/Procyonids',
      banner: procyonids,
    }
  ];

  const members = [
    {
      "image_background": "/members/Ana Paula.png",
      "position": "Presidente",
      "name": "Ana Paula N. Quadros",
      "border_color": "#0F2102"
    },
    {
      "image_background": "/members/George.png",
      "position": "Secretário Geral",
      "name": "George Magno Sousa",
      "border_color": "#EE6B0C"
    },
    {
      "image_background": "/members/Izabelle.png",
      "position": "Diretora de Pesquisa",
      "name": "Izabelle Thayná Soares",
      "border_color": "#512200"
    },
    {
      "image_background": "/members/Ana Raquel.png",
      "position": "Relações Institucionais",
      "name": "Ana Raquel Farias",
      "border_color": "#224A04"
    },
    {
      "image_background": "/members/Bryam.png",
      "position": "Gestor de Projetos",
      "name": "Bryam Amorim Santana",
      "border_color": "#EE6B0C"
    },
    {
      "image_background": "/members/Filipe.png",
      "position": "Diretor de Ed. Ambiental",
      "name": "Filipe Martins Neves",
      "border_color": "#512200"
    },
    {
      "image_background": "/members/Ane Beatriz.png",
      "position": "Captação de Recurso",
      "name": "Ane Beatriz E. Teixeira",
      "border_color": "#224A04"
    },
    {
      "image_background": "/members/Jessica.png",
      "position": "Tesoureira",
      "name": "Jessica Cabral Carvalho",
      "border_color": "#EE6B0C"
    },
    {
      "image_background": "/members/Marisa.png",
      "position": "Suplente Geral",
      "name": "Marisa Vieira Carvalho",
      "border_color": "#512200"
    },
    {
      "image_background": "/members/Wericles.png",
      "position": "Monitoramento",
      "name": "WERICLES RIBEIRO",
      "border_color": "#EE6B0C"
    },
    {
      "image_background": "/members/Luiz.png",
      "position": "Comportamentalista",
      "name": "LUIZ FERNANDO",
      "border_color": "#EE6B0C"
    },
    {
      "image_background": "/members/Izadora.png",
      "position": "Comunicação e Marketing",
      "name": "Izadora N. de Quadros",
      "border_color": "#224A04"
    },
    {
      "image_background": "/members/Mateus Henrique.png",
      "position": "Desenvolvedor de Software",
      "name": "Mateus Henrique",
      "border_color": "#EE6B0C"
    }
  ];


  return (
    <main className={styles.homepage_container}>
      <Header />
      <section className={styles.home_intro_section}>
        <div className={styles.image_wrapper}>
          <Image
            src={windowWidth > 600 ? jaguaracambe : jaguaracambe_mobile}
            alt="Description of Image"
            priority={true}
          />
        </div>
        <div className={styles.home_content}>
          <h1>JAGUARACAMBÉ</h1>
          <p>Associação para Conservação da Biodiversidade</p>
        </div>
      </section>

      <section id="about_section" className={styles.about_section}>
        <h1>QUEM SOMOS</h1>
        <p>
          A jaguaracambé é uma associação não governamental que visa desenvolver
          e apoiar ações para a conservação da biodiversidade. Nossa equipe é
          formada por pesquisadores, educadores, especialistas em tecnologia e
          um time de voluntários que, juntos, trabalham pela preservação das
          espécies com o objetivo de contribuir para a manutenção da Saúde
          Única.
        </p>
        <div className={styles.info_cards}>
          <div className={styles.info_card}>
            <h2>NOSSA MISSÃO</h2>
            <p>
              Desenvolver pesquisas e projetos que tenham como objetivo promover
              a conservação da biodiversidade.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 77 79"
              fill="none"
            >
              <path
                d="M7.70662 19.8072L7.70653 19.8072C6.09867 20.0079 4.53173 21.1748 3.40753 23.353C2.2895 25.5192 1.73202 28.4995 2.12594 31.7622C2.51989 35.0251 3.76944 37.7767 5.36611 39.5996C6.97033 41.4311 8.76157 42.1754 10.3665 41.9751L7.70662 19.8072ZM7.70662 19.8072C9.31146 19.6068 11.1027 20.351 12.707 22.1825M7.70662 19.8072L12.707 22.1825M76.4337 38.8795L74.4834 38.4368C75.2814 34.9215 75.1086 31.6247 74.2829 29.1663C73.4441 26.6686 72.0721 25.3574 70.6709 25.0284C69.2765 24.7011 67.4918 25.2625 65.6694 27.1251C63.8734 28.9606 62.2979 31.8421 61.4997 35.3579C60.7017 38.8732 60.8745 42.17 61.7002 44.6284C62.539 47.1261 63.9109 48.4374 65.3122 48.7665L76.4337 38.8795ZM76.4337 38.8795L74.4834 38.4368C73.6853 41.9526 72.1098 44.8342 70.3138 46.6697M76.4337 38.8795L70.3138 46.6697M12.707 22.1825C14.3037 24.0054 15.5533 26.757 15.9472 30.0199M12.707 22.1825L15.9472 30.0199M15.9472 30.0199C16.3411 33.2826 15.7836 36.2629 14.6655 38.4291M15.9472 30.0199L14.6655 38.4291M14.6655 38.4291C13.5413 40.6073 11.9744 41.7742 10.3666 41.9751L14.6655 38.4291ZM70.3138 46.6697C68.4914 48.5323 66.7066 49.0938 65.3123 48.7665L70.3138 46.6697ZM49.8945 33.4143L49.8944 33.4142C48.4818 33.3138 46.8512 32.1324 45.5686 29.38C44.3197 26.7002 43.63 22.9364 43.9182 18.7449C44.2064 14.5533 45.4045 10.925 47.0066 8.44994C48.6517 5.90861 50.424 4.97265 51.8337 5.07292C53.2464 5.17341 54.877 6.35494 56.1596 9.10722C57.4084 11.787 58.0982 15.5508 57.81 19.7422C57.5218 23.9339 56.3237 27.5622 54.7216 30.0372C53.0765 32.5786 51.3042 33.5145 49.8945 33.4143ZM28.4564 2C29.8708 2 31.5765 3.06104 33.0441 5.71435C34.4731 8.29806 35.4194 12.0032 35.4194 16.2051C35.4194 20.407 34.4731 24.1122 33.0441 26.6959C31.5765 29.3492 29.8708 30.4103 28.4564 30.4103C27.042 30.4103 25.3362 29.3492 23.8687 26.6959C22.4396 24.1122 21.4934 20.407 21.4934 16.2051C21.4934 12.0032 22.4396 8.29806 23.8687 5.71435C25.3362 3.06104 27.042 2 28.4564 2ZM36.5735 73.9874C35.0104 73.9477 33.4742 74.1212 32.0032 74.4182C29.9495 74.833 26.6372 75.4841 23.4642 76.0306C20.2178 76.5897 17.331 77 16.0077 77C14.3992 77 11.448 76.3517 8.94671 74.582C6.53924 72.8788 4.56317 70.1625 4.56317 65.8333C4.56317 63.0724 5.1261 61.3185 5.90003 60.1021C6.67791 58.8794 7.79167 58.0048 9.25018 57.2061C10.1944 56.689 11.1071 56.2854 12.1121 55.8409C12.8027 55.5354 13.5369 55.2107 14.3549 54.8166C16.2157 53.9202 18.1952 52.7882 19.9235 51.0304C21.5694 49.3566 22.7806 47.5658 23.8261 45.9226C24.0424 45.5826 24.2493 45.2531 24.4501 44.9332C25.2509 43.6579 25.9552 42.536 26.778 41.5133C27.7672 40.2837 28.8527 39.3035 30.2892 38.6115C31.7338 37.9156 33.6639 37.4487 36.4235 37.4487C41.6627 37.4487 44.6257 39.5948 47.0858 42.5516C48.187 43.8752 49.1586 45.3275 50.1984 46.8821C50.3732 47.1434 50.5499 47.4076 50.7295 47.6745C51.9462 49.4828 53.2797 51.3927 54.9153 53.0561C56.5322 54.7005 58.2625 56.0147 59.8852 57.1634C60.4366 57.5538 60.9617 57.916 61.4651 58.2632C62.4938 58.9729 63.4317 59.6199 64.3176 60.3161C66.8183 62.2813 68.2839 64.1701 68.2839 67.3526C68.2839 70.8396 67.0405 73.0951 64.9117 74.5712C62.656 76.1353 59.1501 77 54.3496 77C52.0869 77 50.6585 76.8363 49.6173 76.6142C48.6397 76.4056 47.9491 76.1369 47.0829 75.7998C47.031 75.7796 46.9784 75.7591 46.9251 75.7384C44.866 74.9386 42.5379 74.1391 36.5735 73.9874Z"
                stroke="#FEECC0"
                strokeWidth="4"
              />
            </svg>
          </div>

          <div className={styles.info_card}>
            <h2>VISÃO</h2>
            <p>
              Ser reconhecida pelas ações desenvolvidas para a conservação da
              biodiversidade atuando como fonte de inspiração para transformação
              de pessoas.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 81 108"
              fill="none"
            >
              <path
                d="M38.0002 5.27054e-05C38.0003 1.76544e-05 38.0005 0 38.0007 0H42.8174C55.5819 0.0137109 65.9259 10.3209 65.9395 23.0386V23.0759C65.9395 24.3127 66.44 25.4332 67.2501 26.2467L67.2498 26.2464C68.0559 27.0529 69.1713 27.5521 70.4038 27.5521H70.4532C75.5909 27.5521 79.7565 31.6979 79.7648 36.8152V36.8374C79.7648 42.0905 76.3774 46.5553 71.6602 48.1811L71.5758 48.2064L69.7646 48.84C67.5169 49.5986 65.928 51.6816 65.928 54.1346C65.928 57.2106 68.427 59.7051 71.5124 59.7121H71.5806C76.7913 59.7518 81 63.9702 81 69.1679C81 70.3938 80.7659 71.5652 80.3397 72.6402L80.3543 72.5984C80.3557 72.5942 80.362 72.5952 80.362 72.5997C80.362 72.6002 80.3619 72.6007 80.3617 72.6012C76.8019 81.3741 68.3231 87.4512 58.42 87.4512H22.6741C12.7313 87.4512 4.21855 81.3505 0.700375 72.7007L0.643431 72.5425C0.236034 71.5273 0 70.3509 0 69.1197C0 63.9232 4.20649 59.7059 9.41141 59.664H9.49926C11.0314 59.664 12.4185 59.0459 13.4234 58.0463C14.4426 57.0353 15.0735 55.636 15.0735 54.09C15.0735 51.6361 13.4844 49.5521 11.2758 48.8036L11.2555 48.7976C11.2428 48.7938 11.2297 48.792 11.2165 48.792C11.2009 48.792 11.1855 48.7893 11.1708 48.7842L9.42506 48.1729C4.63346 46.525 1.25013 42.0757 1.23584 36.8369V36.8353V36.8258C1.23584 31.7141 5.38623 27.5685 10.5121 27.5521H10.5138C12.9401 27.4772 14.8783 25.4997 14.8783 23.071V23.0383V23.0401C14.8943 10.3219 25.2366 0.0165585 37.9983 0.000105411H37.9996C37.9998 0.000105411 38 8.77565e-05 38.0002 5.27054e-05ZM70.4194 32.352H70.3909C67.8324 32.352 65.5169 31.3153 63.8446 29.6406C63.8444 29.6405 63.8443 29.6403 63.8442 29.6401C63.8441 29.64 63.844 29.6398 63.8438 29.6397C62.1621 27.9546 61.1223 25.6316 61.1223 23.0668V23.0383V23.0399C61.1223 12.9662 52.927 4.79988 42.8175 4.79988H38.0003C27.8908 4.79988 19.6953 12.9663 19.6953 23.0399V23.0569C19.6953 28.1126 15.6459 32.2257 10.6027 32.3516L10.591 32.3518H10.5429C8.06982 32.3545 6.06565 34.3515 6.063 36.8156C6.07412 39.9575 8.10327 42.6245 10.9257 43.5972L10.9637 43.6086C10.9722 43.6111 10.981 43.6124 10.9899 43.6124C11.0002 43.6124 11.0104 43.6141 11.0201 43.6175L12.7637 44.2267C16.9592 45.6302 19.9279 49.5126 19.9279 54.086C19.9279 59.8171 15.2652 64.4634 9.51334 64.4634H9.44454C6.87357 64.4761 4.79435 66.5559 4.79435 69.1194C4.79435 69.7237 4.90993 70.301 5.12014 70.8308L5.10913 70.7992C7.93339 77.8017 14.6916 82.6555 22.5875 82.6555C22.6207 82.6555 22.6539 82.6555 22.687 82.6553H58.3623C58.3814 82.6555 58.4041 82.6555 58.4269 82.6555C66.3099 82.6555 73.0589 77.8175 75.8468 70.9585L75.8918 70.833C76.0876 70.3388 76.2011 69.7662 76.2011 69.1674C76.2011 66.6057 74.1251 64.5273 71.558 64.5114H71.5003C68.6463 64.5114 66.0624 63.3594 64.1911 61.4968C62.2954 59.6163 61.1224 57.014 61.1224 54.1386C61.1224 49.579 64.0721 45.7058 68.1738 44.3106L68.2472 44.2889L70.0344 43.6649C72.9155 42.6742 74.9479 39.9953 74.9479 36.8435V36.8239V36.8249C74.9479 34.3587 72.9428 32.359 70.4682 32.3562H70.4679L70.4194 32.352ZM42.9137 105.591C42.9137 106.922 41.8354 108 40.5052 108C39.1751 108 38.0967 106.922 38.0967 105.591V27.7526C38.0967 26.4225 39.1751 25.3441 40.5052 25.3441C41.8354 25.3441 42.9137 26.4225 42.9137 27.7526V105.591ZM40.5005 43.7351C39.7654 44.8352 38.279 45.1335 37.1764 44.4023L27.3542 37.8887C26.246 37.1539 25.9459 35.6584 26.6847 34.5529C27.4198 33.4528 28.9062 33.1545 30.0088 33.8857L39.831 40.3993C40.9391 41.1341 41.2393 42.6295 40.5005 43.7351ZM40.5037 71.2726C39.7648 72.3797 38.2685 72.6786 37.161 71.9403L27.3479 65.3989C26.2404 64.6606 25.943 63.1631 26.6844 62.0576C27.4223 60.9572 28.9113 60.6608 30.0144 61.3946L39.8337 67.9267C40.9436 68.6651 41.2437 70.1639 40.5037 71.2726ZM43.9071 57.5124C42.9691 58.4471 41.4517 58.4471 40.5137 57.5124C39.5708 56.573 39.5708 55.0463 40.5136 54.1068L50.933 43.7245C51.8711 42.7897 53.3885 42.7897 54.3265 43.7245C55.2693 44.6639 55.2693 46.1906 54.3265 47.1301L43.9071 57.5124Z"
                fill="#FEECC0"
              />
            </svg>
          </div>

          <div className={styles.info_card}>
            <h2>VALORES</h2>
            <p>
              Respeito à vida; ética; disciplina; transparência;
              comprometimento; inclusão; empatia; integridade; fundamento
              científico; didática; consciência ambiental.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 93 92"
              fill="none"
            >
              <path
                d="M54.175 91.9998C54.1751 91.9997 54.175 91.9996 54.1749 91.9996H24.3208C23.166 91.9996 22.2299 91.0635 22.2299 89.9088C22.2299 88.754 23.166 87.8179 24.3208 87.8179H54.1583C59.1405 87.8083 63.6498 85.8083 66.9218 82.5775L86.7869 62.8819C87.9812 61.7224 88.7216 60.1075 88.7216 58.3211C88.7216 54.7967 85.84 51.9397 82.2851 51.9397C80.4918 51.9397 78.8698 52.6669 77.7027 53.8401L56.3022 75.0579C55.6772 75.6776 54.8327 76.0252 53.9526 76.0252H52.7082C51.5524 76.0252 50.6154 75.0882 50.6154 73.9324C50.6154 72.7781 51.5779 71.8774 52.662 71.481C54.9325 70.6508 56.5514 68.4864 56.5514 65.9472C56.5514 65.612 56.5234 65.2832 56.469 64.9634L56.4738 64.9979C55.8373 62.1488 53.3108 60.0494 50.2898 60.0494C50.2397 60.0494 50.1897 60.0499 50.1398 60.0512L50.1473 60.0509H38.4816C35.4286 60.0509 32.4161 59.352 29.675 58.0076L29.4758 57.9099C27.2029 56.7716 24.5213 56.105 21.6827 56.105C17.489 56.105 13.6378 57.5601 10.6148 59.9887L10.6478 59.9631C6.71474 63.0897 4.21799 67.8534 4.21799 73.195C4.21799 73.2845 4.21872 73.3738 4.22008 73.4629L4.2199 73.4494C4.2199 73.7173 4.00276 73.9344 3.73492 73.9344H0.449502C0.202399 73.9344 0.00208417 73.7341 0.00208417 73.487C0.000724928 73.3989 0 73.2952 0 73.1911C0 66.5348 3.11284 60.5994 7.97384 56.7377L8.0158 56.7053C11.7231 53.7276 16.4973 51.9248 21.6963 51.9248C25.2167 51.9248 28.5423 52.7513 31.4864 54.2195L31.3611 54.1629C33.6505 55.2854 36.1664 55.8691 38.7162 55.8691H50.1005C50.1606 55.8678 50.2314 55.8673 50.3026 55.8673C55.362 55.8673 59.5893 59.4003 60.6113 64.1138L60.6166 64.1429C60.6214 64.1693 60.6238 64.196 60.6238 64.2228V64.2403C60.6238 64.2547 60.6251 64.2692 60.6276 64.2834C60.663 64.487 60.9159 64.5747 61.0626 64.4292L74.7282 50.8802C76.6641 48.9182 79.3618 47.7018 82.3459 47.7018C88.23 47.7018 93 52.4311 93 58.265C93 61.2363 91.7627 63.921 89.7712 65.8403L89.7686 65.8427L69.9072 85.5349C65.8742 89.5167 60.3167 91.9836 54.178 92H54.1751C54.175 92 54.1749 91.9999 54.175 91.9998ZM50.4467 73.9344C50.4467 75.0891 49.5106 76.0252 48.3558 76.0252H32.3766C31.2218 76.0252 30.2857 75.0891 30.2857 73.9343C30.2857 72.7795 31.2218 71.8434 32.3766 71.8434H48.3558C49.5106 71.8434 50.4468 72.7796 50.4467 73.9344ZM46.3976 0C60.9097 0 72.6742 11.6642 72.6742 26.0526C72.6742 40.441 60.9097 52.1053 46.3976 52.1053C31.8854 52.1053 20.1209 40.441 20.1209 26.0526C20.1377 11.6709 31.8921 0.0167108 46.3959 8.9794e-05L46.3976 0ZM46.3976 47.9233C58.5803 47.9233 68.4565 38.1315 68.4565 26.0526C68.4565 13.9737 58.5802 4.18203 46.3976 4.18203C34.2148 4.18203 24.3386 13.974 24.3386 26.0529C24.3531 38.126 34.2206 47.9095 46.3964 47.9238H46.3972C46.3974 47.9238 46.3976 47.9236 46.3976 47.9233ZM46.3976 0C48.6119 0 51.7457 1.46355 54.0949 8.44725C55.6653 13.4358 56.5698 19.1717 56.5698 25.117C56.5698 25.4459 56.5671 25.7743 56.5617 26.102L56.5622 26.0528C56.5671 26.3311 56.5698 26.6594 56.5698 26.9884C56.5698 32.9337 55.6652 38.6695 53.985 44.068L54.0948 43.6581C51.7454 50.6416 48.6117 52.1053 46.3974 52.1053C44.1831 52.1053 41.0492 50.6418 38.7 43.6581C37.1296 38.6695 36.2249 32.9337 36.2249 26.9883C36.2249 26.6595 36.2276 26.331 36.2331 26.0033L36.2325 26.0528C36.2276 25.7743 36.2249 25.4461 36.2249 25.117C36.2249 19.1718 37.1295 13.4359 38.8097 8.03747L38.7001 8.44734C41.0492 1.46403 44.1829 0.000178091 46.3972 8.9798e-05C46.3973 8.97926e-05 46.3974 5.90737e-05 46.3976 0ZM46.3976 47.9233C47.1272 47.9233 48.7131 46.4346 50.0923 42.3365C51.5268 37.7442 52.3529 32.4648 52.3529 26.994C52.3529 26.663 52.3499 26.3327 52.3439 26.003L52.3446 26.0524C52.35 25.7723 52.3529 25.4419 52.3529 25.1108C52.3529 19.6403 51.5268 14.3608 49.9915 9.38863L50.0923 9.76848C48.7132 5.67028 47.1274 4.18158 46.3976 4.18158C45.6677 4.18158 44.0821 5.67028 42.7028 9.76848C41.2683 14.3607 40.4422 19.6401 40.4422 25.111C40.4422 25.4419 40.4452 25.7723 40.4513 26.102L40.4505 26.0526C40.4451 26.3326 40.4422 26.663 40.4422 26.994C40.4422 32.4647 41.2683 37.7441 42.8036 42.7163L42.7028 42.3364C44.082 46.4177 45.6677 47.9233 46.3976 47.9233ZM70.5652 26.0526C70.5653 27.2073 69.6292 28.1434 68.4745 28.1434H24.3204C23.1657 28.1434 22.2296 27.2074 22.2296 26.0527C22.2296 24.898 23.1657 23.9619 24.3204 23.9619H68.4745C69.6291 23.9619 70.5652 24.8979 70.5652 26.0526Z"
                fill="#FEECC0"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className={styles.volunteer_section}>
  <h2>Seja um Voluntário!</h2>
  <p>
    Junte-se a nós e ajude a preservar o Cerrado Brasileiro. O seu apoio pode fazer uma grande diferença!
  </p>
  <div className={styles.buttons_container}>
    <a href="https://drive.google.com/file/d/1yHmo9Pf25t0QqK4j3L38Y28FJytHHun-/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.volunteer_button}>
      Edital
    </a>
    <a href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__ntAa1dUMkVFSE42Nk9UQUlPRDQ4UENBSFJYSzE1SC4u&route=shorturl" target="_blank" rel="noopener noreferrer" className={styles.volunteer_button}>
      Inscreva-se
    </a>
  </div>
</section>


      <section className={styles.institurional_video_section}>
        <h1>Vídeo Institucional</h1>
        <div>
        <LazyYoutube lassName={styles.institurional_video}/> 
        </div>
        
      </section>

      <section id="projects" className={styles.projects_container}>
        <div className={styles.project_content}>
          <h1>Projetos da jaguaracambé</h1>
          <p>
            A Jaguaracambé vêm atuando em quatro linhas de pesquisa interligadas
            que estão diretamente relacionadas à obtenção de informações
            necessárias para a conservação das espécies e à conscientização da
            população quanto a importância da manutenção da biodiversidade.
            Atualmente, as quatros linhas contam com o desenvolvimento de
            projetos científicos e educacionais relacionados ao monitoramento de
            espécies da fauna silvestre, pesquisa de avaliação sanitária,
            treinamento de lobo-guará para a reabilitação e soltura e ao
            programa de educação ambiental nos âmbitos formal e informal.
          </p>
        </div>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <Image
                  className={styles.projectBackground}
                  src={project.banner}
                  alt={project.title}
                  fill={true} // Makes the image take the full size of the parent div
                />
              </div>
              <div className={styles.projectContent}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Link
                  href={project.page_source}
                  className={styles.learnMoreButton}
                >
                  Saiba Mais +
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="species" className={styles.species_container}>
        <Image
          src={
            windowWidth > 600 ? species_background : species_background_mobile
          }
          alt="Description of Image"
          style={{
            width: "100vw",
            height: "auto",
          }}
        />

        <div className={styles.species_content}>
          <h1>ESPÉCIES</h1>
          <p>
            Nossa ONG tem esse nome em homenagem ao cachorro do mato vinagre,
            também conhecido como jaguaracambé. Essa é uma espécie ameaçada de
            extinção e por ser um animal de difícil detecção, ainda temos poucas
            informações sobre sua ecologia. É um compromisso da Jaguaracambé não
            apenas preservar o cachorro do mato vinagre mas também expandir
            entendimento que temos a seu respeito.
          </p>
          <p>
            Apesar do cachorro do mato vinagre ser o animal que carrega o nome
            da nossa ONG não nos limitamos à ele, nosso principal objetivo é a
            preservação da biodiversidade, o que implica na luta pela
            conservação do máximo de espécies possível.
          </p>
        </div>

        <div className={styles.species_cards_container}>
          {species.map((specie, index) => (
            <div key={index} className={styles.species_card}>
              <div className={styles.species_banner_backgroung}>
                <Image
                  src={specie.banner}
                  alt={`${specie.title} Banner`}
                  className={styles.species_banner}
                  width={"100%"}
                  height={"auto"}
                />
              </div>
              <Link href={specie.link} className={styles.species_link}>
                <p>{specie.title}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.membersContainer}>
        <h1>MEMBROS</h1>
        <ul className={styles.memberList}>
          {members.map((member, index) => (
            <li
              key={index}
              className={styles.memberItem}
              style={{ border: `2px solid ${member.border_color}` }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image_background}
                  alt={member.name}
                  width={237}
                  height={237}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.description}>
                <h4>{member.position}</h4>
                <h3>{member.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="support" className={styles.supportContainer}>
        <Image
          src={
            windowWidth > 600
              ? support_jaguaracambé
              : support_jaguaracambé_mobile
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
            Ajude a desenvolver pesquisas e projetos que tenham como objetivo
            promover a conservação da biodiversidade.
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
