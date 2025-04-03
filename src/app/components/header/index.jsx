import styles from './header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <h1>MemeVerse</h1>
                <span>🌟</span>
            </div>
            <nav className={styles.nav}>
                <a href="#" className={styles.active}>
                    Home
                </a>
                <a href="#">Trending</a>
                <a href="#">Create</a>
                <a href="#">Categories</a>
                <a href="#">Profile</a>
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