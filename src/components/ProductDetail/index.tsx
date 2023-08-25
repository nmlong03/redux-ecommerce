import React, { useState } from 'react'
import { useGetProductByIdQuery } from '../../api/product'
import { useParams } from 'react-router-dom'
import { useAddToCartMutation } from '../../api/cart'
import { message } from "antd";

const ProductDetail = () => {
    const { id } = useParams()
    const userId = localStorage.getItem("userId");
    const [messageApi, contextHolder] = message.useMessage();

    const [quantity, setQuantity] = useState<number>()
    const { data: product } = useGetProductByIdQuery(id)
    const [addToCartItem] = useAddToCartMutation()
    const onHandleChangeInputQuantity = (e) => {
        e.preventDefault();
        setQuantity(e.target.value)

    }
    const addToCart = (id: string | number | undefined) => {
        if (!userId) {
            messageApi.open({
                type: "error",
                content: "You are not logged in!",
            });
        } else {
            addToCartItem({ userId: userId, count: quantity, productId: id }).unwrap().then(() => {
                messageApi.open({
                  type: "success",
                  content: "Add to cart successfully!",
                });
              })
        }
    }

    return (
        <div>
            {contextHolder}
            <nav className="mx-auto mt-4 max-w-[1200px] px-5">
    <ul className="flex items-center">
      <li className="cursor-pointer">
        <a href="index.html">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
        </a>
      </li>
      <li>
        <span className="mx-2 text-gray-500">&gt;</span>
      </li>

      <li className="text-gray-500">Big italian sofa</li>
    </ul>
  </nav>
            <section className="container mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
                <div className="container mx-auto px-4">
                    <img className="w-full" src={product?.image} alt="Sofa image" />

                    {/* Desciption image */}
                    {/* <div className="mt-3 grid grid-cols-4 gap-4">
                        <div>
                            <img className="cursor-pointer" src="./assets/images/kitchen.png" alt="kitchen image" />
                        </div>

                        <div>
                            <img className="cursor-pointer" src="./assets/images/living-room.png" alt="kitchen image" />
                        </div>

                        <div>
                            <img className="cursor-pointer" src="./assets/images/outdoors.png" alt="kitchen image" />
                        </div>

                        <div>
                            <img className="cursor-pointer" src="./assets/images/product-chair.png"
                                alt="kitchen image" />
                        </div>
                    </div> */}
                </div>

                <div className="mx-auto px-5 lg:px-5">
                    <h2 className="pt-3 text-2xl font-bold lg:pt-0">BIG ITALIAN SOFA</h2>
                    <div className="mt-1">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="h-4 w-4 text-yellow-400">
                                <path fill-rule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                    clip-rule="evenodd" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="h-4 w-4 text-yellow-400">
                                <path fill-rule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                    clip-rule="evenodd" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="h-4 w-4 text-yellow-400">
                                <path fill-rule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                    clip-rule="evenodd" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="h-4 w-4 text-yellow-400">
                                <path fill-rule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                    clip-rule="evenodd" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                className="h-4 w-4 text-gray-200">
                                <path fill-rule="evenodd"
                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                    clip-rule="evenodd" />
                            </svg>

                            <p className="ml-3 text-sm text-gray-400">(150 reviews)</p>
                        </div>
                    </div>

                    <p className="mt-5 font-bold">
                        Availability: <span className="text-green-600">In Stock</span>
                    </p>
                    <p className="font-bold">Brand: <span className="font-normal">Apex</span></p>
                    <p className="font-bold">
                        Cathegory: <span className="font-normal">Sofa</span>
                    </p>
                    <p className="font-bold">SKU: <span className="font-normal">BE45VGTRK</span></p>

                    <p className="mt-4 text-4xl font-bold text-violet-900">
                        $450 <span className="text-xs text-gray-400 line-through">$550</span>
                    </p>

                    <p className="pt-5 text-sm leading-5 text-gray-500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
                        exercitationem voluptate sint eius ea assumenda provident eos
                        repellendus qui neque! Velit ratione illo maiores voluptates commodi
                        eaque illum, laudantium non!
                    </p>

                    <div className="mt-6">
                        <p className="pb-2 text-xs text-gray-500">Size</p>

                        <div className="flex gap-1">
                            <div
                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                                XS
                            </div>
                            <div
                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                                S
                            </div>
                            <div
                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                                M
                            </div>

                            <div
                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                                L
                            </div>

                            <div
                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                                XL
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="pb-2 text-xs text-gray-500">Color</p>

                        <div className="flex gap-1">
                            <div
                                className="h-8 w-8 cursor-pointer border border-white bg-gray-600 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                            </div>
                            <div
                                className="h-8 w-8 cursor-pointer border border-white bg-violet-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                            </div>
                            <div
                                className="h-8 w-8 cursor-pointer border border-white bg-red-900 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="pb-2 text-xs text-gray-500">Quantity</p>

                        <div className="flex">
                            <button
                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                                &minus;
                            </button>
                            <div
                                className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500">
                                1
                            </div>
                            <button
                                className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-neutral-100 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500">
                                &#43;
                            </button>
                        </div>
                    </div>

                    <div className="mt-7 flex flex-row items-center gap-6">
                        <button onClick={() => addToCart(product?._id)}
                            className="flex h-12 w-1/3 items-center justify-center bg-violet-900 text-white duration-100 hover:bg-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="mr-3 h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>

                            Add to cart
                        </button>
                        <button
                            className="flex h-12 w-1/3 items-center justify-center bg-amber-400 duration-100 hover:bg-yellow-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" className="mr-3 h-4 w-4">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>

                            Wishlist
                        </button>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductDetail
