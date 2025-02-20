'use client';

import { RxCross2 } from 'react-icons/rx';
import { BsFillMicFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { generateQuery } from '@/shared';
type RouterType = ReturnType<typeof useRouter>;

function performSearch(router: RouterType, pathname: string, term: string) {
  const trimmedTerm = term.trim();
  if (!trimmedTerm) return;
  const query = generateQuery({ searchTerm: trimmedTerm });
  router.replace(`${pathname}${query}`);
}

const SearchBox = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchTerm = params.get('searchTerm');
  const [term, setTerm] = useState(searchTerm || '');

  const handleClearSearch = () => {
    setTerm('');
    router.replace(pathname);
  };
  const handleIconClick = () => {
    performSearch(router, pathname, term);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    performSearch(router, pathname, term);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
    >
      <input
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
        type="text"
        className="w-full focus:outline-none "
      />
      <RxCross2
        onClick={handleClearSearch}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2 "
      />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch
        onClick={handleIconClick}
        className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
};

export default SearchBox;
