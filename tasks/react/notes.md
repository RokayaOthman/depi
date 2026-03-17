inline flex : makes the element inline which means that it is in the same line as the other elements

You can center the single column when the screen is small by combining justify-items-center with your grid.

JSX lets you embed JavaScript expressions inside HTML-like code using curly braces {}.
Anything inside {} is treated as JS code 
<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
  {products.map((product, index) => (
    <ProductsCard
      key={index}
      image={product.image}
      name={product.name}
      price={product.price}
    />
  ))}
</div>

outer {} => embed JS inside JSX
map() => loop over array to create JSX elements dynamically 

---
the structure of the home page :
hero
latest collection
best seller
footer