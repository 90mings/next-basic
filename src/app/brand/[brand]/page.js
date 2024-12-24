'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { Box, Center, HStack, Img, Text, VStack, Wrap } from '@chakra-ui/react';

import { DefaultPaginate } from '@/components';

import MainTopHeader from '@/components/custom/header/MainTopHeader';
import BrandMain from '@public/svgs/brand/brand-main.svg';
import BrandMainLogo from '@public/svgs/brand/brand-main-logo.svg';
import BrandSub from '@public/svgs/brand/brand-sub.svg';

import ContentBR from '@/components/custom/ContentBR';
import Footer from '@/components/common/custom/Footer';
import ProductItemCard from '@/components/custom/product/ProductItemCard';

const CategoryPage = () => {
  const { brand } = useParams();

  const [selectedSort, setSelectedSort] = useState(1);

  useEffect(() => {
    console.log('brand', brand);
  }, [brand]);

  const TextChecker = (text, targetIndex) => {
    const isCheck = selectedSort === targetIndex;

    return (
      <Box
        _hover={{ cursor: 'pointer' }}
        onClick={() => {
          setSelectedSort(targetIndex);
        }}
      >
        <Text
          color={isCheck ? '#66809C' : '#A7C3D2'}
          fontSize={'1.25rem'}
          fontWeight={isCheck ? 600 : 400}
          lineHeight={'2.25rem'}
        >
          {text}
        </Text>
      </Box>
    );
  };

  const TextSortChecker = (text, targetIndex) => {
    const isCheck = selectedSort === targetIndex;

    const w = () => {
      if (targetIndex === 1) {
        return '7.5rem';
      } else if (targetIndex === 2) {
        return '3.5rem';
      } else {
        return '4rem';
      }
    };

    return (
      <Box
        minW={w()}
        _hover={{ cursor: 'pointer' }}
        onClick={() => {
          setSelectedSort(targetIndex);
        }}
      >
        <HStack justifyContent={'flex-end'}>
          <Box w={'0.7rem'}>
            <Text
              color={'#485766'}
              fontSize={'1rem'}
              fontWeight={500}
              lineHeight={'1.75rem'}
            >
              {isCheck && '✓'}
            </Text>
          </Box>
          <Text
            color={isCheck ? '#485766' : '#A7C3D2'}
            fontSize={'1rem'}
            fontWeight={500}
            lineHeight={'1.75rem'}
          >
            {text}
          </Text>
        </HStack>
      </Box>
    );
  };

  return (
    <main>
      <Center w={'100%'}>
        <VStack w={'100%'} spacing={0}>
          <MainTopHeader />

          {/* content */}
          <Box w={'100%'} maxW={1920}>
            <Box w={'100%'} mb={'3.75rem'}>
              <Center w={'100%'} h={'100%'} position={'relative'}>
                <Img src={BrandMain.src} />
                <Img src={BrandMainLogo.src} position={'absolute'} />
              </Center>
            </Box>
            <Box px={'10rem'}>
              <VStack spacing={'5rem'} justifyContent={'flex-start'}>
                <Box w={'100%'}>
                  <Text
                    color={'#485766'}
                    fontSize={'3rem'}
                    fontWeight={400}
                    lineHeight={'4.5rem'}
                  >
                    {/* {headerMenu} */}
                    Rampal Latour
                  </Text>
                </Box>
                <Box w={'100%'}>
                  <VStack spacing={'2.5rem'}>
                    <Box w={'100%'}>
                      <HStack spacing={'1.3rem'}>
                        {TextChecker('Brand info', 1)}
                        {TextChecker('Brand product', 2)}
                      </HStack>
                    </Box>
                    <Box w={'100%'}>
                      <Text
                        color={'#485766'}
                        fontSize={'1.125rem'}
                        lineHeight={'1.96875rem'}
                      >
                        Savon de Marseille Le savon de Marseille est un produit
                        mondialement réputé pour ses nombreuses utilisations
                        dans le cadre de l’hygiène du corps ainsi que
                        l’entretien du linge ou encore le nettoyage de la
                        maison. Il est un allié au quotidien et peut suffire à
                        lui-même dans de nombreux cas. Si ses atouts ont fait sa
                        renommée, le savon de Marseille continue à avoir la
                        réputation d’être trop décapant et inadapté pour un
                        usage répété sur la peau. Prenons le temps de faire le
                        point sur cet indispensable pour savoir s’il est adapté
                        aux peaux sensibles.
                      </Text>
                    </Box>
                    <Box>
                      <Img src={BrandSub.src} />
                    </Box>
                  </VStack>
                </Box>
                <Box w={'100%'}>
                  <VStack spacing={'2.5rem'}>
                    <Box w={'100%'}>
                      <HStack spacing={'1.3rem'}>
                        {TextChecker('Brand info', 1)}
                        {TextChecker('Brand product', 2)}
                      </HStack>
                    </Box>
                    <Box>
                      <Box py={'1rem'} w={'100%'}>
                        <HStack justifyContent={'space-between'}>
                          <Text
                            color={'#485766'}
                            fontSize={'1.125rem'}
                            fontWeight={400}
                            lineHeight={'1.96875rem'}
                          >
                            120 items
                          </Text>
                          <Box>
                            <HStack spacing={'1.3rem'}>
                              {TextSortChecker('Most Popular', 1)}
                              {TextSortChecker('New', 2)}
                              {TextSortChecker('Price', 3)}
                            </HStack>
                          </Box>
                        </HStack>
                      </Box>
                      <VStack spacing={'5rem'} h={'100%'}>
                        <Box borderRadius={'0.06rem'} w={'100%'}>
                          <Wrap spacingX={0} spacingY={'5rem'}>
                            <ProductItemCard />
                            <ProductItemCard />
                            <ProductItemCard />
                            <ProductItemCard />
                            <ProductItemCard />
                          </Wrap>
                        </Box>
                        <Center w={'100%'}>
                          <DefaultPaginate
                            currentPage={1}
                            setCurrentPage={() => {}}
                            totalCount={14}
                            contentNum={5}
                          />
                        </Center>
                      </VStack>
                    </Box>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Box>

          <ContentBR h={'10rem'} />

          {/* footer */}
          <Footer />
        </VStack>
      </Center>
    </main>
  );
};

export default CategoryPage;
