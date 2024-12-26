'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Center,
  Divider,
  HStack,
  Img,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';

import useMenu from '@/hooks/useMenu';
import ContentBR from '@/components/custom/ContentBR';
import MainTopHeader from '@/components/custom/header/MainTopHeader';
import CategorySideBar from '@/components/custom/category/CategorySideBar';
import { CustomIcon, DefaultPaginate } from '@/components';
import Footer from '@/components/common/custom/Footer';
import ProductItemCard from '@/components/custom/product/ProductItemCard';
import BrandMain from '@public/svgs/brand/brand-main.svg';
import BrandMainLogo from '@public/svgs/brand/brand-main-logo.svg';

const BrandProductPage = () => {
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

  const rowMaxCount = 3;
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 총 10개의 항목
  const listItems = useCallback(() => {
    const groupedItems = [
      items.slice(0, 3), // 첫 번째 그룹 (3개)
      items.slice(3, 6), // 두 번째 그룹 (3개)
      items.slice(6, 9), // 세 번째 그룹 (3개)
      items.slice(9, 10), // 네 번째 그룹 (1개)
    ];
    return (
      <>
        {groupedItems.map((group, index) => (
          <Wrap key={index} spacingX={0} spacingY={'5rem'}>
            {group.map((item, itemIndex) => (
              <ProductItemCard key={itemIndex} rowMaxCount={rowMaxCount} />
            ))}
          </Wrap>
        ))}
      </>
    );
  });

  const listSelectedProduct = [
    {
      title: 'A',
      option: '1',
      amount: 54,
      count: 1,
      image: 'https://via.placeholder.com/100x100',
    },
    {
      title: 'Marseille Blanc 300g',
      option: '[Color]Cappuccino (+$2.00)',
      amount: 54,
      count: 2,
      image: 'https://via.placeholder.com/100x100',
    },
    {
      title: 'C',
      option: '3',
      amount: 54,
      count: 3,
      image: 'https://via.placeholder.com/100x100',
    },
    {
      title: 'Marseille Blanc 300g',
      option: '[Color]Cappuccino (+$2.00)',
      amount: 50,
      count: 4,
      image: 'https://via.placeholder.com/100x100',
    },
  ];

  return (
    <main>
      <Center w={'100%'}>
        <VStack w={'100%'} spacing={0}>
          <MainTopHeader />

          {/* content */}
          <Box w={'100%'} maxW={1920}>
            <HStack spacing={0} alignItems={'flex-start'}>
              <Box w={'80rem'} maxW={'66.66%'}>
                <Box w={'100%'}>
                  <Center w={'100%'} h={'15rem'} position={'relative'}>
                    <Img
                      src={BrandMain.src}
                      w={'100%'}
                      h={'100%'}
                      objectFit={'cover'}
                    />
                    <Img
                      src={BrandMainLogo.src}
                      h={'50%'}
                      position={'absolute'}
                    />
                  </Center>
                </Box>
                <VStack spacing={'1.25rem'}>
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
                      <Box w={'63.33%'}>
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
                            {listItems()}
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
              <Box
                width={'40rem'} // 640px to rem (640px / 16px = 40rem)
                py={'2rem'} // paddingLeft, paddingRight, paddingTop, paddingBottom => 40px to 2rem
                px={'2.5rem'}
                bg={'#8C644212'}
              >
                <VStack spacing={'2rem'}>
                  <Box w={'100%'}>
                    <VStack spacing={'0.75rem'}>
                      <Box w={'100%'}>
                        <Box
                          w={'100%'}
                          h={'0.75rem'}
                          position={'relative'}
                          bg={'#0000001A'}
                        >
                          <Box
                            w={'10%'}
                            h={'100%'}
                            position={'absolute'}
                            left={0}
                            bg={'#90AEC4'}
                          ></Box>
                        </Box>
                      </Box>
                      <Box w={'100%'}>
                        <HStack justify={'space-between'}>
                          <Text
                            color={'#7895B2'}
                            fontSize={'1rem'}
                            fontWeight={400}
                            lineHeight={'1.75rem'}
                          >
                            Purchase minimum
                          </Text>
                          <Text
                            color={'#556A7E'}
                            fontSize={'1rem'}
                            fontWeight={500}
                            lineHeight={'1.75rem'}
                          >
                            $100.00
                          </Text>
                        </HStack>
                      </Box>
                    </VStack>
                  </Box>

                  <Box w={'100%'}>
                    <VStack spacing={'1.5rem'}>
                      <Box w={'100%'}>
                        <VStack spacing={'0.75rem'}>
                          <Box w={'100%'}>
                            <Text
                              opacity={'0.7'}
                              color={'#485766'}
                              fontSize={'1.125rem'}
                              fontWeight={400}
                              lineHeight={'2rem'}
                            >
                              Rampal Latour
                            </Text>
                          </Box>

                          <Box w={'100%'}>
                            <VStack
                              spacing={0}
                              // borderTop={'1px solid #AEBDCA'}
                            >
                              {listSelectedProduct.map((product, index) => (
                                <Box
                                  key={index}
                                  width={'100%'}
                                  // bg={'#8C644212'}
                                  // borderRadius={'0.25rem'}
                                  borderTop={'1px solid #AEBDCA'}
                                  // borderBottom={'1px solid #9CADBE'}
                                  // padding={'1rem'}
                                  py={'1.25rem'}
                                >
                                  <HStack justifyContent={'space-between'}>
                                    <Box>
                                      <HStack spacing={'1rem'}>
                                        <Center
                                          w={'6.25rem'}
                                          h={'6.25rem'}
                                          aspectRatio={1 / 1}
                                        >
                                          <Img
                                            w={'100%'}
                                            h={'100%'}
                                            src={product.image}
                                          />
                                        </Center>
                                        <Box w={'100%'}>
                                          <VStack spacing={'0.5rem'}>
                                            <Box w={'100%'}>
                                              <Text
                                                color={'#485766'}
                                                fontSize={'1rem'}
                                                fontWeight={500}
                                                lineHeight={'1.75rem'}
                                              >
                                                {product.title}
                                              </Text>
                                            </Box>
                                            <Box w={'100%'}>
                                              <Text
                                                color={'#66809C'}
                                                fontSize={'0.9375rem'}
                                                fontWeight={400}
                                                lineHeight={'1.5rem'}
                                              >
                                                {product.option}
                                              </Text>
                                            </Box>
                                            <Box w={'100%'}>
                                              <Text
                                                color={'#485766'}
                                                fontSize={'1rem'}
                                                fontWeight={500}
                                                lineHeight={'1.75rem'}
                                              >
                                                ${product.amount}
                                              </Text>
                                            </Box>
                                          </VStack>
                                        </Box>
                                      </HStack>
                                    </Box>
                                    <Box>
                                      <HStack
                                        w={'10rem'}
                                        h={'3.75rem'}
                                        px={'1.5rem'}
                                        py={'1rem'}
                                        background={'#FFF'}
                                        borderRadius={'0.25rem'}
                                        border={'1px solid #9CADBE'}
                                        alignItems="center"
                                        spacing={'1.25rem'}
                                        justifyContent={'space-between'}
                                      >
                                        <Center
                                          w={'1.5rem'}
                                          h={'1.5rem'}
                                          borderRadius={'5px'}
                                        >
                                          <CustomIcon
                                            name={'minus'}
                                            color={'#7895B2'}
                                          />
                                        </Center>
                                        <Box>
                                          <Text
                                            textAlign={'center'}
                                            color={'#485766'}
                                            fontSize={'1rem'}
                                            fontWeight={400}
                                            lineHeight={'1.75rem'}
                                          >
                                            {product.count}
                                          </Text>
                                        </Box>

                                        <Center
                                          w={'1.5rem'}
                                          h={'1.5rem'}
                                          borderRadius={'5px'}
                                        >
                                          <CustomIcon
                                            name={'plus'}
                                            color={'#7895B2'}
                                          />
                                        </Center>
                                      </HStack>
                                    </Box>
                                  </HStack>
                                </Box>
                              ))}
                            </VStack>
                          </Box>
                          {listSelectedProduct.length < 3 && (
                            <Box w={'100%'}>
                              <Text
                                textAlign="center"
                                color={'#556A7E'}
                                fontSize={'1rem'}
                                fontWeight={500}
                                lineHeight={'1.75rem'}
                                textDecoration={'underline'}
                              >
                                See other branded products
                              </Text>
                            </Box>
                          )}
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>

                  <Box
                    position="absolute"
                    bottom="0"
                    width="35rem" // 560px to rem
                    height="11.75rem" // 188px to rem
                    bg="linear-gradient(180deg, rgba(241, 237, 229, 0) 0%, #F1EDE5 100%)"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="1.25rem"
                  >
                    <Box
                      width="100%"
                      height="2rem"
                      bg="#E8DFCA"
                      borderRadius="1.625rem"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      gap="0.625rem"
                    >
                      <Box width="1.5rem" height="1.5rem" position="relative">
                        <Box
                          width="1.25rem"
                          height="1.25rem"
                          position="absolute"
                          border="1.5px solid #556A7E"
                        />
                        <Box
                          width="0.0625rem"
                          height="0"
                          position="absolute"
                          left="1.25rem"
                          top="0.3125rem"
                          border="1.5px solid #556A7E"
                        />
                        <Box
                          width="0.25rem"
                          height="0.3125rem"
                          position="absolute"
                          left="0.5rem"
                          top="0.5625rem"
                          border="1.5px solid #556A7E"
                        />
                      </Box>
                      <Text
                        textAlign="right"
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={500}
                        lineHeight={'1.75rem'}
                      >
                        {`You're $19.00 short. Add other products!`}
                      </Text>
                    </Box>

                    <Box w={'100%'}>
                      <VStack align="stretch" gap="2rem">
                        <HStack justify="space-between" gap="2rem">
                          <Text
                            color={'#7895B2'}
                            fontSize={'1.125rem'}
                            fontWeight={400}
                            lineHeight={'2rem'}
                          >
                            Total product price
                          </Text>
                          <Text
                            color={'#556A7E'}
                            fontSize={'1.125rem'}
                            fontWeight={500}
                            lineHeight={'2rem'}
                          >
                            $81.00
                          </Text>
                        </HStack>
                      </VStack>
                    </Box>

                    <Box
                      width="100%"
                      height="4rem"
                      bg="#D9E7EC"
                      borderRadius="0.25rem"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      gap="0.625rem"
                    >
                      <Text
                        color="white"
                        fontSize="1.25rem"
                        fontFamily="Poppins"
                        fontWeight="400"
                        lineHeight="2.25rem"
                      >
                        Return to cart
                      </Text>
                    </Box>
                  </Box>
                </VStack>
              </Box>
            </HStack>
          </Box>

          <ContentBR h={'10rem'} />

          {/* footer */}
          <Footer />
        </VStack>
      </Center>
    </main>
  );
};

export default BrandProductPage;
