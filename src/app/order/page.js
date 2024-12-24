'use client';

import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  HStack,
  Img,
  Input,
  NumberInput,
  Radio,
  RadioGroup,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import MainTopHeader from '@/components/custom/header/MainTopHeader';
import ContentBR from '@/components/custom/ContentBR';
import OrderTextInput from '@/components/input/custom/OrderTextInput';
import Footer from '@/components/common/custom/Footer';
import { useCallback, useState } from 'react';
import { DefaultInput } from '@/components';
import useLocale from '@/hooks/useLocale';
import { LANGUAGES } from '@/constants/lang';

const OrderPage = () => {
  const { localeText } = useLocale();
  const [selectedCouponId, setSelectedCouponId] = useState('');

  const listOrder = [
    {
      name: 'Rampal Latour1',
      content: 'Marseille Blanc 300g',
      option: '[Color]Cappuccino (+$2.00)',
      quantity: 2,
      price: 54,
      cost: 3,
      image: 'https://via.placeholder.com/100x100',
    },
    {
      name: 'Rampal Latour2',
      content: 'Marseille Blanc 300g',
      option: '[Color]Cappuccino (+$2.00)',
      quantity: 2,
      price: 54,
      cost: 3,
      image: 'https://via.placeholder.com/100x100',
    },
    /*
    {
      name: 'Rampal Latour3',
      content: 'Marseille Blanc 300g',
      option: '[Color]Cappuccino (+$2.00)',
      quantity: 2,
      price: 54,
      cost: 3,
      image: 'https://via.placeholder.com/100x100',
    },
    */
  ];

  const listCoupon = [
    {
      couponId: 1,
      name: '[Gold Member June Coupon] $10 할인',
      redemption: '$50 minimum purchase',
      discount: 10,
    },
    {
      couponId: 2,
      name: '[Gold Member June Coupon] $20 할인',
      redemption: '$50 minimum purchase',
      discount: 0,
    },
  ];

  const orderCard = useCallback((item, index) => {
    return (
      <Box
        key={index}
        w={'100%'}
        borderBottom="1px solid #73829D"
        p={'1.25rem'}
      >
        <HStack spacing={'0.75rem'}>
          <Box width={'26.25rem'}>
            <HStack>
              <Box>
                <Img width="6.25rem" height="6.25rem" src={item.image} />
              </Box>
              <Box>
                <VStack align="flex-start" spacing={'0.75rem'}>
                  <Box>
                    <VStack spacing={0}>
                      <Box w={'100%'}>
                        <Text
                          color={'#66809C'}
                          fontSize={'0.9375rem'}
                          fontWeight={400}
                          lineHeight={'1.5rem'}
                        >
                          {item.name}
                        </Text>
                      </Box>
                      <Box w={'100%'}>
                        <Text
                          color={'#485766'}
                          fontSize={'1rem'}
                          fontWeight={500}
                          lineHeight={'1.75rem'}
                        >
                          {item.content}
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                  <Box>
                    <Text
                      color={'#66809C'}
                      fontSize={'0.9375rem'}
                      fontWeight={400}
                      lineHeight={'1.5rem'}
                    >
                      Option : {item.option}
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </HStack>
          </Box>
          <Box width={'8.8333rem'}>
            <Text
              textAlign="center"
              color="#485766"
              fontSize="1rem"
              fontWeight="500"
              lineHeight="1.75rem"
            >
              {item.quantity}
            </Text>
          </Box>
          <Box width={'8.8333rem'}>
            <Text
              textAlign="center"
              color="#485766"
              fontSize="1rem"
              fontWeight="500"
              lineHeight="1.75rem"
            >
              ${item.price}
            </Text>
          </Box>
          <Box width={'8.8333rem'}>
            <Text
              textAlign="center"
              color="#485766"
              fontSize="1rem"
              fontWeight="500"
              lineHeight="1.75rem"
            >
              ${item.cost}
            </Text>
          </Box>
        </HStack>
      </Box>
    );
  });

  return (
    <main>
      <Center w={'100%'}>
        <VStack w={'100%'} maxW={1920} spacing={0}>
          <MainTopHeader />
          <Box w={'100%'} px={'10rem'} py={'2.5rem'}>
            <Text
              color={'#485766'}
              fontSize={'3rem'}
              fontStyle={'normal'}
              fontWeight={400}
              lineHeight={'4.5rem'}
            >
              {localeText(LANGUAGES.ORDER)}
            </Text>
          </Box>

          <ContentBR h={'2.5rem'} />

          <Box w={'100%'} px={'10rem'}>
            <HStack
              spacing={'2.5rem'}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
            >
              <Box w="60rem">
                <VStack spacing={'5rem'}>
                  {/* Product Information */}
                  <Box w={'100%'}>
                    <VStack spacing={'2rem'}>
                      <Box w={'100%'}>
                        <Text
                          color={'#485766'}
                          fontSize={'1.5rem'}
                          fontWeight={500}
                          lineHeight={'2.475rem'}
                        >
                          {localeText(LANGUAGES.PRODUCT_INFORMATION)}
                        </Text>
                      </Box>
                      <Box w={'100%'}>
                        {/* Product Rows */}
                        <VStack>
                          {/* header */}
                          <Box
                            w={'100%'}
                            borderTop="1px solid #73829D"
                            borderBottom="1px solid #73829D"
                            px={'1.25rem'}
                            py={'1rem'}
                          >
                            <HStack spacing={'0.75rem'}>
                              <Box width={'26.25rem'}>
                                <Text
                                  textAlign={'left'}
                                  color={'#2A333C'}
                                  fontSize={'1rem'}
                                  fontWeight={500}
                                  lineHeight={'1.75rem'}
                                >
                                  {localeText(LANGUAGES.ORDER_PRODUCT)}
                                </Text>
                              </Box>
                              <Box width={'8.8333rem'}>
                                <Text
                                  textAlign={'center'}
                                  color={'#2A333C'}
                                  fontSize={'1rem'}
                                  fontWeight={500}
                                  lineHeight={'1.75rem'}
                                >
                                  {localeText(LANGUAGES.ORDER_QUANTITY)}
                                </Text>
                              </Box>
                              <Box width={'8.8333rem'}>
                                <Text
                                  textAlign={'center'}
                                  color={'#2A333C'}
                                  fontSize={'1rem'}
                                  fontWeight={500}
                                  lineHeight={'1.75rem'}
                                >
                                  {localeText(LANGUAGES.ORDER_TOTAL_PRICE)}
                                </Text>
                              </Box>
                              <Box width={'8.8333rem'}>
                                <Text
                                  textAlign={'center'}
                                  color={'#2A333C'}
                                  fontSize={'1rem'}
                                  fontWeight={500}
                                  lineHeight={'1.75rem'}
                                >
                                  {localeText(LANGUAGES.ORDER_SHIPPING_COST)}
                                </Text>
                              </Box>
                            </HStack>
                          </Box>
                          {/* body */}
                          <Box w={'100%'}>
                            <VStack spacing={0}>
                              {listOrder.map((item, index) => {
                                return orderCard(item, index);
                              })}
                            </VStack>
                          </Box>
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>

                  {/* Orderer Information */}
                  <Box w={'100%'}>
                    <VStack spacing={'2rem'}>
                      <Box w={'100%'}>
                        <Text
                          color={'#485766'}
                          fontSize={'1.5rem'}
                          fontWeight={500}
                          lineHeight={'2.475rem'}
                        >
                          {localeText(LANGUAGES.ORDERER_INFORMATION)}
                        </Text>
                      </Box>
                      <Box w={'100%'}>
                        <VStack align="stretch" spacing="1.25rem">
                          <HStack spacing="2rem" justify="flex-start">
                            <Text
                              width="10rem"
                              color="#7895B2"
                              fontSize="1rem"
                              fontWeight="400"
                              lineHeight="1.75rem"
                            >
                              {localeText(LANGUAGES.ORDERER_NAME)}
                            </Text>
                            <Text
                              color="#556A7E"
                              fontSize="1rem"
                              fontWeight="500"
                              lineHeight="1.75rem"
                            >
                              Gildong Hong
                            </Text>
                          </HStack>
                          <HStack spacing="2rem" justify="flex-start">
                            <Text
                              width="10rem"
                              color="#7895B2"
                              fontSize="1rem"
                              fontWeight="400"
                              lineHeight="1.75rem"
                            >
                              {localeText(LANGUAGES.PHONE_NUMBER)}
                            </Text>
                            <Text
                              color="#556A7E"
                              fontSize="1rem"
                              fontWeight="500"
                              lineHeight="1.75rem"
                            >
                              +82 10 1234 5678
                            </Text>
                          </HStack>
                          <HStack spacing="2rem" justify="flex-start">
                            <Text
                              width="10rem"
                              color="#7895B2"
                              fontSize="1rem"
                              fontWeight="400"
                              lineHeight="1.75rem"
                            >
                              {localeText(LANGUAGES.EMAIL)}
                            </Text>
                            <Text
                              color="#556A7E"
                              fontSize="1rem"
                              fontWeight="500"
                              lineHeight="1.75rem"
                            >
                              gildonghong@piboogo.com
                            </Text>
                          </HStack>
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>

                  {/* Shipping Information */}
                  <Box w={'100%'}>
                    <VStack spacing={'2rem'}>
                      <Box w={'100%'}>
                        <HStack
                          justify="space-between"
                          align="flex-end"
                          width="100%"
                        >
                          <Text
                            textAlign="center"
                            color="#485766"
                            fontSize="1.5rem"
                            fontWeight="500"
                            lineHeight="2.475rem"
                          >
                            {localeText(LANGUAGES.SHIPPING_INFORMATION)}
                          </Text>
                          <HStack
                            spacing="0.5rem"
                            justify="start"
                            align="center"
                          >
                            <Box
                              width="1.75rem"
                              height="1.75rem"
                              background="white"
                              borderRadius="4px"
                              border="1px solid #9CADBE"
                            />
                            <Text
                              color="#556A7E"
                              fontSize="1rem"
                              fontWeight="500"
                              lineHeight="1.75rem"
                            >
                              {localeText(
                                LANGUAGES.SAME_AS_ORDERER_INFORMATION,
                              )}
                            </Text>
                          </HStack>
                        </HStack>
                      </Box>
                      <Box w={'100%'}>
                        <VStack spacing={'1.25rem'}>
                          {/* First Row: Last name and First name */}
                          <Box w={'100%'}>
                            <HStack w={'100%'} spacing={'1.25rem'}>
                              <Box w={'50%'}>
                                <OrderTextInput
                                  title={localeText(LANGUAGES.LAST_NAME)}
                                />
                              </Box>
                              <Box w={'50%'}>
                                <OrderTextInput
                                  title={localeText(LANGUAGES.FIRST_NAME)}
                                />
                              </Box>
                            </HStack>
                          </Box>

                          {/* Second Row: Address 1 */}
                          <Box w={'100%'}>
                            <OrderTextInput
                              title={localeText(LANGUAGES.ORDER_ADDR_1)}
                            />
                          </Box>

                          {/* Third Row: Address 2 */}
                          <Box w={'100%'}>
                            <OrderTextInput
                              title={localeText(LANGUAGES.ORDER_ADDR_2)}
                            />
                          </Box>

                          {/* Fourth Row: Street address */}
                          <Box w={'100%'}>
                            <OrderTextInput
                              title={localeText(LANGUAGES.ORDER_STREET_ADDRESS)}
                            />
                          </Box>

                          {/* Fifth Row: Apartment, suite, etc. and Postal code */}
                          <Box w={'100%'}>
                            <HStack w={'100%'} spacing={'1.25rem'}>
                              <Box w={'50%'}>
                                <OrderTextInput
                                  title={localeText(
                                    LANGUAGES.ORDER_ETC_ADDRESS,
                                  )}
                                />
                              </Box>
                              <Box w={'50%'}>
                                <OrderTextInput
                                  title={localeText(LANGUAGES.ORDER_ZIP_CODE)}
                                />
                              </Box>
                            </HStack>
                          </Box>
                        </VStack>
                      </Box>
                    </VStack>
                  </Box>

                  {/* Coupon Discounts Section */}
                  <Box w={'100%'}>
                    <VStack spacing={'1.5rem'}>
                      <Box w={'100%'}>
                        <Text
                          color={'#485766'}
                          fontSize={'1.5rem'}
                          fontWeight={500}
                          lineHeight={'2.475rem'}
                        >
                          {localeText(LANGUAGES.COUPON_DISCOUNTS)}
                        </Text>
                      </Box>

                      <Divider
                        border={'1px solid #73829D'}
                        boxSizing="border-box"
                      />

                      <Box w={'100%'}>
                        <RadioGroup
                          value={selectedCouponId}
                          onChange={(couponId) => {
                            console.log('couponId', couponId);
                            setSelectedCouponId(Number(couponId));
                          }}
                        >
                          <VStack spacing={'1.5rem'}>
                            {listCoupon.map((item, index) => (
                              <CouponCard key={index} item={item} />
                            ))}
                          </VStack>
                        </RadioGroup>
                      </Box>
                    </VStack>
                  </Box>

                  {/* Reward Coin Section */}
                  <Box w={'100%'}>
                    <VStack spacing={'1.5rem'}>
                      <Box w={'100%'}>
                        <Text
                          color={'#485766'}
                          fontSize={'1.5rem'}
                          fontWeight={500}
                          lineHeight={'2.475rem'}
                        >
                          {localeText(LANGUAGES.REWARD_COINS)}
                        </Text>
                      </Box>

                      <Divider
                        border={'1px solid #73829D'}
                        boxSizing="border-box"
                      />

                      <Box w={'100%'}>
                        <HStack spacing={'1.5rem'}>
                          <Box>
                            <HStack spacing={'0.75rem'}>
                              <Box>
                                <Input
                                  w={'9.5rem'}
                                  h={'3.25rem'}
                                  type={'number'}
                                  orderRadius={'0.25rem'}
                                  border={'1px solid #9CADBE'}
                                  py={'0.75rem'}
                                  px={'1.5rem'}
                                  bg={'#FFF'}
                                  fontSize={'1rem'}
                                  onChange={(e) => {
                                    let inputValue = e.target.value;
                                    const maxLength = 1;
                                    if (
                                      (inputValue.length > maxLength + 1 &&
                                        inputValue.endsWith('ㆍ')) ||
                                      (inputValue.length > maxLength &&
                                        !inputValue.endsWith('ㆍ'))
                                    ) {
                                      inputValue = inputValue.slice(
                                        0,
                                        maxLength,
                                      );
                                    }
                                    console.log(inputValue);
                                    // setText1(inputValue);
                                  }}
                                />
                                {/* 
                                <DefaultInput
                                  w={'9.5rem'}
                                  h={'3.25rem'}
                                  type={'number'}
                                  value={''}
                                  onChange={(e) => {
                                    console.log(e.target.value);
                                  }}
                                  borderRadius={'0.25rem'}
                                  border={'1px solid #9CADBE'}
                                  py={'0.75rem'}
                                  px={'1.5rem'}
                                  bg={'#FFF'}
                                />
                                 */}
                              </Box>
                              <Box>
                                <Text
                                  color={'#66809C'}
                                  fontSize={'1rem'}
                                  fontWeight={500}
                                  lineHeight={'1.75rem'}
                                >
                                  coin of
                                </Text>
                              </Box>
                              <Box>
                                <Text
                                  color={'#FF5454'}
                                  fontSize={'1rem'}
                                  fontWeight={500}
                                  lineHeight={'1.75rem'}
                                >
                                  20 {localeText(LANGUAGES.COIN)}
                                </Text>
                              </Box>
                            </HStack>
                          </Box>
                          <Box>
                            <Button
                              minW={'7rem'}
                              h={'3.25rem'}
                              borderRadius={'0.25rem'}
                              border={'1px solid #73829D'}
                            >
                              <Text
                                color={'#556A7E'}
                                fontSize={'1rem'}
                                fontWeight={400}
                                lineHeight={'1.75rem'}
                              >
                                {localeText(LANGUAGES.FULL_USE)}
                              </Text>
                            </Button>
                          </Box>
                        </HStack>
                      </Box>
                    </VStack>
                  </Box>

                  {/* Payment method Section */}
                  <Box w={'100%'}>
                    <VStack spacing={'1.5rem'}>
                      <Box w={'100%'}>
                        <Text
                          color={'#485766'}
                          fontSize={'1.5rem'}
                          fontWeight={500}
                          lineHeight={'2.475rem'}
                        >
                          {localeText(LANGUAGES.PAYMENT_METHOD)}
                        </Text>
                      </Box>

                      <Divider
                        border={'1px solid #73829D'}
                        boxSizing="border-box"
                      />

                      <Box w={'100%'}>
                        <VStack>
                          <Box w={'100%'}>
                            <RadioGroup
                              value={selectedCouponId}
                              onChange={(couponId) => {
                                console.log('couponId', couponId);
                                setSelectedCouponId(Number(couponId));
                              }}
                            >
                              <HStack
                                justifyContent={'flex-start'}
                                spacing={'1.5rem'}
                              >
                                <Box>
                                  <HStack
                                    spacing={'0.75rem'}
                                    alignItems={'center'}
                                  >
                                    <Box>
                                      <Radio value={1} />
                                    </Box>
                                    <Box>
                                      <Text
                                        color="#485766"
                                        fontSize="1rem"
                                        fontFamily="Poppins"
                                        fontWeight="400"
                                        lineHeight="1.75rem"
                                        wordBreak="break-word"
                                      >
                                        {localeText(LANGUAGES.PAYPAL)}
                                      </Text>
                                    </Box>
                                  </HStack>
                                </Box>
                                <Box>
                                  <HStack
                                    spacing={'0.75rem'}
                                    alignItems={'center'}
                                  >
                                    <Box>
                                      <Radio value={2} />
                                    </Box>
                                    <Box>
                                      <Text
                                        color="#485766"
                                        fontSize="1rem"
                                        fontFamily="Poppins"
                                        fontWeight="400"
                                        lineHeight="1.75rem"
                                        wordBreak="break-word"
                                      >
                                        {localeText(
                                          LANGUAGES.AUTHORIZE_DOT_NET,
                                        )}
                                      </Text>
                                    </Box>
                                  </HStack>
                                </Box>
                              </HStack>
                            </RadioGroup>
                          </Box>
                        </VStack>
                      </Box>
                      <Box
                        w={'100%'}
                        // h={'5.25rem'}
                      >
                        <HStack
                          justifyContent={'space-between'}
                          spacing={'1.5rem'}
                        >
                          <Box w={'100%'}>
                            <VStack
                              alignItems={'flex-start'}
                              spacing={'0.25rem'}
                            >
                              <Text
                                color={'#485766'}
                                fontSize={'1rem'}
                                fontWeight={400}
                                lineHeight={'1.75rem'}
                              >
                                {localeText(LANGUAGES.CARD)}
                              </Text>
                              <Box w={'100%'}>
                                <Select
                                  onChange={(e) => {
                                    console.log(e.target.value);
                                  }}
                                  w={'100%'}
                                  h={'3.5rem'}
                                  bg={'#FFF'}
                                  borderRadius={'0.25rem'}
                                  border={'1px solid #9CADBE'}
                                >
                                  <option>!</option>
                                </Select>
                              </Box>
                            </VStack>
                          </Box>
                          <Box w={'100%'}>
                            <VStack
                              alignItems={'flex-start'}
                              spacing={'0.25rem'}
                            >
                              <Text
                                color={'#485766'}
                                fontSize={'1rem'}
                                fontWeight={400}
                                lineHeight={'1.75rem'}
                              >
                                {localeText(LANGUAGES.INSTALLMENT_PERIOD)}
                              </Text>
                              <Box w={'100%'}>
                                <Select
                                  onChange={(e) => {
                                    console.log(e.target.value);
                                  }}
                                  w={'100%'}
                                  h={'3.5rem'}
                                  bg={'#FFF'}
                                  borderRadius={'0.25rem'}
                                  border={'1px solid #9CADBE'}
                                >
                                  <option>!</option>
                                </Select>
                              </Box>
                            </VStack>
                          </Box>
                        </HStack>
                      </Box>
                    </VStack>
                  </Box>
                </VStack>
              </Box>

              <Box w={'37.5rem'}>
                <Box w={'100%'} p={'2.5rem'} border={'1px solid #9CADBE'}>
                  <VStack spacing={'3.5rem'}>
                    {/* Order Summary Section */}
                    <Box w={'100%'}>
                      <VStack spacing={'1.5rem'}>
                        <Box w={'100%'}>
                          <Text
                            color="#485766"
                            fontSize="1.25rem"
                            fontFamily="Poppins"
                            fontWeight="500"
                            lineHeight="2.25rem"
                            wordBreak="break-word"
                          >
                            {localeText(LANGUAGES.ORDER_SUMMARY)}
                          </Text>
                        </Box>

                        <Divider
                          border={'1px solid #73829D'}
                          boxSizing="border-box"
                        />

                        {/* Total Product Price */}
                        <Box w={'100%'}>
                          <VStack spacing={'1.25rem'}>
                            <Box w={'100%'}>
                              <HStack
                                w="full"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                gap="2rem"
                              >
                                <Text
                                  w="10rem"
                                  color="#7895B2"
                                  fontSize="1rem"
                                  fontFamily="Poppins"
                                  fontWeight="400"
                                  lineHeight="1.75rem"
                                  wordBreak="break-word"
                                >
                                  {localeText(LANGUAGES.ORDER_TOTAL_PRODUCT)}
                                </Text>
                                <Text
                                  color="#556A7E"
                                  fontSize="1rem"
                                  fontFamily="Poppins"
                                  fontWeight="500"
                                  lineHeight="1.75rem"
                                  wordBreak="break-word"
                                >
                                  $81.00
                                </Text>
                              </HStack>
                            </Box>
                            <Box w={'100%'}>
                              <HStack
                                w="full"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                gap="2rem"
                              >
                                <Text
                                  w="10rem"
                                  color="#7895B2"
                                  fontSize="1rem"
                                  fontFamily="Poppins"
                                  fontWeight="400"
                                  lineHeight="1.75rem"
                                  wordBreak="break-word"
                                >
                                  {localeText(LANGUAGES.ORDER_TOTAL_SHIPPING)}
                                </Text>
                                <Text
                                  color="#556A7E"
                                  fontSize="1rem"
                                  fontFamily="Poppins"
                                  fontWeight="500"
                                  lineHeight="1.75rem"
                                  wordBreak="break-word"
                                >
                                  $3.00
                                </Text>
                              </HStack>
                            </Box>
                            <Box w={'100%'}>
                              <HStack
                                w="full"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                gap="2rem"
                              >
                                <Text
                                  w="10rem"
                                  color="#7895B2"
                                  fontSize="1rem"
                                  fontFamily="Poppins"
                                  fontWeight="400"
                                  lineHeight="1.75rem"
                                  wordBreak="break-word"
                                >
                                  {localeText(LANGUAGES.ORDER_COUPON_DISCOUNT)}
                                </Text>
                                <Text
                                  color={'#940808'}
                                  fontSize={'1rem'}
                                  fontWeight={500}
                                  lineHeight={'1.75rem'}
                                >
                                  -$3.00
                                </Text>
                              </HStack>
                            </Box>
                            <Box w={'100%'}>
                              <HStack
                                w="full"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                gap="2rem"
                              >
                                <Text
                                  w={'10rem'}
                                  color={'#7895B2'}
                                  fontSize={'1rem'}
                                  fontWeight={400}
                                  lineHeight={'1.75rem'}
                                >
                                  {localeText(LANGUAGES.ORDER_REDEEMING_MILES)}
                                </Text>
                                <Text
                                  color={'#556A7E'}
                                  fontSize={'1rem'}
                                  fontWeight={500}
                                  lineHeight={'1.75rem'}
                                >
                                  0 coin
                                </Text>
                              </HStack>
                            </Box>
                            <Box w={'100%'}>
                              <HStack
                                w="full"
                                justifyContent="space-between"
                                alignItems="flex-start"
                                gap="2rem"
                              >
                                <Text
                                  w="10rem"
                                  color="#66809C"
                                  fontSize="1.125rem"
                                  fontFamily="Poppins"
                                  fontWeight="500"
                                  lineHeight="1.96875rem"
                                  wordBreak="break-word"
                                >
                                  {localeText(LANGUAGES.ORDER_TOTAL)}
                                </Text>
                                <Text
                                  color="#485766"
                                  fontSize="1.125rem"
                                  fontFamily="Poppins"
                                  fontWeight="600"
                                  lineHeight="1.96875rem"
                                  wordBreak="break-word"
                                >
                                  $84.00
                                </Text>
                              </HStack>
                            </Box>
                          </VStack>
                        </Box>
                      </VStack>
                    </Box>
                    <Box w={'100%'} h={'4rem'}>
                      <Button
                        w={'100%'}
                        h={'100%'}
                        minW={'8.5rem'}
                        px={'2rem'}
                        py={'0.88rem'}
                        borderRadius={'0.25rem'}
                        border={'1px solid #73829D'}
                        bg={'#66809C'}
                      >
                        <Text
                          color={'#FFF'}
                          fontSize={'1.25rem'}
                          fontWeight={400}
                          lineHeight={'2.25rem'}
                        >
                          {localeText(LANGUAGES.ORDER_CHECK_OUT)}
                        </Text>
                      </Button>
                    </Box>
                  </VStack>
                </Box>
              </Box>
            </HStack>
          </Box>

          <ContentBR h={'10rem'} />

          <Footer />
        </VStack>
      </Center>
    </main>
  );
};

