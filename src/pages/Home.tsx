import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container">
      <Hero />
      <Features />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;