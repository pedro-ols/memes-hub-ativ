import styles from "./sideBar.module.css";
import EventCard from "../eventCard";
import Tags from "../tags";

const Sidebar = ({ upcomingEvents, premiumFeatures, tags }) => {
    return (
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event}/>
            ))}
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
            <div className={styles.premiumCard}>
              <h4 className={styles.premiumTitle}>
                Desbloqueie recursos exclusivos!
              </h4>
              <ul className={styles.premiumFeatures}>
                {premiumFeatures.map((feature) => (
                  <li key={feature.id} className={styles.premiumFeature}>{feature.feature}</li>
                ))}
              </ul>
              <button className={styles.premiumButton}>
                Experimentar Grátis
              </button>
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Tags Populares</h3>
            {tags.map((tag) => (
              <Tags key={tag.id} tag={tag} />
            ))}
            
          </div>
        </aside>
    );
  };
  
  export default Sidebar;