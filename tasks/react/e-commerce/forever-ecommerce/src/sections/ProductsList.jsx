import ProductsCard from "../components/ui/ProductsCard";
import img11 from "../assets/products/img-11.png";
import img2 from "../assets/products/img-2.png";
import img4 from "../assets/products/img-4.png";
import img5 from "../assets/products/img-5.png";
import img6 from "../assets/products/img-6.png";
import img7 from "../assets/products/img-7.png";
import img9 from "../assets/products/img-9.png";

// creating a list of objects for cards data
let name = "Men Round Neck Pure Cotton T-shirt";
let price = "67$";
const products = [
  { image: img11, name: name, price: price },
  { image: img7, name: name, price: price },
  { image: img4, name: name, price: price },
  { image: img5, name: name, price: price },
  { image: img6, name: name, price: price },
  { image: img9, name: name, price: price },
  { image: img2, name: name, price: price },
];

function ProductsList() {
  return (
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
  );
}
export default ProductsList;
