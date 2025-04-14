import CategoryCard from "../categoryCard";
import styles from "./categoriesSection.module.css";

const CategoriesSection = ({ categories }) => {
  return (
    <section className={styles.categoriesSection}>
      <h2 className={styles.sectionTitle}>Explore por Categorias</h2>
      <div className={styles.categoriesGrid}>
        {categories.map((categories) => (
          <CategoryCard key={categories.id} category={categories} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
