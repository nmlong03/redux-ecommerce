export interface IProduct {
    _id?: string | number,
    name: string,
    price: number,
    desc: string,
    image: string,
    categoryId?: string,
    categoryName?: string,
    createdAt: string,
    updatedAt: string
}
