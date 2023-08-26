import { Link } from "react-router-dom";
import { useGetCategoryQuery } from "../../api/category";

const Menu = () => {
    const {data: categories} = useGetCategoryQuery();
    
    return (
        <div>
            <nav className="relative bg-violet-900">
                <div className="mx-auto hidden h-12 w-full max-w-[1200px] items-center md:flex">
                    <details className="dropdown h-12"> 
                        <summary
                            className="ml-5 flex h-full w-40 cursor-pointer items-center justify-center bg-amber-400">
                            <div className="flex justify-around">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" className="mx-1 h-6 w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                All categories
                            </div>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            {categories?.map((category) => {
                                return (
                                    <>
                                        <li key={category._id}><Link to={`category/${category._id}`}>{category?.name}</Link></li>
                                    </>
                                )
                            })}
                        </ul>
                    </details>


                    <div className="mx-7 flex gap-8">
                        <Link to={`/`} className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                        >
                            Home
                        </Link>
                        <Link to={`/catelog`} className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                        >
                            Products
                        </Link>
                        <Link to={`/about`} className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                            >
                            About Us
                        </Link>
                        <Link to={`/contact`} className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div className="ml-auto flex gap-4 px-5">
                        <Link to={'/signin'} className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                            >
                            Login
                        </Link>

                        <span className="text-white">&#124;</span>

                        <Link to={'/signup'} className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                            >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menu;