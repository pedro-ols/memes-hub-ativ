import styles from './header.module.css';

const Header = ({ navItems, logo }) =>{
    return(
        <header className={styles.header}>
          {logo.map((logo) => (
            <div key={logo.id} className={styles.logo}>
            <h1>{logo.title}</h1>
            <span>{logo.span}</span>
            </div>
          ))}
        
        <nav className={styles.nav}>
          {navItems.map((Item) => (
            <a key={Item.id} href="#">{Item.name}</a>
          ))}
        </nav>

        <div className={styles.userActions}>
          <button className={styles.notificationBtn}>🔔</button>
          <button className={styles.userAvatar}>
            <img src="https://i.pravatar.cc/150?img=3" alt="Your profile" />
          </button>
        </div>
      </header>
    );
};

export default Header;