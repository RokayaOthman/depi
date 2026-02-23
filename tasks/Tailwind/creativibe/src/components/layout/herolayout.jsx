// sr/components/layout/HeroLayout.jsx
import Header from './header';
import heroImg from '../../assets/hero-bg.jpg';

export default function HeroLayout({ children }) {
  return (
    <div className="relative">
      {/* Background spans both header and hero */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroImg})`,
          height: '807px', // Set to your image's actual height
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Header with transparent background */}
      <Header transparent={true} />

      {/* Hero content */}
      <div className="relative z-10 pt-32 pb-20">
        {children}
      </div>
    </div>
  );
}