import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { fonts } from '@styles/g/fonts';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sample',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={fonts.notoSansKR.variable}>
      <body className={inter.className}>
        <Providers>
          <warpPage>{children}</warpPage>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
