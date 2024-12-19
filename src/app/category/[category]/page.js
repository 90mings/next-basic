'use client';

import {
  Box,
  Center,
  Flex,
  HStack,
  Img,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  useFocusEffect,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import useMenu from '@/hooks/useMenu';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import BestBanner1 from '@public/svgs/banner/best-brand1.svg';
import StarRating from '@/components/common/StarRating';
import ContentBR from '@/components/custom/ContentBR';
import MainTopHeader from '@/components/custom/header/MainTopHeader';
import CategorySideBar from '@/components/custom/category/CategorySideBar';
import { DefaultPaginate } from '@/components';
import { BRAND } from '@/constants/pageURL';
import Footer from '@/components/common/custom/Footer';

const CategoryPage = () => {
  const router = useRouter();
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

  const ItemCard = () => {
    const handleRatingChange = (newRating) => {
      console.log('New rating:', newRating);
    };

    return (
      <WrapItem
        w={1 / 5}
        _hover={{
          cursor: 'pointer',
        }}
        onClick={() => {
          router.push(`${BRAND.root}/brand01`);
        }}
      >
        <Center w={'100%'} h={'100%'}>
          <VStack spacing={0} w={'100%'}>
            <Box w={'100%'}>
              <Img w={'100%'} src={BestBanner1.src} />
            </Box>
            <Box w={'100%'} p={'1rem'}>
              <VStack spacing={'0.75rem'}>
                <Box w={'100%'}>
                  <Text
                    color={'#66809C'}
                    fontSize={'0.9375rem'}
                    lineHeight={'1.5rem'}
                    fontWeight={400}
                  >
                    Rampal Latour
                  </Text>
                  <Text
                    color={'#485766'}
                    fontSize={'1.125rem'}
                    lineHeight={'1.5rem'}
                    fontWeight={500}
                  >
                    Marseille Blanc 300g
                  </Text>
                </Box>
                <Box w={'100%'}>
                  <Stat>
                    <StatLabel>
                      <Text
                        color={'#66809C'}
                        fontSize={'1rem'}
                        lineHeight={'1.75rem'}
                        fontWeight={400}
                      >
                        Collected Fees
                      </Text>
                    </StatLabel>
                    <StatNumber>
                      <Text
                        color={'#485766'}
                        fontSize={'1.5rem'}
                        lineHeight={'2.475rem'}
                        fontWeight={600}
                      >
                        $27.00
                      </Text>
                    </StatNumber>
                    <StatHelpText>
                      <HStack>
                        <Text
                          color={'#B20000'}
                          fontSize={'0.9375rem'}
                          lineHeight={'1.5rem'}
                          fontWeight={400}
                        >
                          Purchase minimum
                        </Text>
                        <Text
                          color={'#B20000'}
                          fontSize={'0.9375rem'}
                          lineHeight={'1.5rem'}
                          fontWeight={500}
                        >
                          $500
                        </Text>
                      </HStack>
                    </StatHelpText>
                  </Stat>
                </Box>
                <Box w={'100%'}>
                  <HStack alignContent={'center'}>
                    <StarRating
                      initialRating={3}
                      onChange={handleRatingChange}
                    />
                    <Text
                      color={'#7895B2'}
                      fontSize={'0.9375rem'}
                      fontWeight={400}
                      lineHeight={'1.5rem'}
                    >
                      (3)
                    </Text>
                  </HStack>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Center>
      </WrapItem>
    );
  };

  return (
    <main>
      <Center w={'100%'}>
        <VStack w={'100%'} maxW={1920} spacing={0}>
          <MainTopHeader />
          {/* content */}
          <Box w={'100%'}>
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
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
                          {ItemCard()}
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
