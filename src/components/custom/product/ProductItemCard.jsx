'use client';

import { CustomIcon } from '@/components';
import StarRating from '@/components/common/StarRating';
import {
  Box,
  Center,
  HStack,
  Img,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  WrapItem,
} from '@chakra-ui/react';
import BestBanner1 from '@public/svgs/banner/best-brand1.svg';

const ProductItemCard = (props) => {
  return (
    <WrapItem w={1 / 5}>
      <Center w={'100%'} h={'100%'}>
        <VStack spacing={0} w={'100%'}>
          <Box w={'100%'} position={'relative'}>
            <Img w={'100%'} src={BestBanner1.src} />
          </Box>
          <Box w={'100%'} p={'1rem'}>
            <VStack spacing={'0.75rem'}>
              <Box w={'100%'}>
                <VStack spacing={0}>
                  <Box w={'100%'}>
                    <Text
                      color={'#66809C'}
                      fontSize={'0.9375rem'}
                      lineHeight={'1.5rem'}
                      fontWeight={400}
                    >
                      Rampal Latour
                    </Text>
                  </Box>
                  <Box w={'100%'}>
                    <HStack
                      justifyContent={'space-between'}
                      alignItems={'center'}
                    >
                      <Box>
                        <Text
                          color={'#485766'}
                          fontSize={'1.125rem'}
                          lineHeight={'1.5rem'}
                          fontWeight={500}
                        >
                          Marseille Blanc 300g
                        </Text>
                      </Box>
                      <CustomIcon
                        name={'heart'}
                        w={'2rem'}
                        h={'2rem'}
                        color={'#7895B2'}
                      />
                    </HStack>
                  </Box>
                </VStack>
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
                    // onChange={handleRatingChange}
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

export default ProductItemCard;
