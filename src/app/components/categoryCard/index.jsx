import styles from "./categoryCard.module.css";

const CategoryCard = ({ category }) => {
  return (
          <div className={styles.categoryCard}>
            <span className={styles.categoryIcon}>{category.icon}</span>
            <h3 className={styles.categoryName}>{category.name}</h3>
            <span className={styles.categoryCount}>{category.count} memes</span>
          </div>
  );
};

export default CategoryCard;
