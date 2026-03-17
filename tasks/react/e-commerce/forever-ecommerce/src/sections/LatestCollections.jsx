import ProductsList from "./ProductsList";
function LatestCollections() {
  return (
    <>
      <div className="my-7">
        {/* title */}
        <div className="mb-10">
          <div className="text-3xl inline-flex gap-2 items-center mb-3">
            <p>
              LATEST <span className="font-medium">Collections</span>
            </p>
          </div>
          <p className="m-auto text-gray-600">
            Forever Clothes offers the latest trendy and high-quality fashion
            collections, keeping you stylish for every occasion.
          </p>
        </div>
        <ProductsList/>
      </div>
    </>
  );
}

export default LatestCollections;
