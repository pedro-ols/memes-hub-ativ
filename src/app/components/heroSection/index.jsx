import styles from "./heroSection.module.css";

const HeroSection = ({ memeOfTheDay }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <span className={styles.heroTag}>Meme do Dia</span>
        <h2 className={styles.heroTitle}>{memeOfTheDay.title}</h2>
        <p className={styles.heroDescription}>{memeOfTheDay.description}</p>
        <div className={styles.heroAuthor}>
          <img src={memeOfTheDay.authorAvatar} alt={memeOfTheDay.author} />
          <span>Por {memeOfTheDay.author}</span>
        </div>
        <div className={styles.heroStats}>
          <span>❤️ {memeOfTheDay.likes}</span>
          <span>💬 {memeOfTheDay.comments}</span>
        </div>
        <button className={styles.heroButton}>Ver meme completo</button>
      </div>
      <div className={styles.heroImageContainer}>
        <img
          src={memeOfTheDay.image}
          alt={memeOfTheDay.title}
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default HeroSection;
