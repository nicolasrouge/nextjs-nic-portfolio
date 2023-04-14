'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/about': {
    name: 'about',
  },
  '/blog': {
    name: 'blog',
  }
  // },
  // '/guestbook': {
  //   name: 'guestbook',
  // },
};

function Logo() {
  return (
    <Link aria-label="Nicolas Rouge" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="25"
        height="37"
        viewBox="0 0 350 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* N */}
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
          d="M30 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
          d="M30 18L192 285"
          stroke="currentColor"
          strokeWidth={78}
        />
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
          d="M200 316V0"
          stroke="currentColor"
          strokeWidth={78}
        />
      </motion.svg>

    </Link >
  );
}

export default function Navbar() {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="md:sticky md:top-20 flex items-center md:block">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname;
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive,
                        'font-bold': isActive,
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-[#2C394B] rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
