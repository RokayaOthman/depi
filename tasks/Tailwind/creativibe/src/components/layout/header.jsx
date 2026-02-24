// src/components/layout/Header.jsx
export default function Header() {
  return (
    <header className=" text-white p-4 absolute w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center h-[79px]">
          {/* Left side - Logo */}
          <h1 className="text-2xl font-bold sm:h-[28px] md:h-[32px] lg:h-[36px] lg:w-[164px] font-['Dela_Gothic_One'] text-[25px] leading-9 text-orange-500">
            CreatiVibe
          </h1>
          
          {/* Center - Navigation */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="text-white hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white hover:text-orange-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#offers" className="text-white hover:text-orange-500">
                  Offers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-orange-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          
          {/* Right side - Join Us Button */}
          <div className="text-black w-[172px] h-[47px] custom-padding gap-[10px] opacity-100 rounded-lg bg-orange-500 flex items-center justify-center hover:bg-orange-600 transition-colors">
            Join Us Today
          </div>
        </div>
      </div>
    </header>
  );
}