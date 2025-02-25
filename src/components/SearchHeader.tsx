import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SearchBox from './SearchBox';
import { RiSettings3Line } from 'react-icons/ri';
import { TbGridDots } from 'react-icons/tb';
import SearchHeaderOptions from './SearchHeaderOptions';
export default function SearchHeader() {
  return (
    <header className="sticky-top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={'/'}>
          <Image
            alt="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            width="120"
            height="40"
          ></Image>
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2 ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="ml-2 bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
