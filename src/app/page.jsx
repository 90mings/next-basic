'use client';
import { DefaultButton } from '@components/g';
import { MAIN } from '@constants/pageURL';
import { useRouter } from 'next/navigation';

const Home = () => {
  console.log('process', process);
  const router = useRouter();

  return (
    <main>
      메인
      <DefaultButton
        onClick={() => {
          console.log('login', 'asdasd');
          router.push(MAIN.login);
        }}
      >
        login
      </DefaultButton>
    </main>
  );
};

export default Home;
