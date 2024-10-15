import FilterStrip from "./Components/FilterStrip/FilterStrip";
import GreyStrip from "./Components/GreyStrip/GreyStrip";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Footer from "./Components/Footer/Footer";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data.slice(0, 16);
};

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div>
      <GreyStrip />
      <Header />
      <HeroSection />
      <FilterStrip products={products} />
      <Footer/>
    </div>
  );
}
