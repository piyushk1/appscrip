import Head from 'next/head';
import GreyStrip from "./Components/GreyStrip/GreyStrip";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import FilterStrip from "./Components/FilterStrip/FilterStrip";
import Footer from "./Components/Footer/Footer";

const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data.slice(0, 16); 
};

export default async function Home() {
  const products = await fetchProducts(); 

  return (
    <>
      <Head>
        <title>Best Products Online Store | Home</title> 
        <meta name="description" content="Shop the latest products from our online store. Best deals on electronics, clothing, and more. Explore now!" />
      </Head>
      <div>
        <GreyStrip />
        <Header />
        <HeroSection />
        <FilterStrip products={products} /> 
        <Footer />
      </div>
    </>
  );
}
