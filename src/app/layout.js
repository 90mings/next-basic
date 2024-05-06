import '../styles/globals.css';
import { fonts } from '@/styles/g/fonts';
import Providers from './providers';
import WarpPage from './warpPage';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '이음',
  description: '이음 프로그램',
  icons: {
    icon: '/images/favicon.png',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={fonts.notoSansKR.variable}>
      <body className={inter.className}>
        <Providers>
          <WarpPage>{children}</WarpPage>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
