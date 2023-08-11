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

            <section className="py-20 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="sticky top-0 z-50 overflow-hidden ">
                                <div className="relative mb-6 lg:mb-10 ">
                                    <a className="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                                        </svg>
                                    </a>
                                    <img className="object-cover w-full lg:h-1/2" src={product?.image} alt="" />
                                    <a className="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <span className="text-red-500 dark:text-red-200">{product?.categoryName}</span>
                                    <h2 className="max-w-xl mt-2 mb-4 text-5xl font-bold md:text-6xl font-heading dark:text-gray-300">
                                        {product?.name}
                                    </h2>

                                </div>
                                <div className="mt-6 ">
                                    <div className="flex flex-wrap items-center">
                                        <span className="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-4 h-4 text-gray-700 dark:text-gray-400 bi bi-bag" viewBox="0 0 16 16">
                                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path>
                                            </svg>
                                        </span>
                                        <h2 className="text-lg font-bold text-gray-700 dark:text-gray-400">Pickup</h2>
                                    </div>
                                    <div className="px-7">
                                        <a className="mb-2 text-sm text-blue-400 dark:text-blue-200" href="#">Check availability</a>
                                    </div>
                                    <div className="w-32 mb-8 ">
                                        <label
                                            className="w-full pb-1 text-xl font-semibold text-gray-700 border-b border-blue-300 dark:border-gray-600 dark:text-gray-400">Quantity</label>
                                        <div className="relative flex flex-row w-full h-10 mt-6 bg-transparent rounded-lg">
                                            <button
                                                className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                                <span className="m-auto text-2xl font-thin">-</span>
                                            </button>
                                            <input type="number"
                                                onChange={onHandleChangeInputQuantity}
                                                className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                                placeholder='1' defaultValue="1" min="1" max='100' />
                                            <button
                                                className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                                <span className="m-auto text-2xl font-thin">+</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 ">
                                    <button onClick={() => addToCart(product?._id)} className="w-full px-4 py-2 font-bold text-white bg-blue-400 lg:w-96 hover:bg-blue-500">
                                        Add to cart
                                    </button>
                                </div>
                                <div className="flex items-center mt-6 ">
                                    <div>
                                        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">Still deciding?
                                        </h2>
                                        <p className="mb-2 text-sm dark:text-gray-400"> Add this item to a list and easily come back
                                            to it later </p>
                                    </div>
                                    <span className="ml-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 text-blue-500 cursor-pointer hover:text-blue-600 dark:hover:text-blue-300 bi bi-bookmark dark:text-gray-400" viewBox="0 0 16 16">
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
                                        </svg></span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>Description</h2>
                            <p>{product?.desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
