import styles from "./page.module.css";
import Header from "./components/header/index.jsx";
import HeroSection from "./components/heroSection";
import CategoriesSection from "./components/categoriesSection";
import Feed from "./components/feedSection";
import Footer from "./components/footer";
import CreatorsSection from "./components/creatorsSection";

export default function Home() {

  // Memes em destaque
  const featuredMemes = [
    {
      id: 8,
      title: "O código em produção",
      image: "https://i.imgur.com/aVy8tFB.jpg",
      author: "DevHumor",
      category: "Programação",
      trending: true,
    },
    {
      id: 9,
      title: "Modo escuro vs Modo claro",
      image: "https://i.imgur.com/YnGsVzS.jpg",
      author: "UIDesigner",
      category: "Tecnologia",
      trending: true,
    },
    {
      id: 10,
      title: "POV: Aula online",
      image: "https://i.imgur.com/4MigGYQ.jpg",
      author: "ZoomExpert",
      category: "Escola",
      trending: false,
    },
  ];

  // Eventos próximos
  const upcomingEvents = [
    {
      id: 1,
      title: "Competição de Memes 2025",
      date: "15 de Maio, 2025",
      participants: 356,
    },
    {
      id: 2,
      title: "Workshop: Como Criar Memes Virais",
      date: "22 de Maio, 2025",
      participants: 127,
    },
  ];

  return (
    <div className={styles.container}>
      <Header/>

      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <HeroSection />

          <CategoriesSection />
          {/* COMPONENTE: Feed */}
          <Feed/>

          {/* FIM COMPONENTE: Feed */}

          {/* COMPONENTE: FeaturedMemesSection */}
          <section className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
            <div className={styles.featuredGrid}>
              {featuredMemes.map((meme) => (
                // COMPONENTE: FeaturedMemeCard
                <div key={meme.id} className={styles.featuredCard}>
                  <div className={styles.featuredImageContainer}>
                    <img
                      src={meme.image}
                      alt={meme.title}
                      className={styles.featuredImage}
                    />
                    {meme.trending && (
                      <span className={styles.trendingBadge}>🔥 Trending</span>
                    )}
                  </div>
                  <div className={styles.featuredContent}>
                    <h3 className={styles.featuredTitle}>{meme.title}</h3>
                    <div className={styles.featuredInfo}>
                      <span className={styles.featuredAuthor}>
                        Por {meme.author}
                      </span>
                      <span className={styles.featuredCategory}>
                        {meme.category}
                      </span>
                    </div>
                  </div>
                </div>
                // FIM COMPONENTE: FeaturedMemeCard
              ))}
            </div>
          </section>
          {/* FIM COMPONENTE: FeaturedMemesSection */}

          {/* COMPONENTE: CreatorsSection */}
          <CreatorsSection/>
          {/* FIM COMPONENTE: CreatorsSection */}

          {/* COMPONENTE: NewsletterSection */}
          <section className={styles.newsletterSection}>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Fique por dentro!</h2>
              <p className={styles.newsletterDescription}>
                Assine nossa newsletter e receba os melhores memes toda semana!
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>Assinar</button>
              </div>
              <p className={styles.newsletterDisclaimer}>
                Nós respeitamos sua privacidade. Cancele quando quiser.
              </p>
            </div>
            <div className={styles.newsletterImageContainer}>
              <img
                src="https://i.imgur.com/OELrGl5.jpg"
                alt="Newsletter"
                className={styles.newsletterImage}
              />
            </div>
          </section>
          {/* FIM COMPONENTE: NewsletterSection */}
        </div>

        {/* COMPONENTE: Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Eventos Próximos</h3>
            {upcomingEvents.map((event) => (
              // COMPONENTE: EventCard
              <div key={event.id} className={styles.eventCard}>
                <h4 className={styles.eventTitle}>{event.title}</h4>
                <p className={styles.eventDate}>{event.date}</p>
                <p className={styles.eventParticipants}>
                  {event.participants} participantes
                </p>
                <button className={styles.eventButton}>Participar</button>
              </div>
              // FIM COMPONENTE: EventCard
            ))}
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>MemeVerse Premium</h3>
            <div className={styles.premiumCard}>
              <h4 className={styles.premiumTitle}>
                Desbloqueie recursos exclusivos!
              </h4>
              <ul className={styles.premiumFeatures}>
                <li>Sem anúncios</li>
                <li>Uploads ilimitados</li>
                <li>Ferramentas de edição avançadas</li>
                <li>Estatísticas detalhadas</li>
              </ul>
              <button className={styles.premiumButton}>
                Experimentar Grátis
              </button>
            </div>
          </div>

          <div className={styles.sidebarSection}>
            <h3 className={styles.sidebarTitle}>Tags Populares</h3>
            <div className={styles.tagCloud}>
              <span className={`${styles.tag} ${styles.tagLarge}`}>
                #memeday
              </span>
              <span className={styles.tag}>#programação</span>
              <span className={`${styles.tag} ${styles.tagMedium}`}>
                #humor
              </span>
              <span className={styles.tag}>#escola</span>
              <span className={`${styles.tag} ${styles.tagLarge}`}>
                #trabalhoremoto
              </span>
              <span className={styles.tag}>#segundafeira</span>
              <span className={`${styles.tag} ${styles.tagMedium}`}>
                #games
              </span>
              <span className={styles.tag}>#nofilter</span>
            </div>
          </div>
        </aside>
        {/* FIM COMPONENTE: Sidebar */}
      </div>
      <Footer/>
    </div>
  );
};
