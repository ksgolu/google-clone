import '@/app/globals.css';
import SearchHeader from '@/components/SearchHeader.tsx';

export const metadata: Metadata = {
  title: 'Google',
  description: 'search engine',
};

export default function SearchLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <SearchHeader />
      {children}
    </main>
  );
}
