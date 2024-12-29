'use client';

import {
  Box,
  Center,
  Flex,
  HStack,
  Img,
  Text,
  VStack,
  Divider,
  Button,
  Select,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { CustomIcon, DefaultPaginate } from '@/components';

import MainTopHeader from '@/components/custom/header/MainTopHeader';
import ContentBR from '@/components/custom/ContentBR';
import { ChevronRightIcon } from '@chakra-ui/icons';
import StarRating from '@/components/common/StarRating';
import { FaStar } from 'react-icons/fa';
import Footer from '@/components/common/custom/Footer';
import useLocale from '@/hooks/useLocale';
import { LANGUAGES } from '@/constants/lang';

const ProductPage = () => {
  const { localeText } = useLocale();
  const { product } = useParams();

  const [selectedSort, setSelectedSort] = useState(1);

  const listReview = [
    {
      name: 'Samantha K.',
      userImage: 'https://via.placeholder.com/8x8',
      option: '[Color]Cappuccino',
      rating: 3,
      content:
        'It’s a decent serum, but not a miracle worker. It provides good hydration, but I didn’t see much improvement in my skin’s radiance. Also, the bottle runs out quickly.',
      image: 'https://via.placeholder.com/16x16',
      date: '20241017',
    },
    {
      name: 'James L.',
      userImage: 'https://via.placeholder.com/8x8',
      option: '[Color]Cappuccino',
      rating: 4,
      content:
        'This is a holy grail product for dry skin! It hydrates deeply without clogging pores and leaves my face glowing every morning.',
      image: 'https://via.placeholder.com/32x32',
      date: '20241017',
    },
    {
      name: 'Samantha K.',
      userImage: 'https://via.placeholder.com/8x8',
      option: '[Color]Cappuccino',
      rating: 5,
      content:
        'It’s a decent serum, but not a miracle worker. It provides good hydration, but I didn’t see much improvement in my skin’s radiance. Also, the bottle runs out quickly.',
      image: 'https://via.placeholder.com/64x64',
      date: '20241017',
    },
  ];

  const items = [
    { value: 'a', title: 'First Item', text: 'Some value 1...' },
    { value: 'b', title: 'Second Item', text: 'Some value 2...' },
    { value: 'c', title: 'Third Item', text: 'Some value 3...' },
  ];

  setInterval(() => {
    for (const d of document.querySelectorAll('div[data-testid="unlike"]')) {
      d.click();
    }
    window.scrollTo(0, document.body.scrollHeight);
  }, 2000);

  useEffect(() => {
    console.log('product', product);
  }, [product]);

  const reviewCard = useCallback((item, index) => {
    return (
      <Box
        key={index}
        w={'100%'}
        py={'1.5rem'}
        borderBottom={'1px solid #AEBDCA'}
      >
        <VStack spacing={'1rem'}>
          <Box w={'100%'}>
            <VStack spacing={'0.25rem'}>
              <Box w={'100%'}>
                <HStack justifyContent={'space-between'}>
                  <Box>
                    <HStack spacing={'0.75rem'}>
                      <Box>
                        <Img
                          w={'2rem'}
                          h={'2rem'}
                          borderRadius={'50%'}
                          src={item.userImage}
                        />
                      </Box>
                      <Box>
                        <Text
                          color="#485766"
                          fontSize="1.125rem"
                          fontFamily="Poppins"
                          fontWeight="500"
                          lineHeight="1.97rem"
                          wordWrap="break-word"
                        >
                          {item.name}
                        </Text>
                      </Box>
                      <Box>
                        <StarRating
                          initialRating={item.rating}
                          w={'1.5rem'}
                          h={'1.5rem'}
                        />
                      </Box>
                    </HStack>
                  </Box>
                  <Box>
                    <Text
                      color={'#7895B2'}
                      fontSize={'1.125rem'}
                      fontWeight={500}
                      lineHeight={'1.97rem'}
                    >
                      {item.date}
                      {/* October 14, 2024 */}
                    </Text>
                  </Box>
                </HStack>
              </Box>
              <Box w={'100%'}>
                <Text
                  color={'#7895B2'}
                  fontSize={'1rem'}
                  fontWeight={400}
                  lineHeight={'1.75rem'}
                >
                  Option : {item.option}
                </Text>
              </Box>
            </VStack>
          </Box>
          <Box w={'100%'}>
            <HStack spacing={'1.5rem'}>
              <Box w={'100%'} alignSelf={'flex-start'}>
                <Text
                  color={'#485766'}
                  fontSize={'1.125rem'}
                  fontWeight={400}
                  lineHeight={'1.97rem'}
                >
                  {item.content}
                </Text>
              </Box>
              <Box w="6.25rem" h="6.25rem">
                <Img w={'100%'} h={'100%'} src={item.image} />
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Box>
    );
  });

  return (
    <main>
      <Center w={'100%'}>
        <VStack w={'100%'} maxW={1920} spacing={0}>
          <MainTopHeader />
          {/* content */}
          <Box
            w={'100%'}
            py={'5rem'}
            // h={'71.25rem'}
          >
            <HStack spacing={0} alignItems={'flex-start'}>
              <Box w="60rem" h="50rem" position="relative">
                <Box w="50rem" h="50rem" position="absolute" left="10rem">
                  <Img
                    w="53.5rem"
                    h="50.125rem"
                    position="absolute"
                    left="-1.25rem"
                    src="https://via.placeholder.com/856x802"
                  />
                </Box>
                <Flex
                  w="10rem"
                  h="30rem"
                  position="absolute"
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Box w="10rem" h="10rem" position="relative">
                    <Img
                      w="10.0625rem"
                      h="10.0625rem"
                      position="absolute"
                      src="https://via.placeholder.com/161x161"
                    />
                  </Box>
                  <Box w="10rem" h="10rem" position="relative" opacity="0.5">
                    <Img
                      w="10.0625rem"
                      h="10.0625rem"
                      position="absolute"
                      src="https://via.placeholder.com/161x161"
                    />
                  </Box>
                  <Box w="10rem" h="10rem" position="relative" opacity="0.5">
                    <Img
                      w="10.0625rem"
                      h="10.0625rem"
                      position="absolute"
                      src="https://via.placeholder.com/161x161"
                    />
                  </Box>
                </Flex>
              </Box>
              <Box>
                <VStack w={'60rem'} pl={'3rem'} pr={'10rem'} spacing={'2rem'}>
                  <Box w={'100%'}>
                    <HStack alignContent={'center'}>
                      <Text
                        color={'#66809C'}
                        fontSize={'1.25rem'}
                        lineHeight={'2.25rem'}
                        fontWeight={400}
                      >
                        Rampal Latour
                      </Text>
                      <ChevronRightIcon
                        w={'1.5rem'}
                        h={'1.5rem'}
                        color={'#66809C'}
                      />
                    </HStack>
                  </Box>

                  <Box w={'100%'}>
                    <VStack spacing={'0.5rem'}>
                      <Box w={'100%'}>
                        <HStack
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Box>
                            <Text
                              color="#485766"
                              fontSize="2.25rem"
                              fontWeight="400"
                              lineHeight="3.2625rem"
                            >
                              Marseille Blanc 300g
                            </Text>
                          </Box>
                          <CustomIcon
                            name={'heart'}
                            w={'2rem'}
                            h={'2rem'}
                            color={'#556A7E'}
                          />
                        </HStack>
                      </Box>
                      <Box w={'100%'}>
                        <HStack spacing={'0.5rem'}>
                          <Text
                            color="#485766"
                            fontSize="1.125rem"
                            fontWeight="400"
                            lineHeight="1.96875rem"
                          >
                            3 {localeText(LANGUAGES.REVIEWS)}
                          </Text>
                          <Box>
                            <StarRating
                              initialRating={3}
                              w={'1.5rem'}
                              h={'1.5rem'}
                            />
                          </Box>
                        </HStack>
                      </Box>
                    </VStack>
                  </Box>

                  <Box w={'100%'}>
                    <HStack
                      alignItems={'flex-end'}
                      justifyContent={'space-between'}
                    >
                      <Box w={'50%'}>
                        <VStack w={'100%'}>
                          <Box w={'100%'}>
                            <Text
                              color="#66809C"
                              fontSize="1.5rem"
                              fontWeight="400"
                              lineHeight="2.475rem"
                            >
                              MSRP $ 10.00
                            </Text>
                          </Box>
                          <Box w={'100%'}>
                            <Text
                              color="#485766"
                              fontSize="3rem"
                              fontWeight="600"
                              lineHeight="4.5rem"
                            >
                              $27.00
                            </Text>
                          </Box>
                        </VStack>
                      </Box>
                      <Box w={'50%'}>
                        <HStack
                          // py={'1rem'}
                          spacing={'0.75rem'}
                          justifyContent={'flex-end'}
                        >
                          <Text
                            color="#7895B2"
                            fontSize="1.25rem"
                            fontWeight="400"
                            lineHeight="2.25rem"
                          >
                            Shipping cost
                          </Text>
                          <Text
                            color="#7895B2"
                            fontSize="1.25rem"
                            fontWeight="600"
                            lineHeight="2.25rem"
                          >
                            $3.00
                          </Text>
                        </HStack>
                      </Box>
                    </HStack>
                  </Box>

                  <Box w={'100%'}>
                    <HStack spacing={'0.5rem'}>
                      <Text
                        color="#B20000"
                        fontSize="1.125rem"
                        fontWeight="400"
                        lineHeight="1.96875rem"
                      >
                        {localeText(LANGUAGES.PURCHASE_MINIMUM)}
                      </Text>
                      <Text
                        color="#B20000"
                        fontSize="1.125rem"
                        fontWeight="500"
                        lineHeight="1.96875rem"
                      >
                        $50.00
                      </Text>
                    </HStack>
                  </Box>

                  <Box borderTop={'2px solid #73829D'} w={'100%'} />

                  <Box w={'100%'}>
                    <Text
                      color="#485766"
                      fontSize="1.125rem"
                      fontWeight="400"
                      lineHeight="1.96875rem"
                    >
                      Our Marseille soap with olive oil is made in a cauldron
                      using the traditional “Marseillais” process.
                      <br />
                      <br />
                      Type Dry
                    </Text>
                  </Box>

                  <Box borderTop={'1px solid #AEBDCA'} w={'100%'} />

                  <Box w={'100%'}>
                    <VStack spacing={'2rem'}>
                      <Box w={'100%'}>
                        <HStack justifyContent={'space-between'}>
                          <Box>
                            <Text
                              color="#485766"
                              fontSize="1.25rem"
                              fontWeight="500"
                              lineHeight="2.25rem"
                            >
                              Discount events
                            </Text>
                          </Box>
                          <Box>
                            <ChevronDownIcon w={'1.5rem'} h={'1.5rem'} />
                          </Box>
                        </HStack>
                      </Box>
                      <Box w={'100%'}>
                        <Text
                          color="#556A7E"
                          fontSize="1rem"
                          fontWeight="500"
                          lineHeight="1.75rem"
                        >
                          10% off when you buy 10 or more
                        </Text>
                      </Box>
                    </VStack>
                  </Box>

                  <Box borderTop="1px solid #AEBDCA" w="full" />

                  <Box w={'100%'}>
                    <VStack spacing={'1.25rem'}>
                      <Box w={'100%'}>
                        <HStack justifyContent={'space-between'}>
                          <Box>
                            <Text
                              color="#485766"
                              fontSize="1.25rem"
                              fontWeight="500"
                              lineHeight="2.25rem"
                            >
                              Select an option
                            </Text>
                          </Box>
                          <Box w={'25rem'}>
                            <Select
                              border="1px solid #9CADBE"
                              h="3.75rem"

                              // fontSize="1.25rem"
                              // fontWeight="500"
                              // lineHeight="2.25rem"
                            >
                              <option>Cappuccino</option>
                            </Select>
                          </Box>
                        </HStack>
                      </Box>
                      <Box w={'100%'}>
                        <HStack justifyContent={'space-between'}>
                          <Box>
                            <Text
                              color="#485766"
                              fontSize="1.25rem"
                              fontWeight="500"
                              lineHeight="2.25rem"
                            >
                              Select quantity
                            </Text>
                          </Box>
                          <Box w={'10rem'}>
                            <HStack
                              h={'3.75rem'}
                              px={'1.5rem'}
                              py={'1rem'}
                              background={'#FFF'}
                              borderRadius={'0.25rem'}
                              border={'1px solid #9CADBE'}
                              // alignItems="center"
                              spacing={'1.25rem'}
                              justifyContent={'space-between'}
                            >
                              <Box
                                w="1.25rem"
                                h="1.25rem"
                                position="relative"
                                borderRadius="5px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <CustomIcon name={'minus'} color={'#7895B2'} />
                              </Box>
                              <Box>
                                <Text
                                  flex="1"
                                  textAlign="center"
                                  color="#485766"
                                  fontSize={'1rem'}
                                  fontWeight={400}
                                  lineHeight={'1.75rem'}
                                >
                                  1
                                </Text>
                              </Box>

                              <Box
                                w="1.25rem"
                                h="1.25rem"
                                position="relative"
                                borderRadius="5px"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <CustomIcon name={'plus'} color={'#7895B2'} />
                              </Box>
                            </HStack>
                          </Box>
                        </HStack>
                      </Box>
                    </VStack>
                  </Box>

                  <Box w={'100%'} h={'4rem'}>
                    <HStack h={'100%'}>
                      <Box w={'50%'} h={'100%'}>
                        <Button
                          borderRadius={'0.25rem'}
                          border="1px solid #73829D"
                          h={'100%'}
                          w={'100%'}
                        >
                          <Text
                            color="#556A7E"
                            fontSize="1.25rem"
                            fontWeight="400"
                            lineHeight="2.25rem"
                          >
                            Shopping Cart
                          </Text>
                        </Button>
                      </Box>
                      <Box w={'50%'} h={'100%'}>
                        <Button
                          borderRadius={'0.25rem'}
                          bg={'#7895B2'}
                          h={'100%'}
                          w={'100%'}
                        >
                          <Text
                            color="white"
                            fontSize="1.25rem"
                            fontWeight="400"
                            lineHeight="2.25rem"
                          >
                            Buy Now
                          </Text>
                        </Button>
                      </Box>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </HStack>
          </Box>

          <ContentBR h={'5rem'} />

          <Box px={'10rem'}>
            <VStack spacing={'7.5rem'}>
              <Box w={'100%'}>
                <VStack spacing={'2.5rem'}>
                  <Box w={'100%'}>
                    <HStack spacing={'3.25rem'}>
                      <Box
                        paddingTop="0.5rem" // 8px
                        paddingBottom="0.5rem" // 8px
                        justifyContent="center"
                        alignItems="center"
                        gap="0.625rem" // 10px
                        display="flex"
                      >
                        <Text
                          textAlign="center"
                          color="#66809C"
                          fontSize="1.25rem" // 20px
                          fontFamily="Poppins"
                          fontWeight="600"
                          lineHeight="2.25rem" // 36px
                          wordWrap="break-word"
                        >
                          Product info
                        </Text>
                      </Box>
                      <Box
                        paddingTop="0.5rem" // 8px
                        paddingBottom="0.5rem" // 8px
                        justifyContent="center"
                        alignItems="center"
                        gap="0.625rem" // 10px
                        display="flex"
                      >
                        <Text
                          textAlign="center"
                          color="#A7C3D2"
                          fontSize="1.25rem" // 20px
                          fontFamily="Poppins"
                          fontWeight="400"
                          lineHeight="2.25rem" // 36px
                          wordWrap="break-word"
                        >
                          Review(3)
                        </Text>
                      </Box>
                      <Box
                        paddingTop="0.5rem" // 8px
                        paddingBottom="0.5rem" // 8px
                        justifyContent="center"
                        alignItems="center"
                        gap="0.625rem" // 10px
                        display="flex"
                      >
                        <Text
                          textAlign="center"
                          color="#A7C3D2"
                          fontSize="1.25rem" // 20px
                          fontFamily="Poppins"
                          fontWeight="400"
                          lineHeight="2.25rem" // 36px
                          wordWrap="break-word"
                        >
                          Product inquiry(3)
                        </Text>
                      </Box>
                      <Box
                        paddingTop="0.5rem" // 8px
                        paddingBottom="0.5rem" // 8px
                        justifyContent="center"
                        alignItems="center"
                        gap="0.625rem" // 10px
                        display="flex"
                      >
                        <Text
                          textAlign="center"
                          color="#A7C3D2"
                          fontSize="1.25rem" // 20px
                          fontFamily="Poppins"
                          fontWeight="400"
                          lineHeight="2.25rem" // 36px
                          wordWrap="break-word"
                        >
                          Shipping/Exchanges/Returns
                        </Text>
                      </Box>
                    </HStack>
                  </Box>

                  {/* TODO 작성 내용 표출 */}
                  <Box
                    display="flex"
                    alignItems="center"
                    alignSelf="stretch"
                    flexDirection="column"
                    gap="2.5rem" // 40px
                  >
                    <Text
                      alignSelf="stretch"
                      color="#485766"
                      fontSize="1.125rem" // 18px
                      fontFamily="Poppins"
                      fontWeight="400"
                      lineHeight="1.96875rem" // 31.5px
                      wordWrap="break-word"
                    >
                      Our Marseille soap with olive oil is made in a cauldron
                      using the traditional “Marseillais” process. After 3 years
                      of research, we were able to improve our manufacturing
                      process to make it more water and energy efficient, while
                      improving the final quality of our Marseille soap. The
                      result? A process patented by the INPI since 2019,
                      authenticity preserved and the use of 4 times less water
                      and 7 times less energy compared to the old process. And a
                      premium hypoallergenic Marseille soap, 100% French, made
                      in Salon-de-Provence in the south of France.
                    </Text>
                    <Img
                      width="40rem"
                      height="40rem"
                      src="https://via.placeholder.com/640x640"
                    />
                  </Box>
                </VStack>
              </Box>

              <Box w="100%">
                <VStack spacing={'2.5rem'}>
                  <Box w={'100%'}>
                    <HStack spacing="3.25rem">
                      <Box py="0.5rem">
                        <Text
                          color={'#A7C3D2'}
                          fontSize={'1.25rem'}
                          fontWeight={400}
                          lineHeight={'2.25rem'}
                        >
                          Product info
                        </Text>
                      </Box>
                      <Box py="0.5rem">
                        <Text
                          color={'#66809C'}
                          fontSize={'1.25rem'}
                          fontWeight={600}
                          lineHeight={'2.25rem'}
                        >
                          {localeText(LANGUAGES.UPPER_REVIEWS)}(3)
                        </Text>
                      </Box>
                      <Box py={'0.5rem'}>
                        <Text
                          color={'#A7C3D2'}
                          fontSize={'1.25rem'}
                          fontWeight={400}
                          lineHeight={'2.25rem'}
                        >
                          Product inquiry(3)
                        </Text>
                      </Box>
                      <Box py={'0.5rem'}>
                        <Text
                          color={'#A7C3D2'}
                          fontSize={'1.25rem'}
                          fontWeight={400}
                          lineHeight={'2.25rem'}
                        >
                          Shipping/Exchanges/Returns
                        </Text>
                      </Box>
                    </HStack>
                  </Box>

                  <Box w={'100%'}>
                    <HStack justifyContent={'space-between'}>
                      <Box>
                        <HStack>
                          <Text
                            color={'#485766'}
                            fontSize={'3rem'}
                            fontWeight={500}
                            lineHeight={'4.5rem'}
                          >
                            4.0
                          </Text>
                          <Box>
                            <StarRating
                              initialRating={3}
                              w={'2.5rem'}
                              h={'2.5rem'}
                            />
                          </Box>
                        </HStack>
                      </Box>
                      <Box alignSelf={'flex-end'}>
                        <HStack>
                          <Box w="1.5rem" h="1.5rem" position="relative">
                            <CustomIcon
                              name={'star'}
                              w={'1.5rem'}
                              h={'1.5rem'}
                              color={'#556A7E'}
                            />
                          </Box>
                          <Text
                            color={'#485766'}
                            fontSize={'1.125rem'}
                            fontWeight={400}
                            lineHeight={'1.97rem'}
                          >
                            Based on 3 reviews
                          </Text>
                        </HStack>
                      </Box>
                    </HStack>
                  </Box>

                  <Box w={'100%'} borderTop={'1px solid #AEBDCA'}>
                    <VStack w={'100%'} spacing={0}>
                      {listReview.map((item, index) => {
                        return reviewCard(item, index);
                      })}
                    </VStack>
                  </Box>

                  <Box w={'100%'}>
                    <Center>
                      <Text
                        color={'#485766'}
                        fontSize={'1.125rem'}
                        fontWeight={500}
                        lineHeight={'1.96875rem'}
                      >
                        1
                      </Text>
                    </Center>
                  </Box>
                </VStack>
              </Box>

              <Box w={'100%'}>
                <VStack spacing={'2.5rem'}>
                  {/* First section with horizontal flex */}
                  <Box w={'100%'}>
                    <HStack
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                      spacing="3.25rem"
                    >
                      <Center p={'0.5rem'}>
                        <Text
                          color={'#A7C3D2'}
                          fontSize={'1.25rem'}
                          fontWeight={400}
                          lineHeight={'2.25rem'}
                        >
                          {localeText(LANGUAGES.PRODUCT_INFO)}
                        </Text>
                      </Center>
                      <Center p={'0.5rem'}>
                        <Text
                          color={'#A7C3D2'}
                          fontSize={'1.25rem'}
                          fontWeight={400}
                          lineHeight={'2.25rem'}
                        >
                          {localeText(LANGUAGES.UPPER_REVIEWS)}(3)
                        </Text>
                      </Center>
                      <Center p={'0.5rem'}>
                        <Text
                          color={'#66809C'}
                          fontSize={'1.25rem'}
                          fontWeight={600}
                          lineHeight={'2.25rem'}
                        >
                          {localeText(LANGUAGES.PRODUCT_INQUIRY)}(3)
                        </Text>
                      </Center>
                      <Center p={'0.5rem'}>
                        <Text
                          color={'#A7C3D2'}
                          fontSize={'1.25rem'}
                          fontWeight={400}
                          lineHeight={'2.25rem'}
                        >
                          {`${localeText(LANGUAGES.SHIPPING)}/${localeText(LANGUAGES.EXCHANGES)}/${localeText(LANGUAGES.RETURNS)}`}
                        </Text>
                      </Center>
                    </HStack>
                  </Box>

                  <Box w={'100%'}>
                    <VStack spacing={'2.5rem'}>
                      <Box w={'100%'}>
                        {/* Second section with vertical flex */}
                        <HStack justifyContent="space-between">
                          <Text
                            color={'#485766'}
                            fontSize={'1.25rem'}
                            fontWeight={500}
                            lineHeight={'2.25rem'}
                          >
                            {localeText(LANGUAGES.PRODUCT_INQUIRY)}(3)
                          </Text>
                          <VStack
                            justifyContent="flex-start"
                            alignItems="flex-start"
                            display="inline-flex"
                          >
                            <Text
                              textAlign="center"
                              color={'#556A7E'}
                              fontSize={'1.25rem'}
                              fontWeight={400}
                              lineHeight={'2.25rem'}
                            >
                              Write an inquiry
                            </Text>
                            <Box
                              alignSelf="stretch"
                              height="0"
                              border="1px #66809C solid"
                            />
                          </VStack>
                        </HStack>
                      </Box>

                      <Box w={'100%'}>
                        {/* Table section */}
                        <VStack spacing={0}>
                          <Box
                            alignSelf="stretch"
                            px="1.25rem" // 20px converted to rem
                            py="1rem" // 16px converted to rem
                            borderTop="1px #73829D solid"
                            display="inline-flex"
                            justifyContent="flex-start"
                            alignItems="center"
                            gap="0.75rem"
                          >
                            <Text
                              w="16.5rem" // 264px converted to rem
                              color="#2A333C"
                              fontSize="1rem"
                              fontFamily="Poppins"
                              fontWeight="500"
                              lineHeight="1.75rem"
                              wordWrap="break-word"
                            >
                              Status
                            </Text>
                            <Text
                              flex="1 1 0"
                              color="#2A333C"
                              fontSize="1rem"
                              fontFamily="Poppins"
                              fontWeight="500"
                              lineHeight="1.75rem"
                              wordWrap="break-word"
                            >
                              Title
                            </Text>
                            <Text
                              w="16.5rem" // 264px converted to rem
                              color="#2A333C"
                              fontSize="1rem"
                              fontFamily="Poppins"
                              fontWeight="500"
                              lineHeight="1.75rem"
                              wordWrap="break-word"
                            >
                              Author
                            </Text>
                            <Text
                              w="16.5rem" // 264px converted to rem
                              color="#2A333C"
                              fontSize="1rem"
                              fontFamily="Poppins"
                              fontWeight="500"
                              lineHeight="1.75rem"
                              wordWrap="break-word"
                            >
                              Registration Date
                            </Text>
                          </Box>
                          {/* Content rows */}
                          <Box
                            alignSelf="stretch"
                            px="1.25rem" // 20px converted to rem
                            py="1rem" // 16px converted to rem
                            borderTop="1px #AEBDCA solid"
                            borderBottom="1px #AEBDCA solid"
                            display="inline-flex"
                            justifyContent="flex-start"
                            alignItems="center"
                            gap="0.75rem"
                          >
                            <Text
                              w="16.5rem" // 264px converted to rem
                              color="#556A7E"
                              fontSize="1.125rem" // 18px converted to rem
                              fontFamily="Poppins"
                              fontWeight="400"
                              lineHeight="1.97rem" // 31.5px converted to rem
                              wordWrap="break-word"
                            >
                              Processing queue
                            </Text>
                            <Text
                              flex="1 1 0"
                              color="#485766"
                              fontSize="1.125rem" // 18px converted to rem
                              fontFamily="Poppins"
                              fontWeight="400"
                              lineHeight="1.97rem" // 31.5px converted to rem
                              wordWrap="break-word"
                            >
                              Is there a new color type?
                            </Text>
                            <Text
                              w="16.5rem" // 264px converted to rem
                              color="#485766"
                              fontSize="1.125rem" // 18px converted to rem
                              fontFamily="Poppins"
                              fontWeight="400"
                              lineHeight="1.97rem" // 31.5px converted to rem
                              wordWrap="break-word"
                            >
                              Author
                            </Text>
                            <Text
                              w="16.5rem" // 264px converted to rem
                              color="#485766"
                              fontSize="1.125rem" // 18px converted to rem
                              fontFamily="Poppins"
                              fontWeight="400"
                              lineHeight="1.97rem" // 31.5px converted to rem
                              wordWrap="break-word"
                            >
                              Registration Date
                            </Text>
                          </Box>
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>
                </VStack>
              </Box>

              <Box width="100%">
                <VStack spacing={'2.5rem'}>
                  <Box w={'100%'}>
                    <HStack spacing={'3.25rem'}>
                      <Box>
                        <Text
                          textAlign="center"
                          color="#A7C3D2"
                          fontSize="1.25rem"
                          fontFamily="Poppins"
                          fontWeight="400"
                          lineHeight="2.25rem"
                        >
                          Product info
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          textAlign="center"
                          color="#A7C3D2"
                          fontSize="1.25rem"
                          fontFamily="Poppins"
                          fontWeight="400"
                          lineHeight="2.25rem"
                        >
                          {localeText(LANGUAGES.UPPER_REVIEWS)}(3)
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          textAlign="center"
                          color="#A7C3D2"
                          fontSize="1.25rem"
                          fontFamily="Poppins"
                          fontWeight="400"
                          lineHeight="2.25rem"
                        >
                          Product inquiry(3)
                        </Text>
                      </Box>
                      <Box>
                        <Text
                          textAlign="center"
                          color="#66809C"
                          fontSize="1.25rem"
                          fontFamily="Poppins"
                          fontWeight="600"
                          lineHeight="2.25rem"
                        >
                          Shipping/Exchanges/Returns
                        </Text>
                      </Box>
                    </HStack>
                  </Box>

                  <Box w={'100%'}>
                    <Accordion defaultIndex={[0]} allowMultiple>
                      <VStack spacing={'2.5rem'}>
                        <Box w={'100%'}>
                          <AccordionItem borderBottom={'1px solid #AEBDCA'}>
                            <AccordionButton py={'1.25rem'}>
                              <Box as="span" flex="1" textAlign="left">
                                <Text
                                  color={'#485766'}
                                  fontSize={'1.25rem'}
                                  fontWeight={500}
                                  lineHeight={'2.25rem'}
                                >
                                  Shipping
                                </Text>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                              <Text
                                color={'#556A7E'}
                                fontSize={'1rem'}
                                fontWeight={500}
                                lineHeight={'1.75rem'}
                              >
                                Shipping method: Sequential shipping
                                <br />
                                Shipping carrier: Korea Post
                                <br />
                                Shipping costs: Free shipping on orders over
                                $198.00 on shipping items, No additional charge
                                for remote islands
                                <br />
                                Delivery period:
                                <br />
                                - Delivery area: after order and payment is
                                completed, arrives in 1-2 days
                                <br />
                                - Undelivered: Arrives in 2-3 days after order
                                and payment is received
                                <br />
                                - It may take an extra day for mountainous
                                areas, etc.
                                <br />- Please understand that there may be some
                                delay in case of exceptional reasons such as
                                natural disasters, supply and demand
                                fluctuations, etc.
                              </Text>
                            </AccordionPanel>
                          </AccordionItem>
                        </Box>

                        <Box w={'100%'}>
                          <AccordionItem borderBottom={'1px solid #AEBDCA'}>
                            <AccordionButton py={'1.25rem'}>
                              <Box as="span" flex="1" textAlign="left">
                                <Text
                                  color={'#485766'}
                                  fontSize={'1.25rem'}
                                  fontWeight={500}
                                  lineHeight={'2.25rem'}
                                >
                                  Exchanges
                                </Text>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel py={'1.25rem'}>
                              <Text
                                color={'#556A7E'}
                                fontSize={'1rem'}
                                fontWeight={500}
                                lineHeight={'1.75rem'}
                              >
                                Shipping method: Sequential shipping
                                <br />
                                Shipping carrier: Korea Post
                                <br />
                                Shipping costs: Free shipping on orders over
                                $198.00 on shipping items, No additional charge
                                for remote islands
                                <br />
                                Delivery period:
                                <br />
                                - Delivery area: after order and payment is
                                completed, arrives in 1-2 days
                                <br />
                                - Undelivered: Arrives in 2-3 days after order
                                and payment is received
                                <br />
                                - It may take an extra day for mountainous
                                areas, etc.
                                <br />- Please understand that there may be some
                                delay in case of exceptional reasons such as
                                natural disasters, supply and demand
                                fluctuations, etc.
                              </Text>
                            </AccordionPanel>
                          </AccordionItem>
                        </Box>

                        <Box w={'100%'}>
                          <AccordionItem borderBottom={'1px solid #AEBDCA'}>
                            <AccordionButton py={'1.25rem'}>
                              <Box as="span" flex="1" textAlign="left">
                                <Text
                                  color={'#485766'}
                                  fontSize={'1.25rem'}
                                  fontWeight={500}
                                  fontStyle={'normal'}
                                  lineHeight={'2.25rem'}
                                >
                                  Returns
                                </Text>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel py={'1.25rem'}>
                              <Text
                                color={'#556A7E'}
                                fontSize={'1rem'}
                                fontWeight={500}
                                lineHeight={'1.75rem'}
                              >
                                Shipping method: Sequential shipping
                                <br />
                                Shipping carrier: Korea Post
                                <br />
                                Shipping costs: Free shipping on orders over
                                $198.00 on shipping items, No additional charge
                                for remote islands
                                <br />
                                Delivery period:
                                <br />
                                - Delivery area: after order and payment is
                                completed, arrives in 1-2 days
                                <br />
                                - Undelivered: Arrives in 2-3 days after order
                                and payment is received
                                <br />
                                - It may take an extra day for mountainous
                                areas, etc.
                                <br />- Please understand that there may be some
                                delay in case of exceptional reasons such as
                                natural disasters, supply and demand
                                fluctuations, etc.
                              </Text>
                            </AccordionPanel>
                          </AccordionItem>
                        </Box>
                      </VStack>
                    </Accordion>
                  </Box>
                </VStack>
              </Box>
            </VStack>
          </Box>

          <ContentBR h={'10rem'} />

          <Footer />
        </VStack>
      </Center>
    </main>
  );
};

export default ProductPage;
