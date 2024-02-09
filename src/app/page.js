import HeroImage from "./components/heroImage";
import Services from "./components/services";
import About from "./components/about";

export default function Home() {
  return (
    <main>
      <HeroImage />
      <Services />
      <About />
    </main>
  );
}
