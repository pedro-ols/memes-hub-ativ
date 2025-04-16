import styles from "./eventCard.module.css";

const EventCard = ({ event }) => {
  return (
    <div key={event.id} className={styles.eventCard}>
      <h4 className={styles.eventTitle}>{event.title}</h4>
      <p className={styles.eventDate}>{event.date}</p>
      <p className={styles.eventParticipants}>
        {event.participants} participantes
      </p>
      <button className={styles.eventButton}>Participar</button>
    </div>
  );
};

export default EventCard;
