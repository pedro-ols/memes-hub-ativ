import styles from "./tags.module.css";

const Tags = ({ tag }) => {
  return (
    <div className={styles.tagCloud}>
        <span key={tag.id} className={`${styles.tag} ${tag.large ? styles.tagLarge : ""}`}>
          {tag.name}
        </span>
    </div>
  );
};

export default Tags;
