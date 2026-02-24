// src/components/ui/FeatureCard.jsx
export default function FeatureCard({ icon, title, description }) {
  return (
    
            <div className="
                            w-[339px] h-[163px]
                            flex flex-col items-center justify-center
                            p-4
                            gap-4
                            bg-black/15
                            border border-black/15
                            shadow-[2px_2px_19px_rgba(0,0,0,0.1)]
                            rounded-lg
                            ">          
            <div className="flex flex-col items-center gap-2">
                <h3 className="
                font-['Poppins'] font-bold text-[18px] leading-[27px]
                text-white
                ">  
                {title}
                </h3>
                <p className="
                font-['Poppins'] text-[16px] leading-6 text-center
                text-white
                ">
                {description}
                </p>
            </div>
            </div>
   
    
  );
}