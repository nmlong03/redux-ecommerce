import { useParams } from "react-router-dom"
import { useGetCategoryByIdQuery } from "../../api/category";
import ProductList from "../ProductList";

const ProductCategory = () => {
    const {id} = useParams();
    const {data} = useGetCategoryByIdQuery(id);
    
  return (
    <div>
        <ProductList products={data?.products} />
    </div>
  )
}

export default ProductCategory