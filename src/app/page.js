import HeroImage from "./components/HomeComponents/heroImage";
import Services from "./components/HomeComponents/services";
import About from "./components/HomeComponents/about";
import Portfolio from "./components/HomeComponents/portfolio";

export default function Home() {
  return (
    <main>
      <HeroImage />
      <Services />
      <About />
      <Portfolio />
    </main>
  );
}
