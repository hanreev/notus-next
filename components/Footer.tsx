import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io5';

function Footer() {
  return (
    <footer className="relative bg-primary-200 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
        style={{ transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-primary-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Let&apos;s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-primary-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 flex">
              <a
                href="https://twitter.com"
                className="bg-white text-sky-400 hover:bg-sky-400 hover:text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoTwitter />
              </a>
              <a
                href="https://www.facebook.com"
                className="bg-white text-sky-600 hover:bg-sky-600 hover:text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoFacebook />
              </a>
              <a
                href="https://www.instagram.com"
                className="bg-white text-fuchsia-700 hover:bg-fuchsia-700 hover:text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoInstagram />
              </a>
              <a
                href="https://www.youtube.com"
                className="bg-white text-red-600 hover:bg-red-600 hover:text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoYoutube />
              </a>
              <a
                href="https://github.com"
                className="bg-white text-slate-800 hover:bg-slate-800 hover:text-white shadow-lg font-normal h-10 w-10 flex items-center justify-center rounded-full outline-none focus:outline-none mr-2"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-primary-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-primary-600 hover:text-primary-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation?ref=nnjs-footer"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary-600 hover:text-primary-800 font-semibold block pb-2 text-sm"
                      href="https://blog.creative-tim.com?ref=nnjs-footer"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary-600 hover:text-primary-800 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial?ref=nnjs-footer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary-600 hover:text-primary-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free?ref=nnjs-footer"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-primary-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-primary-600 hover:text-primary-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary-600 hover:text-primary-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=nnjs-footer"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary-600 hover:text-primary-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=nnjs-footer"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary-600 hover:text-primary-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=nnjs-footer"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-primary-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full text-center">
            <div className="text-sm text-primary-500 font-semibold py-1 px-4">
              Copyright&copy; {new Date().getFullYear()} SuperDes by{' '}
              <a
                href="https://www.karomap.com"
                className="text-primary-500 hover:text-primary-800"
              >
                Karomap
              </a>
              . All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
