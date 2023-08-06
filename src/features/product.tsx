import { useGetProductsQuery } from "../api/product";
import { IProduct } from "../interfaces/product";


const ProductList = () => {
    const {data, error, isLoading} = useGetProductsQuery();

    const products = (data as { data: IProduct[] } | undefined)?.data    
    if (isLoading) return ;
    if (error) {
        if ("data" in error && "status" in error) {
            return (
                <div>
                    {error.status} - {JSON.stringify(error.data)}
                </div>
            );
        }
    }  

  return (
    <div>
        {products?.map((item: IProduct ) => {
                return (
                    <div key={item.id}>
                        {item.name}
                    </div>
                );
            })}
    </div>
  )
}

export default ProductList