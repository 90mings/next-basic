'use client';

import { CustomIcon } from '@/components';
import StarRating from '@/components/common/StarRating';
import { LANGUAGES } from '@/constants/lang';
import useLocale from '@/hooks/useLocale';
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
  const { localeText } = useLocale();
  const { isNew = false, rowMaxCount = 5, w = '0rem', h = '0rem' } = props;
  return (
    <WrapItem w={rowMaxCount !== 0 ? 1 / rowMaxCount : w}>
      <Center w={`100%`} h={'100%'}>
        <VStack spacing={0} w={'100%'}>
          <Box w={'100%'} position={'relative'}>
            <Img
              w={w}
              h={h ? h : w}
              objectFit={'cover'}
              src={BestBanner1.src}
            />
            {isNew && (
              <Center
                minW={'5rem'}
                position={'absolute'}
                left={'0.75rem'}
                bottom={'0.75rem'}
                borderRadius={'5rem'}
                p={'0.25rem'}
                bg={'#66809C'}
              >
                <Text
                  color={'#FFF'}
                  fontSize={'0.9375rem'}
                  lineHeight={'1.5rem'}
                  fontWeight={500}
                >
                  New
                </Text>
              </Center>
            )}
          </Box>
          <Box w={'100%'} py={'1rem'}>
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
                    <HStack spacing={'0.25rem'}>
                      <Text
                        color={'#66809C'}
                        fontSize={'1rem'}
                        lineHeight={'1.75rem'}
                        fontWeight={400}
                      >
                        {localeText(LANGUAGES.MSRP)}
                      </Text>
                      <Text
                        color={'#66809C'}
                        fontSize={'1rem'}
                        lineHeight={'1.75rem'}
                        fontWeight={400}
                      >
                        $
                      </Text>
                      <Text
                        color={'#66809C'}
                        fontSize={'1rem'}
                        lineHeight={'1.75rem'}
                        fontWeight={400}
                      >
                        10.00
                      </Text>
                    </HStack>
                  </StatLabel>
                  <StatNumber>
                    <HStack spacing={'0.75rem'}>
                      <Text
                        color={'#485766'}
                        fontSize={'1.5rem'}
                        lineHeight={'2.475rem'}
                        fontWeight={600}
                      >
                        $27.00
                      </Text>
                      <HStack spacing={'0.25rem'}>
                        <Text
                          color={'#7895B2'}
                          fontSize={'0.9375rem'}
                          lineHeight={'1.5rem'}
                          fontWeight={400}
                        >
                          {localeText(LANGUAGES.MINIMUM)}
                        </Text>
                        <Text
                          color={'#7895B2'}
                          fontSize={'0.9375rem'}
                          lineHeight={'1.5rem'}
                          fontWeight={500}
                        >
                          $50.00
                        </Text>
                      </HStack>
                    </HStack>
                  </StatNumber>
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
