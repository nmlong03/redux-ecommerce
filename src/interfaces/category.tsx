import { IProduct } from "./product";

export interface ICategory {
    _id?: string | number,
    name: string,
    image: string,
    products: IProduct[]
}