import heroImg from '../../assets/hero_img-DOCOb6wn.png' 
function LatestArrivalsCard() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Text side */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-sm text-gray-600 mb-1">OUR BESTSELLER</p>
          <h2 className="text-8xl font-serif font-bold text-gray-900 mb-3">
            Latest Arrivals
          </h2>
          <a
            href="/collections"
            className="inline-block text-lg font-medium text-amber-700 border-b-2 border-amber-700"
          >
            SHOP NOW
          </a>
        </div>

        {/* Image side */}
        <div className="md:w-1/2">
            <img
            src={heroImg}
            alt="Latest Arrivals"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default LatestArrivalsCard;