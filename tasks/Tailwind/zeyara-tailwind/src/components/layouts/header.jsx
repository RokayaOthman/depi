const Header = () => {
  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-[#2C2E33]">
        <div className="max-w-7xl mx-auto px-10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center w-[119px]">
              <h1 className="font-['jsMath-cmbx10'] font-bold text-4xl text-white">
                Zeyara
              </h1>
              <span className="font-['Poly'] text-sm text-white ">Online</span>
            </div>

            {/* Links */}
            <nav className="w-full md:w-auto">
              <ul className="flex flex-row list-none m-0 p-0 gap-16 justify-center md:justify-start">
                {["Home", "Products", "Cart", "About", "Contact Us"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="/"
                        className="font-poppins font-normal text-[20px] text-white no-underline hover:text-gray-300 transition"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-[rgba(250,242,239,1)] px-6 py-2 text-[18px] font-normal rounded">
                Log In
              </button>
              <button className="bg-[rgba(250,242,239,1)] px-6 py-2 text-[18px] font-normal rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* Push content down so header doesn't cover search bar */}
        <div className="bg-[#DFD2CA] py-6">
          <div className="flex justify-content-center md:justify-end px-4 mr-20">
            <div className="bg-[#FFFF] rounded shadow-md h-[40px] flex items-center px-4">
              {/* <div className="mr-2 text-gray-500">🔍</div> */}
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "rgb(187, 193, 205)" }}
              />
              <input
                type="text"
                placeholder="Search"
                className="ml-4 w-120 bg-transparent focus:outline-none text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
