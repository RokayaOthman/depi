function ProductRow({ product, index, deleteProduct, editProduct }) {
  return (
    <tr>

      <td>{index + 1}</td>
      <td>{product.title}</td>
      <td>{product.price}</td>
      <td>{product.taxes}</td>
      <td>{product.category}</td>
      <td>{product.total}</td>

      <td>Complete</td>

      <td>
        <button onClick={() => editProduct(index)}>
          Update
        </button>
      </td>

      <td>
        <button onClick={() => deleteProduct(index)}>
          Delete
        </button>
      </td>

    </tr>
  );
}

export default ProductRow;