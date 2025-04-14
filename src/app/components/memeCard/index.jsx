import styles from "./memeCard.module.css"

const MemeCard = ({ meme }) => {
    return(
        <div className={styles.memeCard}>
            <div className={styles.memeCardHeader}>
              <div className={styles.memeAuthor}>
                <img src={meme.authorAvatar} alt={meme.author} />
                <span>{meme.author}</span>
              </div>
              <span className={styles.memeCategory}>{meme.category}</span>
            </div>
            <img
              src={meme.image}
              alt={meme.title}
              className={styles.memeImage}
            />
            <div className={styles.memeContent}>
              <h3 className={styles.memeTitle}>{meme.title}</h3>
              <p className={styles.memeDescription}>{meme.description}</p>

              {/* COMPONENTE: InteractionBar */}
              <div className={styles.interactionBar}>
                <div className={styles.interactionButton}>
                  <span>👍</span>
                  <span>{meme.likes}</span>
                </div>
                <div className={styles.interactionButton}>
                  <span>💬</span>
                  <span>{meme.comments}</span>
                </div>
                <div className={styles.interactionButton}>
                  <span>🔄</span>
                  <span>Share</span>
                </div>
                <div className={styles.interactionButton}>
                  <span>🔖</span>
                  <span>Save</span>
                </div>
              </div>
              {/* FIM COMPONENTE: InteractionBar */}
            </div>
          </div>
    );
};

export default MemeCard;