import Image from "next/image";
import HeroImage from "./components/heroImage";
import Services from "./components/services";

export default function Home() {
  return (
    <main>
      <HeroImage />
      <Services />
    </main>
  );
}
