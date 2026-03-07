import ProductRow from "./ProductRow";

function ProductTable({ products, deleteProduct, editProduct }) {
  return (
    <div className="w-full overflow-x-auto mt-6">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden text-sm text-left">

        <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
          <tr>
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Title</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Taxes</th>
            <th className="px-4 py-3">Category</th>
            <th className="px-4 py-3">Total</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Update</th>
            <th className="px-4 py-3">Delete</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {products.map((product, index) => (
            <ProductRow
              key={index}
              product={product}
              index={index}
              deleteProduct={deleteProduct}
              editProduct={editProduct}
            />
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default ProductTable;