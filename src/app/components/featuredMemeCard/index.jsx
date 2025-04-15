import styles from "./featuredMemeCard.module.css";

const FeaturedMemeCard = ({ meme }) => {
  return (
    <div key={meme.id} className={styles.featuredCard}>
      <div className={styles.featuredImageContainer}>
        <img
          src={meme.image}
          alt={meme.title}
          className={styles.featuredImage}
        />
        {meme.trending && (
          <span className={styles.trendingBadge}>🔥 Trending</span>
        )}
      </div>
      <div className={styles.featuredContent}>
        <h3 className={styles.featuredTitle}>{meme.title}</h3>
        <div className={styles.featuredInfo}>
          <span className={styles.featuredAuthor}>Por {meme.author}</span>
          <span className={styles.featuredCategory}>{meme.category}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMemeCard;
