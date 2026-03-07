function calculateTotal(product) {
  const price = Number(product.price) || 0;
  const taxes = Number(product.taxes) || 0;
  const ads = Number(product.ads) || 0;
  const discount = Number(product.discount) || 0;

  return price + taxes + ads - discount;
}

export default calculateTotal;