// src/components/layout/Header.jsx
export default function Header() {
  return (
    <header className="bg-transparent text-white p-4 absolute w-full z-50">
      {/* absolute positioning puts it ON TOP of hero */}
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CreatiVibe</h1>
        <nav
                className="
                           
                            top-0 left-0       /* left: 0px; top: 0px; */
                            w-[1440px]         /* width: 1440px */
                            h-[79px]           /* height: 79px */
                            px-10              /* padding: 16px 40px (40px = 2.5rem = px-10) */
                            py-4               /* 16px vertical padding */
                            flex               /* display: flex */
                            flex-row           /* flex-direction: row */
                            items-center       /* align-items: center */
                            gap-[142px]        /* gap: 142px (custom value) */
                            bg-gradient-to-b   /* linear gradient */
                            from-black/7.5     /* rgba(0,0,0,0.075) */
                            to-black/25        /* rgba(0,0,0,0.25) */
                            border-b           /* border-bottom */
                            border-black/70    /* border color with opacity */
                            border-[0.2px]     /* border width (custom thin border) */
                            box-border         /* box-sizing: border-box */
                            "
        >
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-white hover:text-orange-500">Home</a></li>
            <li><a href="#about" className="text-white hover:text-orange-500">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}