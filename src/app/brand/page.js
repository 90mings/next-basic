'use client';

import { CATEGORY } from '@/constants/pageURL';
import { notFound, useParams, useRouter } from 'next/navigation';

const BrandHomePage = () => {
  const { brand } = useParams();
  const router = useRouter();
  if (brand !== '') {
    // return notFound();
    router.replace(CATEGORY.base);
  }
};

export default BrandHomePage;
