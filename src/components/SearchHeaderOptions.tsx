'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';
import { SEARCH_TERM_QUERY_NAME, generateQuery, PAGE_TABS } from '@/shared';
import type { IpageProperties } from '@/shared';
interface IActivePath {
  all: boolean;
  image: boolean;
}

function getActivePath(pathname: string): IActivePath {
  return {
    all: pathname === '/search/web',
    image: pathname === '/search/image',
  };
}
export default function SearchHeaderOptions() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get(SEARCH_TERM_QUERY_NAME);

  const activePath = getActivePath(pathname);
  const query = generateQuery({
    [SEARCH_TERM_QUERY_NAME]: searchTerm,
  });
  const handleSelectTab = (tab: IpageProperties) => {
    router.push(tab.path + query);
  };

  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => {
          handleSelectTab(PAGE_TABS.all);
        }}
        className={`flex items-center space-x-2 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${activePath.all ? 'text-blue-600 border-blue-600' : ''}`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => {
          handleSelectTab(PAGE_TABS.image);
        }}
        className={`flex items-center space-x-2 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${activePath.image ? 'text-blue-600 border-blue-600' : ''}`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Image</p>
      </div>
    </div>
  );
}
