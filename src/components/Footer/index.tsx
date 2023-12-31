import React from "react";

const Footer = () => {
  return (
    <>
<footer className="mx-auto hidden w-full max-w-[1200px] justify-between border-t pb-10 lg:flex">
    <div className="ml-5">
      <img className="mt-10 mb-5" src="https://res.cloudinary.com/dsrds1vli/image/upload/v1692891296/ASSAngular/company-logo.4e8f774b_m5kivl.svg" alt="company logo" />
      <p className="pl-0">
        Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit.
      </p>
      {/* <div className="mt-10 flex gap-3">
        <a href="https://github.com/bbulakh">
          <img className="h-5 w-5 cursor-pointer" src="./assets/images/github.svg" alt="github icon" />
        </a>
        <a href="https://t.me/b_bulakh">
          <img className="h-5 w-5 cursor-pointer" src="./assets/images/telegram.svg" alt="telegram icon" />
        </a>
        <a href="https://www.linkedin.com/in/bogdan-bulakh-393284190/">
          <img className="h-5 w-5 cursor-pointer" src="./assets/images/linkedin.svg" alt="twitter icon" />
        </a>
      </div> */}
    </div>

    <div className="flex gap-6">
      <div className="mx-5 mt-10">
        <p className="font-medium text-gray-500">FEATURES</p>
        <ul className="text-sm leading-8">
          <li><a href="#">Marketing</a></li>
          <li><a href="#">Commerce</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Merchendise</a></li>
        </ul>
      </div>

      <div className="mx-5 mt-10">
        <p className="font-medium text-gray-500">SUPPORT</p>
        <ul className="text-sm leading-8">
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Docs</a></li>
          <li><a href="#">Audition</a></li>
          <li><a href="#">Art Status</a></li>
        </ul>
      </div>

      <div className="mx-5 mt-10">
        <p className="font-medium text-gray-500">DOCUMENTS</p>
        <ul className="text-sm leading-8">
          <li><a href="#">Terms</a></li>
          <li><a href="#">Conditions</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">License</a></li>
        </ul>
      </div>

      <div className="mx-5 mt-10">
        <p className="font-medium text-gray-500">DELIVERY</p>
        <ul className="text-sm leading-8">
          <li><a href="#">List of countries</a></li>
          <li><a href="#">Special information</a></li>
          <li><a href="#">Restrictions</a></li>
          <li><a href="#">Payment</a></li>
        </ul>
      </div>
    </div>
  </footer>
  <footer className="mx-auto flex w-full max-w-[1200px] justify-center bg-violet-900 pb-10 md:hidden">
    <div>
      <img className="mt-10" src="./assets/images/company-logo-inverted.svg" alt="company logo" />
      <p className="pl-0 text-center text-white">&copy; Bogdan Bulakh, 2023</p>
    </div>
  </footer>

    </>
  );
};

export default Footer;

