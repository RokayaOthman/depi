export default function GallerySection() {
    return (

       <div className="bg-gray-100">
            {/* // gallery title */}
            <div className="flex justify-center align-middle">
                <span className="text-orange-500 text-3xl mt-12 mb-10 font-dela">Gallery</span>
            </div>
            {/* // three images */}
            <div className="w-full flex flex-col md:flex-row justify-center gap-6 px-4 mb-[40px] md:mb-[60px] lg:mb-[91px]">
                <img src="src\assets\gallery-1.jpg" className="max-w-[460px]  aspect-[460/428] h-auto object-cover"></img>
                <img src="src\assets\gallery-2.jpg" className="max-w-[460px]  aspect-[460/428] h-auto object-cover"></img>
                <img src="src\assets\gallery-3.jpg" className="max-w-[460px]  aspect-[460/428] h-auto object-cover"></img>
            </div>
       </div>
        
    );
}