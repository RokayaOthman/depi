import aboutImage from "../../assets/about-us.jpg";

export default function AboutSection() {
  return (
    <section className="w-full h-[657px] bg-white relative">
      {/* Main container - centered */}
      <div className="
          bg-gray-100
          absolute 
          left-1/2 -translate-x-1/2
          top-16
          w-[1264px] h-[529px]
          flex flex-row
          items-center
          gap-[104px]
      ">
        {/* Left side - Image with overlay effect */}
        <div className="relative w-[550px] h-[510px]">
          {/* Orange background layer - slightly offset */}
          <div className="
            absolute 
            top-4 left-4
            w-[550px] h-[510px]
            bg-orange-500 
            rounded-lg
          "></div>  
          
          {/* Image */}
          <div 
            className="
              absolute 
              top-0 left-0
              w-[550px] h-[510px]
              bg-cover bg-center
              rounded-lg
            " 
            style={{ backgroundImage: `url(${aboutImage})` }}>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="
          flex flex-col items-start 
          gap-6 md:gap-8 
          w-[589px] 
          h-[516px]
        ">
          {/* About Us title */}
          <h2 className="
            font-['Dela_Gothic_One'] 
            text-orange-500 
            text-[22px] md:text-[25px] 
            leading-8 md:leading-9
            w-full
          ">
            About Us
          </h2>

          {/* Content sections */}
          <div className="flex flex-col items-start gap-6 md:gap-8 w-full">
            {/* Mission Statement */}
            <div className="flex flex-col items-start gap-1 md:gap-2 w-full">
              <h3 className="
                font-['Poppins'] font-bold
                text-black text-[18px] md:text-[20px] 
                leading-[28px] md:leading-[30px]
              ">
                Mission Statement:
              </h3>
              <p className="
                font-['Poppins'] font-normal
                text-black text-[16px] md:text-[20px] 
                leading-[24px] md:leading-[30px]
              ">
                Norem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>

            {/* Story/Background */}
            <div className="flex flex-col items-start gap-1 md:gap-2 w-full">
              <h3 className="
                font-['Poppins'] font-bold
                text-black text-[18px] md:text-[20px] 
                leading-[28px] md:leading-[30px]
              ">
                Story/Background:
              </h3>
              <p className="
                font-['Poppins'] font-normal
                text-black text-[16px] md:text-[20px] 
                leading-[24px] md:leading-[30px]
                w-full md:w-[558px]
              ">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>

            {/* Our Team */}
            <div className="flex flex-col items-start gap-1 md:gap-2 w-full">
              <h3 className="
                font-['Poppins'] font-bold
                text-black text-[18px] md:text-[20px] 
                leading-[28px] md:leading-[30px]
              ">
                Our Team:
              </h3>
              <p className="
                font-['Poppins'] font-normal
                text-black text-[16px] md:text-[20px] 
                leading-[24px] md:leading-[30px]
              ">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
        </div>  
      </div>  
    </section>
  );
}