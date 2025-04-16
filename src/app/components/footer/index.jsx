import styles from "./footer.module.css";

const Footer = ({ socialLink, footerData }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerLogo}>
          <h2>MemeVerse</h2>
          <p>O universo dos melhores memes da internet.</p>
        </div>

        <div className={styles.footerNavContainer}>
          {Object.entries(footerData).map(([sectionTitle, links]) => (
            <div key={sectionTitle} className={styles.footerNavSection}>
              <h3>
                {sectionTitle.charAt(0).toUpperCase() + sectionTitle.slice(1)}
              </h3>
              <nav className={styles.footerNav}>
                {links.map((link, index) => (
                  <a key={index} href={link.href}>
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 MemeVerse - Todos os direitos reservados</p>
        <div className={styles.socialLinks}>
          {socialLink.map((link) => (
            <a key={link.id} href={link.linkHRef} className={styles.socialLink}>
              <span>{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
