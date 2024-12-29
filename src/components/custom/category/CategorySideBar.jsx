'use client';

import { LANGUAGES } from '@/constants/lang';
import useLocale from '@/hooks/useLocale';
import {
  Box,
  Checkbox,
  HStack,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from '@chakra-ui/react';

import { useParams } from 'next/navigation';

const CategorySideBar = () => {
  const { localeText } = useLocale();
  const { category } = useParams();

  return (
    <Box w={'25rem'} maxW={'30%'}>
      <VStack spacing={0}>
        <Box py={'0.75rem'} w={'100%'}>
          <HStack justifyContent={'space-between'}>
            <Text
              color={'#485766'}
              fontSize={'1.5rem'}
              fontWeight={500}
              lineHeight={'2.475rem'}
            >
              {localeText(LANGUAGES.FILTER)}
            </Text>
            <Text
              color={'#B20000'}
              fontSize={'1rem'}
              fontWeight={500}
              lineHeight={'1.75rem'}
            >
              {localeText(LANGUAGES.RESET)}
            </Text>
          </HStack>
        </Box>
        <Box
          border={'1px solid #9CADBE'}
          borderRadius={'0.06rem'}
          p={'2.5rem'}
          w={'100%'}
        >
          <VStack spacing={'2rem'}>
            <Box w={'100%'}>
              <HStack justifyContent={'space-between'}>
                <Text
                  color={'#485766'}
                  fontSize={'1.125rem'}
                  fontWeight={500}
                  lineHeight={'1.96875rem'}
                >
                  {localeText(LANGUAGES.MOCRA_FDA_REGISTERED)}
                </Text>
                <Box>
                  <Checkbox variant={'customStyle'} />
                </Box>
              </HStack>
            </Box>
            <Box w={'100%'}>
              <VStack spacing={'1.5rem'}>
                <Box w={'100%'}>
                  <Text
                    color={'#485766'}
                    fontSize={'1.125rem'}
                    fontWeight={500}
                    lineHeight={'1.96875rem'}
                  >
                    {localeText(LANGUAGES.TYPE)}
                  </Text>
                </Box>
                <RadioGroup
                  w={'100%'}
                  // value={String(popType)}
                  display="flex"
                  onChange={(value) => {
                    // setPopType(String(value));
                  }}
                >
                  <VStack spacing={'1rem'} w={'100%'} alignItems={'flex-start'}>
                    <Radio value="1">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        All
                      </Text>
                    </Radio>
                    <Radio value="2">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        Oily
                      </Text>
                    </Radio>
                    <Radio value="3">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        Sensitive
                      </Text>
                    </Radio>
                    <Radio value="4">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        Acne
                      </Text>
                    </Radio>
                    <Radio value="5">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        Normal
                      </Text>
                    </Radio>
                  </VStack>
                </RadioGroup>
              </VStack>
            </Box>
            <Box w={'100%'}>
              <VStack spacing={'1.5rem'}>
                <Box w={'100%'}>
                  <Text
                    color={'#485766'}
                    fontSize={'1.125rem'}
                    fontWeight={500}
                    lineHeight={'1.96875rem'}
                  >
                    {localeText(LANGUAGES.PROMOTION)}
                  </Text>
                </Box>
                <RadioGroup
                  w={'100%'}
                  // value={String(popType)}
                  display="flex"
                  onChange={(value) => {
                    // setPopType(String(value));
                  }}
                >
                  <VStack spacing={'1rem'} w={'100%'} alignItems={'flex-start'}>
                    <Radio value="1">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        New
                      </Text>
                    </Radio>
                    <Radio value="2">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        Bestseller
                      </Text>
                    </Radio>
                    <Radio value="3">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        Acne
                      </Text>
                    </Radio>
                    <Radio value="4">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        Normal
                      </Text>
                    </Radio>
                  </VStack>
                </RadioGroup>
              </VStack>
            </Box>
            <Box w={'100%'}>
              <VStack spacing={'1.5rem'}>
                <Box w={'100%'}>
                  <Text
                    color={'#485766'}
                    fontSize={'1.125rem'}
                    fontWeight={500}
                    lineHeight={'1.96875rem'}
                  >
                    {localeText(LANGUAGES.PURCHASE_MINIMUM)}
                  </Text>
                </Box>
                <RadioGroup
                  w={'100%'}
                  // value={String(popType)}
                  display="flex"
                  onChange={(value) => {
                    // setPopType(String(value));
                  }}
                >
                  <VStack spacing={'1rem'} w={'100%'} alignItems={'flex-start'}>
                    <Radio value="1">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        All
                      </Text>
                    </Radio>
                    <Radio value="2">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        0-$5
                      </Text>
                    </Radio>
                    <Radio value="3">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        $6-$20
                      </Text>
                    </Radio>
                    <Radio value="4">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        $21-$50
                      </Text>
                    </Radio>
                    <Radio value="5">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        $51-$100
                      </Text>
                    </Radio>
                    <Radio value="6">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        $101-
                      </Text>
                    </Radio>
                  </VStack>
                </RadioGroup>
              </VStack>
            </Box>
            <Box w={'100%'}>
              <VStack spacing={'1.5rem'}>
                <Box w={'100%'}>
                  <Text
                    color={'#485766'}
                    fontSize={'1.125rem'}
                    fontWeight={500}
                    lineHeight={'1.96875rem'}
                  >
                    {localeText(LANGUAGES.SHIPPING)}
                  </Text>
                </Box>
                <RadioGroup
                  w={'100%'}
                  // value={String(popType)}
                  display="flex"
                  onChange={(value) => {
                    // setPopType(String(value));
                  }}
                >
                  <VStack spacing={'1rem'} w={'100%'} alignItems={'flex-start'}>
                    <Radio value="1">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        All
                      </Text>
                    </Radio>
                    <Radio value="2">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        Direct shipping
                      </Text>
                    </Radio>
                    <Radio value="3">
                      <Text
                        color={'#485766'}
                        fontSize={'1rem'}
                        fontWeight={400}
                        lineHeight={'1.75rem'}
                      >
                        Consignment shipping
                      </Text>
                    </Radio>
                  </VStack>
                </RadioGroup>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default CategorySideBar;
