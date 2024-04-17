import HeroImage from "./components/HomeComponents/heroImage";
import Services from "./components/HomeComponents/services";
import About from "./components/HomeComponents/about";
import Portfolio from "./components/HomeComponents/portfolio";

const images = [
  { path: "https://starwebfront.com/wp-content/uploads/2024/01/betus.png" },
  { path: "https://starwebfront.com/wp-content/uploads/2024/01/hatch2web.png" },
  { path: "https://starwebfront.com/wp-content/uploads/2024/01/indiport.png" },
  { path: "https://starwebfront.com/wp-content/uploads/2024/01/pointspreads.png"},
  { path: "https://starwebfront.com/wp-content/uploads/2024/01/revmasters.png"},
  { path: "https://starwebfront.com/wp-content/uploads/2024/01/slotsparadise.png"},
];

export default function Home() {
  return (
    <main>
      <HeroImage />
      <Services />
      <About />
      <Portfolio images={images} />
    </main>
  );
}
