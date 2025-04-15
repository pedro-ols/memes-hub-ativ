import styles from "./creatorsSection.module.css";

const CreatorsSection = ({ creator }) => {
  return (
    <div className={styles.creatorCard}>
      <img
        src={creator.avatar}
        alt={creator.name}
        className={styles.creatorAvatar}
      />
      <h3 className={styles.creatorName}>{creator.name}</h3>
      <p className={styles.creatorBio}>{creator.bio}</p>
      <div className={styles.creatorStats}>
        <span className={styles.creatorFollowers}>
          {creator.followers} seguidores
        </span>
      </div>
      <button className={styles.followButton}>Seguir</button>
    </div>
  );
};

export default CreatorsSection;
