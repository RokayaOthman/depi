import ProductsCard from "../components/ui/ProductsCard";
import img4 from "../assets/products/img-4.png";
import img5 from "../assets/products/img-5.png";
import img6 from "../assets/products/img-6.png";
import img7 from "../assets/products/img-7.png";
import img9 from "../assets/products/img-9.png";
let name = "Men Round Neck Pure Cotton T-shirt";
let price = "67$";
const products = [
  { image: img4, name: name, price: price },
  { image: img5, name: name, price: price },
  { image: img6, name: name, price: price },
  { image: img7, name: name, price: price },
  { image: img9, name: name, price: price },
];
function BestSellers() {
  return (
    <div>
      {/* title */}
      <div className="mb-10">
        <div className="text-3xl inline-flex gap-2 items-center mb-3">
          <p>
            BEST <span className="font-medium">SELLERS___</span>
          </p>
        </div>
        <p className="m-auto text-gray-600">
          Discover the best-selling fashion pieces at Forever Clothes, featuring timeless styles loved by fashion enthusiasts everywhere.   
        </p>
      </div>
      {/* products */}
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
      {products.map((product, index) => (
        <ProductsCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
    </div>

    
  );
}   

export default BestSellers;
