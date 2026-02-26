import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Features />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;