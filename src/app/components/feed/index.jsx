import styles from './feed.module.css';

const Feed = ({ navItems, logo }) =>{
    return(
      <section className={styles.feedSection}>
      <div className={styles.feedHeader}>
        <h2 className={styles.sectionTitle}>Memes Populares</h2>
        <div className={styles.feedFilters}>
          <button className={`${styles.filterButton} ${styles.active}`}>
            Recentes
          </button>
          <button className={styles.filterButton}>Mais curtidos</button>
          <button className={styles.filterButton}>Mais comentados</button>
        </div>
      </div>

      <div className={styles.feedGrid}>
        {/* Aqui mapeamos os memes do array para criar múltiplos cards */}
        {memes.map((meme) => (
          // COMPONENTE: MemeCard
          <div key={meme.id} className={styles.memeCard}>
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
          // FIM COMPONENTE: MemeCard
        ))}
      </div>

      <button className={styles.loadMoreButton}>
        Carregar mais memes
      </button>
    </section>
    );
};

export default Feed;