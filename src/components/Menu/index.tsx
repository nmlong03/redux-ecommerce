import { Link } from "react-router-dom";

const Menu = () => {
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
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>


            <div className="mx-7 flex gap-8">
                <a className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    href="index.html">
                    Home
                </a>
                <a className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    href="catalog.html">
                    Catalog
                </a>
                <a className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    href="about-us.html">
                    About Us
                </a>
                <a className="font-light text-white duration-100 hover:text-yellow-400 hover:underline"
                    href="contact-us.html">
                    Contact Us
                </a>
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