import { Skeleton } from "antd";
import { useGetProductsQuery } from "../../api/product";
import ProductCard from "../ProductCard";
const ProductList = ({products = []}) => {
  
  const { data: productData, isLoading } = useGetProductsQuery();
  const productsList = productData?.data;
  
  return (
    <div>

      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Product Hot!!!
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            {isLoading ? (<Skeleton />) : (<ProductCard products={!products.length ? productsList : products} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
