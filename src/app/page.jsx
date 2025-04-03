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


  return (
    <div className={styles.container}>
      <Header/>

      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <HeroSection />

          <CategoriesSection />

          <Feed/>

          <FeaturedMemes/>

          <CreatorsSection/>
          
          <NewsLetterSection/>
          
        </div>
        
        <SideBar/>
        
      </div>

      <Footer/>
      
    </div>
  );
};
