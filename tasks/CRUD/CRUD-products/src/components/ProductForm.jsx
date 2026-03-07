import { useState, useEffect } from "react";
import calculateTotal from "../utils/calculateTotal";

function ProductForm({ addProduct, editIndex, products }) {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    taxes: "",
    ads: "",
    discount: "",
    count: "",
    category: "",
  });

  const total = calculateTotal(product);

  // useEffect only runs after React updates DOM
  useEffect(() => {
    if (editIndex !== null) {
      setProduct(products[editIndex]);
    }
  }, [editIndex]);

  // whenever an input in the form changes , this runs :
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct({
      ...product,
      total,
    });

    setProduct({
      title: "",
      price: "",
      taxes: "",
      ads: "",
      discount: "",
      count: "",
      category: "",
    });
  };

  const inputStyle =
    "bg-gray-800 text-white rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400";

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-6xl mx-auto flex flex-col gap-4"
    >
      {/* Title */}
      <input
        className={`${inputStyle} w-full`}
        name="title"
        placeholder="Title"
        value={product.title}
        onChange={handleChange}
        required
      />

      {/* Price Row */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-center">

        <input
          className={inputStyle}
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <input
          className={inputStyle}
          name="taxes"
          placeholder="Taxes"
          value={product.taxes}
          onChange={handleChange}
        />

        <input
          className={inputStyle}
          name="ads"
          placeholder="Ads"
          value={product.ads}
          onChange={handleChange}
        />

        <input
          className={inputStyle}
          name="discount"
          placeholder="Discount"
          value={product.discount}
          onChange={handleChange}
        />

        {/* Total */}
        <div className="bg-red-600 text-white rounded-md px-3 py-2 text-center font-semibold">
          Total: {total}
        </div>

      </div>

      {/* Count & Category */}
      <div className="grid md:grid-cols-2 gap-3">

        <input
          className={inputStyle}
          name="count"
          placeholder="Count"
          value={product.count}
          onChange={handleChange}
        />

        <input
          className={inputStyle}
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 transition text-black py-2 rounded-full font-semibold tracking-wide"
      >
        {editIndex !== null ? "Update" : "Create"}
      </button>
    </form>
  );
}

export default ProductForm;