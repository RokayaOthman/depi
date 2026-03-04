const ProductCard = ({className}) => {
  return (
<div className={`max-w-fit bg-[#F9F9F9] p-6 font-sans text-gray-900 ${className}`}>      
      {/* Header: Title & Price */}
      <div className="flex justify-between items-start mb-2">
        <h1 className="text-3xl font-bold text-gray-900">Suit</h1>
        <span className="text-2xl font-bold text-gray-900">EGP 700</span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < 4 ? 'fill-current' : 'text-gray-300 fill-current'}`} viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>  
        <span className="text-sm text-gray-500">(4)</span>
      </div>

      {/* Delivery & Stock Status */}
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Arrive in 3 days</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span>Available in stock</span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>

      {/* Size Selector */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-3">Size</h2>
        <div className="flex gap-3">
          {['S', 'M', 'L', 'XL'].map((size, index) => (
            <button
              key={size}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all
                ${index === 0 
                  ? 'bg-gray-900 text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-400'
                }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colour Selector */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-3">Colour</h2>
        <div className="flex gap-4">
          {[
            { color: 'bg-gray-400', name: 'Grey' },
            { color: 'bg-red-900', name: 'Maroon' },
            { color: 'bg-green-900', name: 'Green', active: true },
            { color: 'bg-[#E8DCC4]', name: 'Beige' }
          ].map((item, index) => (
            <button
              key={item.name}
              className={`w-8 h-8 rounded-full ${item.color} transition-all
                ${item.active ? 'ring-2 ring-offset-2 ring-gray-900 scale-110' : 'hover:scale-110'}
              `}
              aria-label={item.name}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button className="flex-1 bg-[#E6DCD5] hover:bg-[#dcd3cc] text-gray-900 font-semibold py-3.5 px-6 rounded-lg transition-colors">
          ADD TO CART
        </button>
        <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-gray-900 font-semibold py-3.5 px-6 rounded-lg transition-colors">
          BUY NOW
        </button>
      </div>

    </div>
  );
};

export default ProductCard;