import { Skeleton } from "antd";
import { useGetProductsQuery } from "../../api/product";
import { IProduct } from "../../interfaces/product";
import { useAddToCartMutation } from "../../api/cart";
import { message } from "antd";
import { Link } from "react-router-dom";
const ProductList = () => {
  const { data: productData, isLoading } = useGetProductsQuery();
  const [addToCart] = useAddToCartMutation();
  const userId = localStorage.getItem("userId");
  const [messageApi, contextHolder] = message.useMessage();

  const addCart = (id: unknown) => {
    if (!userId) {
      messageApi.open({
        type: "error",
        content: "You are not logged in!",
      });
    } else {
      addToCart({
        productId: id,
        userId: userId,
      })
        .unwrap()
        .then(() => {
          messageApi.open({
            type: "success",
            content: "Add to cart successfully!",
          });
        });
    }
  };
  return (
    <div>
      {contextHolder}

      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Product Hot!!!
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            {isLoading ? (
              <Skeleton />
            ) : (
              productData?.data?.map((product: IProduct) => {
                return (
                  <article
                    key={product?._id}
                    className="relative flex flex-col overflow-hidden rounded-lg border"
                  >
                    <Link to={`/product/${product?._id}`}>
                    <div className="aspect-square overflow-hidden">
                      <img
                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                        src={product?.image}
                        alt=""
                      />
                    </div>
                    <div className="absolute top-0 m-2 rounded-full bg-white">
                      <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                        Sale
                      </p>
                    </div>
                    <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                      <div className="mb-2 flex">
                        <p className="mr-3 text-sm font-semibold">
                          {product?.price}
                        </p>
                      </div>
                      <h3 className="mb-2 text-sm text-gray-400">
                        {product?.name}
                      </h3>
                    </div>
                    </Link>
                    <button
                      onClick={() => addCart(product?._id)}
                      className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600"
                    >
                      <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                        Add to cart
                      </div>
                      <div className="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">
                        +
                      </div>
                    </button>

                  </article>
                );
              })
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
