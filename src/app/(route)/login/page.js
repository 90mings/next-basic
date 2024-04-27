'use client';
import styles from './page.module.css';
import { LinkButton } from '@/components/g';
import { MAIN } from '@/constants/pageURL';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  return (
    <main>
      <LinkButton
        onClick={() => {
          console.log('login', MAIN.root);
          router.push(MAIN.root);
        }}
        text="메인"
      />
    </main>
  );
};

export default Login;
