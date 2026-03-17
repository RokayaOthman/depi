import Logoimg from "../../assets/Logos/download.png"

function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b">

      {/* Logo */}
      <div>
       <img src={Logoimg}/>
      </div>

      {/* Links */}
      <ul className="text-lg flex gap-5 py-5 text-gray-700 font-bold">
        <li><a href="/">Home</a></li>
        <li><a href="/collections">Collections</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Icons */}
      <div className="flex gap-8 text-lg">
        <span>🔍</span>
        <span>👤</span>
        <span>🛒</span>
      </div>

    </nav>
  )
}

export default Navbar