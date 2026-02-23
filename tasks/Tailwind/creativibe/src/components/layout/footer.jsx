export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Column 1: Address */}
        <div>
          <h4 className="text-xl font-bold mb-4">Address</h4>
          <p>
            123 Creative Street
            <br />
            Design City, DC 45678
          </p>
        </div>

        {/* Column 2: CreatWibe Links */}
        <div>
          <h4 className="text-xl font-bold mb-4">CreatWibe</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-xl font-bold mb-4">Contact</h4>
          <a
            href="mailto:hello@creatwibe.com"
            className="block hover:text-orange-500"
          >
            hello@creatwibe.com
          </a>
        </div>
      </div>
    </footer>
  );
}
