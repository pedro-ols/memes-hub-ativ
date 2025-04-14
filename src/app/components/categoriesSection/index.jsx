import styles from "./categoriesSection.module.css";

const CategoriesSection = ({ categories }) => {
  return (
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
  );
};

export default CategoriesSection;
