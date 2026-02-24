import FeatureCard from "../FeatureCard"
import { featureCardsData } from '../../data/featureCardsData';

export default function HeroSection(){
    return(
        <div className="relative "> {/* Main container with fixed height */}
            
            {/* Hero Content Card - Positioned at left:96px, top:183px */}
            <div className="
                absolute
                left-4 md:left-24
                top-[178px] md:top-[183px]
                w-[343px] md:w-[769px]
                h-[401px] md:h-[352px]
                flex flex-col items-start
                pt-6 pb-6 px-6
                gap-4 md:gap-10
                bg-gradient-to-l 
                from-[rgba(0,0,0,0.1)] 
                to-[rgba(0,0,0,0.32)]
                opacity-100
            ">
                <h1 className="
                    font-['Dela_Gothic_One'] 
                    text-orange-500 
                    text-[25px]                   
                    leading-9                      
                    w-[721px]                      
                ">
                    Empowering creativity, connections, and driving success—step into a world 
                    where your ideas thrive.
                </h1>
                
                <p className="
                    font-['Poppins'] 
                    text-white 
                    text-[20px] 
                    leading-[30px] 
                    w-[721px]
                ">
                    At <span className="text-orange-500">CREATIVIBE</span>, we provide not just a place to work, but a place to flourish. 
                    Where innovation meets collaboration in a dynamic workspace designed for the 
                    modern professional.
                </p>

                {/* Button */}
                <div className="
                    text-black 
                    w-[172px] h-[47px] 
                    custom-padding 
                    gap-[10px] 
                    opacity-100 
                    rounded-lg 
                    bg-orange-500 
                    flex items-center justify-center 
                    hover:bg-orange-600 
                    transition-colors
                ">
                    Join Us Today
                </div>
            </div>

            {/* Features three cards - Separated from hero content */}
            <div className="
                absolute 
                left-1/2 
                -translate-x-1/2
                top-[604px]          /* Positioned at bottom of hero */
                w-full
                flex
                flex-row
                justify-center
                items-center
                gap-8
                px-4
            ">
                {/* Map through the data array to render cards */}
                {featureCardsData.map((card) => (
                    <FeatureCard
                        key={card.id}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

        </div>
    );
}