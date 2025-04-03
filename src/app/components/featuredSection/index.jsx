import styles from './featuredSection.module.css';
import InteractionBar from '../interactionBar';

const featuredMemes = [
    {
        id: 8,
        title: "O código em produção",
        image: "https://i.imgur.com/aVy8tFB.jpg",
        author: "DevHumor",
        category: "Programação",
        trending: true,
    },
    {
        id: 9,
        title: "Modo escuro vs Modo claro",
        image: "https://i.imgur.com/YnGsVzS.jpg",
        author: "UIDesigner",
        category: "Tecnologia",
        trending: true,
    },
    {
        id: 10,
        title: "POV: Aula online",
        image: "https://i.imgur.com/4MigGYQ.jpg",
        author: "ZoomExpert",
        category: "Escola",
        trending: false,
    },
];

const FeaturedMemes = () => {
    return (
        <section className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
            <div className={styles.featuredGrid}>
                {featuredMemes.map((meme) => (
                    // COMPONENTE: FeaturedMemeCard
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
                                <span className={styles.featuredAuthor}>
                                    Por {meme.author}
                                </span>
                                <span className={styles.featuredCategory}>
                                    {meme.category}
                                </span>
                            </div>
                        </div>
                    </div>
                    // FIM COMPONENTE: FeaturedMemeCard
                ))}
            </div>
        </section>
    )
}

export default FeaturedMemes;