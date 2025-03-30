import { Hero } from "../../components/Hero/Hero";
import { Bestsellers } from "../../components/Bestsellers/Bestsellers";
import { useLoaderData } from "react-router-dom";

export function MainPage() {
  const { bestsellers, heroImageUrl } = useLoaderData();

  return (
    <>
      <Hero heroImg={heroImageUrl} />
      <Bestsellers
        headerText="Sprawdź nasze bestsellery"
        products={bestsellers}
      />
    </>
  );
}
