import styles from "./categoryCard.module.css";

const CategoryCard = ({ categories }) => {
  return (
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <div key={category.id} className={styles.categoryCard}>
            <span className={styles.categoryIcon}>{category.icon}</span>
            <h3 className={styles.categoryName}>{category.name}</h3>
            <span className={styles.categoryCount}>{category.count} memes</span>
          </div>
        ))}
      </div>
  );
};

export default CategoryCard;
