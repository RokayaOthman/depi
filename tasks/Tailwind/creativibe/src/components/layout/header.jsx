// src/components/layout/Header.jsx
export default function Header() {
  return (
    <header className="bg-transparent text-white p-4 absolute w-full z-50">
      {/* absolute positioning puts it ON TOP of hero */}
      <div className="container mx-auto flex justify-between items-center">
        <nav
          className="
                           position: absolute
                            top-0 left-0       
                            w-full mx-auto
                            h-[79px]           
                            px-10              
                            py-4               
                            flex                      
                            items-center       
                            gap-[142px]        
                            bg-linear-to-b   
                            from-black/7.5     
                            to-black/25       
                            border-b           
                            border-black/70   
                            border-[0.2px]    
                            box-border         
                            "
        >
          <h1
            className="
        text-2xl
        font-bold
        sm:h-[28px]
        md:h-[32px]
        lg:h-[36px] lg:w-[164px]
        font-['Dela_Gothic_One'] text-[25px] leading-9
        text-orange-500
        flex-none
        
        "
          >
            CreatiVibe
          </h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-white hover:text-orange-500">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-orange-500">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
