import styles from "./page.module.css";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import CategoriesSection from "./components/categoriesSection";
import Feed from "./components/feed";
import FeaturedMemesSection from "./components/featuredMemesSection";
import NewsLetterSection from "./components/newsLetterSection";
import CreatorsSection from "./components/creatorsSection";
import Sidebar from "./components/sideBar";
import Footer from "./components/footer";

export default function Home() {
  // Array de dados dos memes para serem passados como props
  const memes = [
    {
      id: 1,
      title: "Programador às 3 da manhã",
      description:
        "Quando o código finalmente funciona depois de 5 horas debugando",
      image: "https://i.imgur.com/JbIMvq2.jpg",
      likes: 452,
      comments: 87,
      author: "DevMaster",
      authorAvatar: "https://i.pravatar.cc/150?img=11",
      category: "Programação",
    },
    {
      id: 2,
      title: "Vida de estudante",
      description: "Eu entrando na prova sem estudar",
      image: "https://i.imgur.com/DpEHvFs.jpg",
      likes: 231,
      comments: 56,
      author: "StudyGuru",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      category: "Escola",
    },
    {
      id: 3,
      title: "Reunião que poderia ser um e-mail",
      description: "Minha cara depois de 2 horas de reunião",
      image: "https://i.imgur.com/a1hJwXc.jpg",
      likes: 631,
      comments: 103,
      author: "CorporateJoker",
      authorAvatar: "https://i.pravatar.cc/150?img=13",
      category: "Trabalho",
    },
    {
      id: 4,
      title: "Quando a internet cai",
      description: "POV: Você no meio de uma partida importante",
      image: "https://i.imgur.com/uGdnlGj.jpg",
      likes: 842,
      comments: 152,
      author: "GamerLife",
      authorAvatar: "https://i.pravatar.cc/150?img=14",
      category: "Games",
    },
    {
      id: 5,
      title: "Segunda-feira chegando",
      description: "Ninguém está pronto para isso",
      image: "https://i.imgur.com/aNDyAyC.jpg",
      likes: 753,
      comments: 91,
      author: "WeekendWarrior",
      authorAvatar: "https://i.pravatar.cc/150?img=15",
      category: "Trabalho",
    },
    {
      id: 6,
      title: "Minha vida amorosa",
      description: "Expectativa vs Realidade",
      image: "https://i.imgur.com/gMy6q9Y.jpg",
      likes: 523,
      comments: 78,
      author: "RomanceExpert",
      authorAvatar: "https://i.pravatar.cc/150?img=16",
      category: "Relacionamentos",
    },
  ];

  // Dados para o meme do dia (hero section)
  const memeOfTheDay = {
    id: 7,
    title: "Meme do Dia: Quando seu código funciona de primeira",
    description:
      "Este momento raro que todos os desenvolvedores sonham em experimentar!",
    image: "https://i.imgur.com/vldGJnz.jpg",
    likes: 2452,
    comments: 387,
    author: "SuperCoder",
    authorAvatar: "https://i.pravatar.cc/150?img=20",
  };

  // Array de criadores em destaque
  const topCreators = [
    {
      id: 1,
      name: "MemeQueen",
      avatar: "https://i.pravatar.cc/150?img=23",
      followers: "245K",
      bio: "Criando memes que fazem seu dia melhor!",
    },
    {
      id: 2,
      name: "FunnyGuy42",
      avatar: "https://i.pravatar.cc/150?img=24",
      followers: "189K",
      bio: "Especialista em memes de programação e gatos",
    },
    {
      id: 3,
      name: "LaughFactory",
      avatar: "https://i.pravatar.cc/150?img=25",
      followers: "327K",
      bio: "Se não te fizer rir, devolvo seu tempo!",
    },
  ];

  // Categorias de memes
  const categories = [
    { id: 1, name: "Programação", icon: "💻", count: 478 },
    { id: 2, name: "Escola", icon: "📚", count: 325 },
    { id: 3, name: "Trabalho", icon: "💼", count: 642 },
    { id: 4, name: "Games", icon: "🎮", count: 513 },
    { id: 5, name: "Relacionamentos", icon: "❤️", count: 287 },
    { id: 6, name: "Esportes", icon: "⚽", count: 195 },
  ];

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

 const tags = [
  {
    id: 1,
    name: "#memeday",
    large: true,
  },
  {
    id: 2,
    name: "#programação",
    large: false,
  },
  {
    id: 3,
    name: "#humor",
    large: false,
  },
  {
    id: 4,
    name: "#escola",
    large: false,
  },
  {
    id: 5,
    name: "#trabalhoremoto",
    large: true,
  },
  {
    id: 6,
    name: "#segundafeira",
    large: false,
  },
  {
    id: 7,
    name: "#games",
    large: false,
  },
  {
    id: 8,
    name: "#nofilter",
    large: false,
  }
 ]
  const navItems = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Trending",
    },
    {
      id: 3,
      name: "Create",
    },
    {
      id: 4,
      name: "Categories",
    },
    {
      id: 5,
      name: "Profile",
    },
  ];

  const logo = [
    {
      id: 1,
      title: "MemeVerse",
      span: "🌟",
    },
  ];

  const footerData = {
    navigation: [
      { name: "Home", href: "#" },
      { name: "Trending", href: "#" },
      { name: "Create", href: "#" },
      { name: "Categories", href: "#" },
      { name: "Profile", href: "#" },
    ],
    resources: [
      { name: "Editor de Memes", href: "#" },
      { name: "Templates", href: "#" },
      { name: "API", href: "#" },
      { name: "Para Desenvolvedores", href: "#" },
    ],
    company: [
      { name: "Sobre nós", href: "#" },
      { name: "Carreiras", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Contato", href: "#" },
    ],
    legal: [
      { name: "Termos de Uso", href: "#" },
      { name: "Privacidade", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "LGPD", href: "#" },
    ],
  };
  const socialLinks = [
    {
      id: 1,
      icon: "📱",
      linkHRef: "#",
    },
    {
      id: 2,
      icon: "📘",
      linkHRef: "#",
    },
    {
      id: 3,
      icon: "📸",
      linkHRef: "#",
    },
    {
      id: 4,
      icon: "🐦",
      linkHRef: "#",
    },
  ];

  const premiumFeatures = [
    {
      id: 1,
      feature: "Sem anúncios",
    },
    {
      id: 2,
      feature: "Uploads ilimitados",
    },
    {
      id: 3,
      feature: "Ferramentas de edição avançadas",
    },
    {
      id: 4,
      feature: "Estatísticas detalhadas",
    }
  ]

  return (
    <div className={styles.container}>
      <Header navItems={navItems} logo={logo} />
      <div className={styles.mainContent}>
        <div className={styles.contentArea}>
          <HeroSection memeOfTheDay={memeOfTheDay} />
          <CategoriesSection categories={categories} />
          <Feed memes={memes} />
          <FeaturedMemesSection memes={featuredMemes} />
          <CreatorsSection creator={topCreators} />
          <NewsLetterSection />
        </div>
        <Sidebar upcomingEvents={upcomingEvents} premiumFeatures={premiumFeatures} tags={tags}/>
      </div>
      <Footer socialLink={socialLinks} footerData={footerData} tag={tags}/>
    </div>
  );
}
