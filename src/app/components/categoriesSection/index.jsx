import styles from './categoriesSection.module.css';

const categories = [
    { id: 1, name: "Programação", icon: "💻", count: 478 },
    { id: 2, name: "Escola", icon: "📚", count: 325 },
    { id: 3, name: "Trabalho", icon: "💼", count: 642 },
    { id: 4, name: "Games", icon: "🎮", count: 513 },
    { id: 5, name: "Relacionamentos", icon: "❤️", count: 287 },
    { id: 6, name: "Esportes", icon: "⚽", count: 195 },
];

const CategoriesSection = () => {
    return(
    <section className={styles.categoriesSection}>
        <h2 className={styles.sectionTitle}>Explore por Categorias</h2>
        <div className={styles.categoriesGrid}>
            {categories.map((category) => (
                <div key={category.id} className={styles.categoryCard}>
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    <h3 className={styles.categoryName}>{category.name}</h3>
                    <span className={styles.categoryCount}>
                        {category.count} memes
                    </span>
                </div>
            ))}
        </div>
    </section>
    )
}

export default CategoriesSection;