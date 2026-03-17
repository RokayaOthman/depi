function ProductsCard({ image, name, price }) {
  return (
    <>
      <div className="flex flex-col items-center gap-2 w-70">
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
