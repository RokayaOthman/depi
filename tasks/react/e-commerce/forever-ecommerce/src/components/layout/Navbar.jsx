function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b">

      {/* Logo */}
      <div className="text-xl font-bold">
        FOREVER
      </div>

      {/* Links */}
      <ul className="flex gap-6">
        <li><a href="/">Home</a></li>
        <li><a href="/collections">Collections</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 text-lg">
        <span>🔍</span>
        <span>👤</span>
        <span>🛒</span>
      </div>

    </nav>
  )
}

export default Navbar