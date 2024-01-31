import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Tentang from "../components/Tentang";
import FloorCoating from "../components/FloorCoating";
import Projek from "../components/Projek";
import Pertanyaan from "../components/Pertanyaan";
import Footer from "../components/Footer";

const Home = () => {
  const [scroll, scrollValue] = useState(0);

  window.addEventListener("scroll", function scroll() {
    console.log(scrollValue(window.Math.round(scrollY)));
  });

  return (
    <>
      <div
        id="home"
        onScroll={() => console.log(scrollY)}
        className="body bg-no-repeat bg-cover bg-center bg-fixed"
      >
        <Header
          bgColor={
            scroll > 50 ? "bg-zinc-800 px-5 py-4" : "bg-transparent px-5 py-6"
          }
        />
        <Hero />
      </div>
      <Tentang />
      <div className="w-full rounded-tl-[70px] rounded-tr-[70px] bg-neutral-600">
        <FloorCoating />
        <Projek />
        <Pertanyaan />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
