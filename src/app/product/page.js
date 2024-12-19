'use client';

import { CATEGORY } from '@/constants/pageURL';
import { notFound, useParams, useRouter } from 'next/navigation';

const ProductHomePage = () => {
  const { product } = useParams();
  const router = useRouter();
  if (product !== '') {
    // return notFound();
    router.replace(CATEGORY.base);
  }
};

export default ProductHomePage;
