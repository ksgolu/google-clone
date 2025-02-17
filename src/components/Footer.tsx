import CountryLookup from './CountryLookup.tsx';

const Footer = () => {
  return (
    <footer className="absolute w-full bottom-0 text-sm text-gray-500 bg-[#f2f2f2]">
      <div className="border-b px-8 py-3">
        <CountryLookup />
      </div>
      <div className="flex flex-col sm:flex-row justify-between px-6 py-6">
        <ul className="footerList">
          <li className="link">About</li>
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search Work</li>
        </ul>

        <ul className="footerList">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Setting</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
