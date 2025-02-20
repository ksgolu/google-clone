'use client';
import { IoMdSearch } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { generateQuery } from '@/shared';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const pushToRouter = (input: string) => {
    const query = generateQuery({
      searchTerm: input.trim(),
    });
    router.push(`/search/web${query}`);
  };

  const handleSubmit = (e: Event): void => {
    console.log('event', e);
    console.log(input);
    e.preventDefault();
    if (!input.trim()) return;
    pushToRouter(input);
  };

  const randomSearch = async (): void => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://random-word-api.herokuapp.com/word',
      );
      const randomWord = await response.json();
      pushToRouter(randomWord[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-10 mx-auto max-w-[90%]  border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
      >
        <IoMdSearch className="text-xl text-gray-500 mr-3" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow focus:outline-none dark:bg-gray-100"
          placeholder="Search google or type URL"
        />
        <FaMicrophone className="text-xl text-gray-500 ml-3" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row mt-10">
        <button onClick={handleSubmit} type="submit" className="btn">
          Google Search
        </button>
        <button
          disabled={isLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {isLoading ? (
            <img
              className="h-6 text-gray-950"
              src="spinner.svg"
              alt="spinner"
            />
          ) : (
            "I'm Felling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
