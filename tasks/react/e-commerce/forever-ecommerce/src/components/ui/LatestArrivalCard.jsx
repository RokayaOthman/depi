import heroImg from '../../assets/hero_img-DOCOb6wn.png' 
function LatestArrivalsCard() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        
        {/* Text side */}
        <div className="text-amber-900 md:w-1/2 gap-y-5 text-center md:text-left">  
          <p className="font-mono text-xl mb-1">____ OUR BESTSELLER</p>
          <h2 className="text-5xl font-prata prata-regular mb-3 font-bold">
            Latest Arrivals
          </h2>
          <a
            href="/collections"
            className="font-mono inline-block text-xl font-medium"
          >
            SHOP NOW ____
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