'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const services = [
  {
    title: "Regulatory Compliance",
    href: "/services/regulatory-compliance",
    description: "Ensure your practice meets all necessary legal and operational standards with expert compliance solutions.",
  },
  {
    title: "Revenue Cycle Optimization",
    href: "/services/revenue-cycle-optimization",
    description: "Maximize your practice’s financial performance with data-driven revenue cycle management strategies.",
  },
  {
    title: "Custom HER Solutions",
    href: "/services/custom-her-solutions",
    description: "Boost efficiency with tailored electronic health record (EHR) solutions designed for your practice.",
  },
  {
    title: "Innovative Digital Health",
    href: "/services/innovative-digital-health",
    description: "Leverage cutting-edge digital health technologies to enhance patient care and streamline workflows.",
  },
  {
    title: "Digital Medicine Solutions",
    href: "/services/digital-medicine-solutions",
    description: "Empower your practice with virtual medical assistance and evidence-based clinical decision tools.",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Latest Blog",
      link: "/blog",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];

  return (
    <div>
      <nav className="bg-gray-100 mt-10 w-full">
        <div className="flex flex-wrap items-center sm:py-0 flex-col sm:flex-row justify-between max-w-screen-xl px-4 mx-auto">
          <Link href="/">
            <div className="max-h-16 overflow-y-hidden flex items-center justify-center">
              <Image src={'/logo.png'} alt="medico" height={120} width={120} />
            </div>
          </Link>
          <div className="flex items-center gap-x-12 ml-2 mt-2 sm:mt-0 sm:gap-x-0 sm:ml-0 lg:order-2">
            <Link
              href="/free-audit"
              className="bg-secondaryColor border-2 border-gray-100 text-white transition-all hover:ring-4 hover:ring-secondaryColor font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
            >
              Get Free Audit
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'
              } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {Links.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="block py-2 font-semibold pl-3 pr-4 text-black rounded lg:bg-transparent lg:hover:text-secondaryColor lg:p-0"
                      aria-current="page"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="text-lg p-0 font-medium text-black rounded lg:bg-transparent lg:hover:text-secondaryColor lg:p-0 bg-transparent"

                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="absolute w-full bg-white lg:w-auto z-50">
                    <ul className="grid p-4 w-full md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] lg:grid-cols-[.75fr_1fr]">
                      {services.map((service) => (
                        <li key={service.title} className="hover:bg-slate-100 p-3 rounded-xl">
                          <Link href={service.href}>
                            <h3 className="text-base font-semibold mb-2 leading-none">
                              {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
