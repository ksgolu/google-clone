import React from 'react';
import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';
export default function HomeHeader() {
  return (
    <header className="flex justify-end items-center p-5">
      <div className="flex space-x-4">
        <Link className="hover:underline" href={'https://mail.google.com'}>
          Gmail
        </Link>
        <Link href={'https://images.google.com'}>Images</Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 hover: rounded-full text-2xl" />
        <button
          className="bg-blue-500 py-1 px-4 rounded-md text-white hover:brightness-105 hover:shadow-md transition-shadow "
          type="button"
        >
          Sign in
        </button>
      </div>
    </header>
  );
}
