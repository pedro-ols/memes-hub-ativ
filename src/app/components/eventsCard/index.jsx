import styles from "./eventsCard.module.css"

const EventCard = ({title, participants, date }) => {
    return( 
            <div className={styles.eventCard}>
              <h4 className={styles.eventTitle}>{title}</h4>
              <p className={styles.eventDate}>{date}</p>
              <p className={styles.eventParticipants}>
                {participants} participantes
              </p>
              <button className={styles.eventButton}>Participar</button>
            </div>
    )
}

export default EventCard;