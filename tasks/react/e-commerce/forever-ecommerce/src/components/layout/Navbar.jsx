import { useEffect, useState } from "react";
import Logoimg from "../../assets/Logos/download.png";

function Navbar() {

  const [cartCount, setCartCount] = useState(0)
  useEffect(() => {
    const storedCount = Number(localStorage.getItem("cartCounter")) || 0
    setCartCount(storedCount)
  }, [])

  return (
    <nav className="flex items-center justify-between">
      {/* Logo */}
      <div>
        <img className="w-36" src={Logoimg} />
      </div>

      {/* Links */}
      <ul className="font-mono text-xl flex gap-7 py-5 text-gray-700 font-bold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/collections">Collections</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex gap-8 text-lg">
        <span>
          <img className="w-5" src="src/assets/Logos/magnifyingGlass.png"></img>
        </span>
        <span>
          <img className="w-5" src="src/assets/Logos/download (2).png"></img>
        </span>
        <a href="src/pages/cart.jsx" className="relative">
          <img className="w-5" src="src/assets/Logos/cart.png"></img>
          <p className="cart-counter absolute w-4 -bottom-1 -right-1 text-center bg-gray-900 text-white aspect-square leading-4 rounded-full text-[8px]">{cartCount}</p>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
