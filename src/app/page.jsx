import styles from "./page.module.css";
import Header from "./components/header/index.jsx";
import HeroSection from "./components/heroSection";
import CategoriesSection from "./components/categoriesSection";
import Feed from "./components/feedSection";
import Footer from "./components/footer";
import CreatorsSection from "./components/creatorsSection";
import FeaturedMemes from "./components/featuredSection";
import NewsLetterSection from "./components/newsLetterSection";
import SideBar from "./components/sideBar";
export default function Home() {


  // Eventos próximos


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
          <FeaturedMemes/>
          {/* FIM COMPONENTE: FeaturedMemesSection */}

          {/* COMPONENTE: CreatorsSection */}
          <CreatorsSection/>
          {/* FIM COMPONENTE: CreatorsSection */}

          {/* COMPONENTE: NewsletterSection */}
          <NewsLetterSection/>
          {/* FIM COMPONENTE: NewsletterSection */}
        </div>

        {/* COMPONENTE: Sidebar */}
        <SideBar/>
        {/* FIM COMPONENTE: Sidebar */}
      </div>
      <Footer/>
    </div>
  );
};
