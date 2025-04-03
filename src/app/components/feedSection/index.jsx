import styles from "./feedSection.module.css";
import InteractionBar from "../interactionBar";
import MemeCard from "../memeCard";

// Array de dados dos memes para serem passados como props
const memes = [
    {
        id: 1,
        title: "Programador às 3 da manhã",
        description:
            "Quando o código finalmente funciona depois de 5 horas debugando",
        image: "https://i.imgur.com/JbIMvq2.jpg",
        likes: 452,
        comments: 87,
        author: "DevMaster",
        authorAvatar: "https://i.pravatar.cc/150?img=11",
        category: "Programação",
    },
    {
        id: 2,
        title: "Vida de estudante",
        description: "Eu entrando na prova sem estudar",
        image: "https://i.imgur.com/DpEHvFs.jpg",
        likes: 231,
        comments: 56,
        author: "StudyGuru",
        authorAvatar: "https://i.pravatar.cc/150?img=12",
        category: "Escola",
    },
    {
        id: 3,
        title: "Reunião que poderia ser um e-mail",
        description: "Minha cara depois de 2 horas de reunião",
        image: "https://i.imgur.com/a1hJwXc.jpg",
        likes: 631,
        comments: 103,
        author: "CorporateJoker",
        authorAvatar: "https://i.pravatar.cc/150?img=13",
        category: "Trabalho",
    },
    {
        id: 4,
        title: "Quando a internet cai",
        description: "POV: Você no meio de uma partida importante",
        image: "https://i.imgur.com/uGdnlGj.jpg",
        likes: 842,
        comments: 152,
        author: "GamerLife",
        authorAvatar: "https://i.pravatar.cc/150?img=14",
        category: "Games",
    },
    {
        id: 5,
        title: "Segunda-feira chegando",
        description: "Ninguém está pronto para isso",
        image: "https://i.imgur.com/aNDyAyC.jpg",
        likes: 753,
        comments: 91,
        author: "WeekendWarrior",
        authorAvatar: "https://i.pravatar.cc/150?img=15",
        category: "Trabalho",
    },
    {
        id: 6,
        title: "Minha vida amorosa",
        description: "Expectativa vs Realidade",
        image: "https://i.imgur.com/gMy6q9Y.jpg",
        likes: 523,
        comments: 78,
        author: "RomanceExpert",
        authorAvatar: "https://i.pravatar.cc/150?img=16",
        category: "Relacionamentos",
    },
];

const Feed = () => {
    return (
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
            {memes.map((meme, index) => (
                <MemeCard key={index} meme={meme}/>
            ))}
            </div>

            <button className={styles.loadMoreButton}>
                Carregar mais memes
            </button>
        </section>
    )
}

export default Feed;