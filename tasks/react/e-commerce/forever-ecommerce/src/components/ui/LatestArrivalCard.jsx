import heroImg from "../../assets/hero_img-DOCOb6wn.png";

function LatestArrivalsCard() {
  return (
    <section className="container mx-auto border border-black">
      <div className="flex flex-col md:flex-row items-center">

        {/* Text side */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center text-amber-900 gap-4">
          <p className="font-mono text-xl">____ OUR BESTSELLER</p>

          <h2 className="text-5xl font-prata font-bold">
            Latest Arrivals
          </h2>

          <a
            href="/collections"
            className="font-mono text-xl font-medium"
          >
            SHOP NOW ____
          </a>
        </div>

        {/* Image side */}
        <div className="md:w-1/2">
          <img
            src={heroImg}
            alt="Latest Arrivals"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default LatestArrivalsCard;