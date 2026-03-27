function ProductsCard({ id, image, name, price }) {
 const goToProduct = () => {
    window.location.href = `/product.html?id=${id}`
  }
  return (
    <>
      <div onClick={goToProduct} className="flex flex-col items-center gap-2 w-70 cursor-pointer">
        <div>
          <img src={image} alt={name}></img>
        </div>
        <p>{name}</p>
        <p className="text-bold">{price}</p>
      </div>
    </>
  );
}
export default ProductsCard;
