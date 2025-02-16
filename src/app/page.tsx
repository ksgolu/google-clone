import HomeHeader from '@/components/HomeHeader';
import Image from 'next/image';
import SearchBaar from '@/components/SearchBar';
export default function Home() {
  return (
    <>
      <HomeHeader />
      <main className="flex flex-col items-center mt-24 my-auto">
        <div className="transition-all duration-300 ease-in-out w-6xl sm:w-3/3 md:w-1/4 lg:w-1/4 xl:w-1/6 mx-auto">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
            width={150}
            height={150}
            alt="google logo"
            className="w-full h-auto object-cover"
          ></Image>
        </div>

        <SearchBaar />
      </main>
    </>
  );
}
