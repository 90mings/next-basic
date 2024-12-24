'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Center, HStack, Text, VStack, Wrap } from '@chakra-ui/react';

import useMenu from '@/hooks/useMenu';
import ContentBR from '@/components/custom/ContentBR';
import MainTopHeader from '@/components/custom/header/MainTopHeader';
import CategorySideBar from '@/components/custom/category/CategorySideBar';
import { DefaultPaginate } from '@/components';
import Footer from '@/components/common/custom/Footer';
import ProductItemCard from '@/components/custom/product/ProductItemCard';

const CategoryPage = () => {
  const { currentMenu } = useMenu();
  const [selectedSort, setSelectedSort] = useState(1);

  useEffect(() => {
    console.log('currentMenu', currentMenu);
  }, [currentMenu]);

  const TextChecker = (text, targetIndex) => {
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
            <VStack spacing={'1.25rem'} justifyContent={'flex-start'}>
              <Box p={'2.5rem'} w={'100%'}>
                <Text
                  color={'#485766'}
                  fontSize={'3rem'}
                  fontWeight={400}
                  lineHeight={'4.5rem'}
                >
                  {currentMenu.title}
                </Text>
              </Box>
              <Box w={'100%'} px={'2.5rem'}>
                <HStack spacing={'2.5rem'} alignItems={'flex-start'}>
                  <CategorySideBar />
                  <Box w={'87.5rem'}>
                    <VStack spacing={0} h={'100%'}>
                      <Box py={'1rem'} w={'100%'}>
                        <HStack justifyContent={'space-between'}>
                          <Text
                            color={'#485766'}
                            fontSize={'1.125rem'}
                            fontWeight={400}
                            lineHeight={'1.96875rem'}
                          >
                            1207 items
                          </Text>
                          <Box>
                            <HStack spacing={'1.3rem'}>
                              {TextChecker('Most Popular', 1)}
                              {TextChecker('New', 2)}
                              {TextChecker('Price', 3)}
                            </HStack>
                          </Box>
                        </HStack>
                      </Box>
                      <Box borderRadius={'0.06rem'} w={'100%'}>
                        <Wrap spacingX={0} spacingY={'5rem'}>
                          <ProductItemCard />
                          <ProductItemCard />
                          <ProductItemCard />
                          <ProductItemCard />
                          <ProductItemCard />
                          <ProductItemCard />
                        </Wrap>
                      </Box>
                      <Center w={'100%'} pt={'5rem'}>
                        <DefaultPaginate
                          currentPage={1}
                          setCurrentPage={() => {}}
                          totalCount={14}
                          contentNum={5}
                        />
                      </Center>
                    </VStack>
                  </Box>
                </HStack>
              </Box>
            </VStack>
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
