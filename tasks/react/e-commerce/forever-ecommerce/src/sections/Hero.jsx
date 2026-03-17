import Navbar from "../components/layout/Navbar";
import LatestArrivalsCard from "../components/ui/LatestArrivalCard";
function Hero() {
  return (
    <>
      <div className="py-8">
        <Navbar></Navbar>
        {/* hero card */}
        <LatestArrivalsCard></LatestArrivalsCard>
       
      </div>
    </>
  );
}
export default Hero;
