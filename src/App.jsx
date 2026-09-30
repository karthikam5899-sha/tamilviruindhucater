import { useState } from "react";
import IntroSequence from "./components/IntroSequence";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import FoodCategories from "./components/FoodCategories";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import MenuDetail from "./components/MenuDetail";
import { foodCategories } from "./data/cateringData";

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem("introComplete"));
  const path = window.location.pathname.replace(/\/+$/, "");
  const menuCategory = foodCategories.find(category => path === `/menu/${category.slug}`);
  const completeIntro = () => {
    sessionStorage.setItem("introComplete", "true");
    setShowIntro(false);
  };

  const content = menuCategory ? (
    <div className="overflow-hidden">
      <Navbar />
      <main><MenuDetail category={menuCategory} /></main>
      <Footer />
    </div>
  ) : (
    <div className="overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FoodCategories />
        <Packages onBookPackage={setSelectedPackage} />
        <Gallery />
        <Testimonials />
        <Booking selectedPackage={selectedPackage} />
      </main>
      <Footer />
    </div>
  );

  return <>{content}{showIntro && <IntroSequence onComplete={completeIntro} />}</>;
}