import clsx from 'clsx';
import debounce from 'lodash/debounce';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { APP_NAME } from '../utils';

interface Props {
  className?: string;
  fixed?: boolean;
  transparent?: boolean;
  fixedOnScroll?: boolean;
}

const Navbar: React.FC<Props> = ({
  className,
  fixed,
  transparent,
  fixedOnScroll,
}) => {
  const navRef = useRef<HTMLElement>(null);

  const [isFixed, setIsFixed] = useState(fixed);
  const [isTransparent, setIsTransparent] = useState(transparent);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    setIsFixed(fixed);
  }, [fixed]);

  useEffect(() => {
    setIsTransparent(transparent);
  }, [transparent]);

  useEffect(() => {
    const listener = debounce(() => {
      const navHeight = navRef.current?.clientHeight || 0;
      const fixed = window.scrollY > navHeight + 16;
      setIsFixed(fixed);
      if (transparent) setIsTransparent(!fixed);
    }, 50);

    if (fixedOnScroll) {
      listener();
      window.addEventListener('scroll', listener);
    }

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [fixedOnScroll, transparent]);

  const textClassName = isTransparent ? 'text-white' : 'text-primary-700';
  const linkClassName = isTransparent
    ? 'text-primary-700 hover:text-primary-500 lg:text-white lg:hover:text-slate-200'
    : 'text-primary-700 hover:text-primary-500';
  const ctaClassName = isTransparent
    ? 'bg-white text-primary-700 active:bg-primary-50'
    : 'bg-accent-500 text-white active:bg-accent-600';
  const navbarToggleClassName = isTransparent
    ? 'border-white text-white'
    : 'border-transparent text-primary-700';

  return (
    <nav
      ref={navRef}
      className={clsx(
        'top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg transition-all duration-300',
        {
          'fixed shadow': isFixed,
          absolute: !isFixed,
          'bg-white': !isTransparent,
        },
        className
      )}
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a
              className={clsx(
                ' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase',
                textClassName
              )}
            >
              {APP_NAME}
            </a>
          </Link>
          <button
            className={clsx(
              'text-xl leading-none px-3 py-1 border border-solid rounded bg-transparent lg:hidden outline-none focus:outline-none flex items-center justify-center',
              navbarToggleClassName
            )}
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="material-icons text-lg leading-none">menu</span>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
            (navbarOpen ? ' block' : ' hidden')
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={clsx(
                  'px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold',
                  linkClassName
                )}
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
              >
                Docs
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={clsx(
                  'px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold',
                  linkClassName
                )}
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-primary-400 fab fa-facebook text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={clsx(
                  'px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold',
                  linkClassName
                )}
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-primary-400 fab fa-twitter text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={clsx(
                  'px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold',
                  linkClassName
                )}
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar"
                target="_blank"
                rel="noreferrer"
              >
                <i className="text-primary-400 fab fa-github text-lg leading-lg " />
                <span className="lg:hidden inline-block ml-2">Star</span>
              </a>
            </li>

            <li className="flex items-center">
              <button
                className={clsx(
                  'text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150 flex items-center',
                  ctaClassName
                )}
                type="button"
              >
                <span className="material-icons text-lg leading-none mr-2">
                  cloud_download
                </span>
                Download
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