const CouponCard = ({ item }) => {
  return (
    <Box w={'100%'}>
      <VStack spacing={'0.25rem'} alignItems="flex-start">
        <Box w={'100%'}>
          <HStack justifyContent={'space-between'}>
            <Box>
              <HStack spacing={'0.75rem'} alignItems={'center'}>
                <Box>
                  <Radio value={item.couponId} />
                </Box>
                <Box>
                  <Text
                    color="#485766"
                    fontSize="1rem"
                    fontFamily="Poppins"
                    fontWeight="400"
                    lineHeight="1.75rem"
                    wordBreak="break-word"
                  >
                    {item.name}
                  </Text>
                </Box>
              </HStack>
            </Box>
            <Box>
              {item.discount && (
                <Text
                  color="#556A7E"
                  fontSize="1rem"
                  fontFamily="Poppins"
                  fontWeight="500"
                  lineHeight="1.75rem"
                  wordBreak="break-word"
                >
                  - $10.00
                </Text>
              )}
            </Box>
          </HStack>
        </Box>
        <Box w={'100%'} px={'2.25rem'}>
          <Text
            flex="1"
            color="#7895B2"
            fontSize="1rem"
            fontFamily="Poppins"
            fontWeight="400"
            lineHeight="1.75rem"
            wordBreak="break-word"
          >
            Redemption Terms: {item.redemption}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default OrderPage;
