import '../styles/globals.css';
import Providers from './providers';
import WarpPage from './warpPage';

const isDev = process.env.NEXT_PUBLIC_NODE_ENV === 'development';
const title = '작업';
const tmepTitle = `${isDev ? `(개발) ${title}` : title}`;

export const metadata = {
  title: tmepTitle,
  description: '작업 프로그램',
  icons: {
    icon: '/images/favicon.png',
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
      </head>
      <body>
        <Providers>
          <WarpPage>{children}</WarpPage>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
