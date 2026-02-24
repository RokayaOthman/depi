// This file renders : bg-img , header , heroSection 
import heroImg from "../../assets/hero-bg.jpg";
import Header from "../layout/header";
import HeroSection from "../sections/HeroSection";

export default function HeroLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      {/* Background spans both header and hero */}
      <div
        className="absolute 
        inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `
      linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.25) 0%,
        rgba(0, 0, 0, 0.65) 65.78%,
        rgba(0, 0, 0, 0.85) 100%
      ),
      url(${heroImg})
    `,
          height: "807px",
        }}
      ></div>

      {/* Header with transparent background */}
      <Header transparent={true} />
      
      {/* Hero content */}
      <div className="relative z-10">
         <HeroSection />
        {children}
        </div>
    </div>
  );
}
