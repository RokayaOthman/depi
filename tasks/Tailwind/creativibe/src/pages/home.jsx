import HeroLayout from '../components/layout/herolayout'

export default function Home() {
  return (
    <>
      <HeroLayout>
        <h1 className="text-5xl font-bold text-white">Empowering creativity...</h1>
        <p className="text-xl text-white mb-8">Join a community...</p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full">
          Get Started
        </button>
      </HeroLayout>
      
      {/* <PricingSection />
      <GallerySection />
      <AboutSection /> */}
    </>
  );
}