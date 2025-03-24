"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTikTok,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FiMenu, FiX, FiList } from "react-icons/fi";
type Props = {};

const MainNavbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  // 195d82
  return (
    <nav className="w-full lg:h-20 h-14  my-auto drop-shadow-md shadow-lg bg-[#88acc1]">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div className="justify-items-center">
          <Link href="/">
            <Image
              src="/Logoweb.svg"
              alt="Site Logo"
              width={100}
              height={100}
              className="mt-2 cursor-pointer hidden lg:block"
              priority
            />
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="hidden lg:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">About</li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 uppercase hover:border-b text-xl">Blog</li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Contact
              </li>
            </Link>
            <Link href="/Learnmore">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Learn more
              </li>
            </Link>
          </ul>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden cursor-pointer pl-24"
        >
          {isOpen ? <FiList size={25} /> : <FiMenu size={25} />}
        </div>
      </div>
      <div
        // className={
        //   isOpen
        //     ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ffffff] p-10 ease-in duration-700"
        //     : "fixed left-[100%] top-0 p-10  w-[65%] h-screen ease-in duration-700"
        // }
        className={
          isOpen
            ? "fixed left-0 top-0 h-screen lg:hidden w-screen  bg-[#2077a7] p-10 ease-in duration-700"
            : "fixed left-[100%] top-0 h-screen w-screen  bg-[#2077a7] p-10 ease-in duration-1000"
        }
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full justify-end"
        >
          {/* <FiX size={25} className={isOpen ? "block" : "hidden"} /> */}
          <FiX size={25} />
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/about">
              <li
                onClick={() => setIsOpen(false)}
                className="py-2 cursor-pointer"
              >
                About
              </li>
            </Link>
            <Link href="/blog">
              <li
                onClick={() => setIsOpen(false)}
                className="py-2 cursor-pointer"
              >
                Blog
              </li>
            </Link>
            <Link href="/contact">
              <li
                onClick={() => setIsOpen(false)}
                className="py-2 cursor-pointer"
              >
                Contact
              </li>
            </Link>
            <Link href="/Learnmore">
              <li
                onClick={() => setIsOpen(false)}
                className="py-2 cursor-pointer"
              >
                Learn more
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-start space-x-8">
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineYoutube size={30} className="cursor-pointer" />
          <AiOutlineTikTok size={30} className="cursor-pointer" />
        </div>
        <Link href="/">
          <Image
            src="/Logoweb.svg"
            alt="Site Logo"
            width={120}
            height={120}
            className="cursor-pointer pt-4"
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default MainNavbar;
