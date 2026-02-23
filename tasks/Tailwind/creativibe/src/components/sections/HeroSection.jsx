import heroImg from "../../assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[150] -mt-20">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      {/* Gradient Overlay Layer */}
      <div className="absolute inset-0 bg-linear-to-l from-black/25 via-black/65 to-black/85"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">Empowering creativity...</h1>
        <p className="text-xl mb-8 max-w-lg">
          Join a community of designers, developers, and creators.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold">
          Get Started
        </button>
      </div>
    </section>
  );
}
