const Header = () => {
  return (
    <header
      className="absolute
        top-0
        left-0
        w-full
        bg-[#2C2E33]
        px-10
        py-6
        "
    >
      <div
        className="
            flex
            flex-col
            md:flex-row
            justify-around
            items-center
            px-4
            md:px-10
            py-4
            gap-4
            md:gap-8
            md:py-10
            h-[95px]
        "
      >
        {/* Logo */}
        <div className="flex flex-col items-center w-[119px]">
          <h1 className="font-['jsMath-cmbx10'] font-bold text-2xl text-white leading-[26px]">
            Zeyara
          </h1>
          <span className="font-['Poly']  text-sm  text-white  leading-[17px]">
            Online
          </span>
        </div>
        {/* Links */}
      <nav className="w-full md:w-auto"> 
          {/* 2. Reset ul styles (list-none, margin, padding) and add gap */}
          <ul className="flex flex-row list-none m-0 p-0 gap-6 justify-center md:justify-start">
            <li>
              {/* 3. Added no-underline and hover effects to links */}
              <a href="/" className="font-poppins font-normal text-[20px] text-white no-underline hover:text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="font-poppins text-white no-underline hover:text-gray-300 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="font-poppins text-white no-underline hover:text-gray-300 transition">
                Cart
              </a>
            </li>
            <li>
              <a href="/faq" className="font-poppins text-white no-underline hover:text-gray-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="/faq" className="font-poppins text-white no-underline hover:text-gray-300 transition">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
console.log("rokaua");

export default Header;
