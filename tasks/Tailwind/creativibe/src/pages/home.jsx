import HeroLayout from "../components/layout/herolayout";
import HeroSection from "../components/sections/HeroSection";
import PricingSection from "../components/sections/PricingSection"
export default function Home() {
  return (
    <>
      <HeroLayout></HeroLayout>
     <PricingSection></PricingSection>
      {/* <GallerySection />
      <AboutSection /> */}
    </>
  );
}
