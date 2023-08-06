import { Link } from "react-router-dom"

const Header = () => {
  return (
<div className="bg-white">
  <div className="border py-3 px-6">
    <div className="flex justify-between">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
        <span className="ml-2 font-semibold text-[#252C32]">What a Market</span>
      </div>

      <div className="ml-6 flex flex-1 gap-x-3">
        <input type="text" className="w-full rounded-md border border-[#DDE2E4] px-3 py-2 text-sm" value="DJI phantom" />
      </div>

      <div className="ml-2 flex">
        <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Orders</span>
        </div>

        <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Favorites</span>
        </div>

        <Link to={'/cart'} className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">3</span>
          </div>
          <span className="text-sm font-medium">Cart</span>
        </Link>

        <div className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
          <Link to={'/signin'} className="text-sm font-medium">Sign in</Link>
        </div>
      </div>
    </div>

    <div className="mt-4 flex items-center justify-between">
      <div className="flex gap-x-2 py-1 px-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
        <span className="text-sm font-medium">California</span>
      </div>

      <div className="flex gap-x-8">
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Best seller</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">New Releases</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Books</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Computers</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Fashion</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Health</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Pharmacy</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Toys & Games</span>
      </div>

      <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Becoma a seller</span>
    </div>
  </div>
</div>
  )
}

export default Header
