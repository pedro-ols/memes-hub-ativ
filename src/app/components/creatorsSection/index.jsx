import styles from "./creatorsSection.module.css";
import CreatorCard from "../creatorCard";

const CreatorsSection = ({ creator }) => {   
    return (
      <section className={styles.creatorsSection}>
      <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
      <div className={styles.creatorsGrid}>
        {creator.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </section>
    );
}

export default CreatorsSection;