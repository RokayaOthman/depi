import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductTable from "./components/ProductTable";

function App() {
  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addProduct = (product) => {
    if (editIndex !== null) {
      const updated = [...products];
      updated[editIndex] = product;
      setProducts(updated);
      setEditIndex(null);
    } else {
      setProducts([...products, product]);
    }
  };

  const deleteProduct = (index) => {
    const updated = products.filter((_, i) => i !== index);
    setProducts(updated);
  };

  const editProduct = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1 className="my-6" >Create</h1>

      <ProductForm
        addProduct={addProduct}
        editIndex={editIndex}
        products={products}
      />

      <h1>Products</h1>

      <ProductTable
        products={products}
        deleteProduct={deleteProduct}
        editProduct={editProduct}
      />
    </div>
  );
}

export default App;