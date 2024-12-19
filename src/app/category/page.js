'use client';

import { CATEGORY } from '@/constants/pageURL';
import { notFound, useParams, useRouter } from 'next/navigation';

const CategoryHomePage = () => {
  const { category } = useParams();
  const router = useRouter();
  if (category !== '') {
    // return notFound();
    router.replace(CATEGORY.base);
  }
};

export default CategoryHomePage;
