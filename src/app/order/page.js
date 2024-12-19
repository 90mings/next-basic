'use client';

import {
  Box,
  Center,
  Checkbox,
  HStack,
  Img,
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

const OrderPage = () => {
  return (
    <main>
      <Center w={'100%'}>
        <VStack w={'100%'} maxW={1920} spacing={0}>
          <MainTopHeader />
          <Box
            w={'100%'}
            px={'10rem'}
            py={'2.5rem'}
            borderTop={'1px solid #AEBDCA'}
          >
            <Text
              color={'#485766'}
              fontSize={'3rem'}
              fontStyle={'normal'}
              fontWeight={400}
              lineHeight={'4.5rem'}
            >
              Order
            </Text>
          </Box>
          <ContentBR h={'2.5rem'} />
          <Box w={'100%'} px={'10rem'}>
            <HStack spacing={'2.5rem'} justifyContent={'space-between'}>
              <Box width="60rem">
                {/* Product Information */}
                <VStack spacing={'2rem'}>
                  <Box w={'100%'}>
                    <HStack
                      justify={'space-between'}
                      align={'flex-end'}
                      width={'100%'}
                    >
                      <Text
                        color={'#485766'}
                        fontSize={'1.5rem'}
                        fontWeight={500}
                        lineHeight={'2.475rem'}
                      >
                        Product information
                      </Text>
                      <Box>
                        <Text
                          color={'#B20000'}
                          fontSize={'1rem'}
                          fontWeight={500}
                          lineHeight={'1.75rem'}
                        >
                          Delete 1 selected product
                        </Text>
                      </Box>
                    </HStack>
                  </Box>
                  <Box w={'100%'}>
                    <TableContainer className="order-table">
                      <Table>
                        <Thead>
                          <Tr>
                            <Th>
                              <Checkbox />
                            </Th>
                            <Th w={'26.25rem'}>Product</Th>
                            <Th w={'8.8333rem'}>Quantity</Th>
                            <Th w={'8.8333rem'}>Total order price</Th>
                            <Th w={'8.8333rem'}>Shipping cost</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          <Tr>
                            <Td>inches</Td>
                            <Td>millimetres (mm)</Td>
                            <Td isNumeric>25.4</Td>
                          </Tr>
                          <Tr>
                            <Td>feet</Td>
                            <Td>centimetres (cm)</Td>
                            <Td isNumeric>30.48</Td>
                          </Tr>
                          <Tr>
                            <Td>yards</Td>
                            <Td>metres (m)</Td>
                            <Td isNumeric>0.91444</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                    {/* Product Rows */}
                    <VStack align="stretch" spacing="0" height="21.25rem">
                      {/*
                      <Box w={'100%'}>
                        <HStack
                          borderTop="1px solid #73829D"
                          padding="1rem"
                          justify="space-between"
                          align="center"
                          spacing="0.75rem"
                        >
                          <Box
                            width="1.75rem"
                            height="1.75rem"
                            background="white"
                            borderRadius="4px"
                            border="1px solid #9CADBE"
                          />
                          <Text
                            width="26.25rem"
                            textAlign="center"
                            color="#2A333C"
                            fontSize="1rem"
                            fontWeight="500"
                            lineHeight="1.75rem"
                          >
                            Product
                          </Text>
                          <Text
                            flex="1 1 0"
                            textAlign="center"
                            color="#2A333C"
                            fontSize="1rem"
                            fontWeight="500"
                            lineHeight="1.75rem"
                          >
                            Quantity
                          </Text>
                          <Text
                            flex="1 1 0"
                            textAlign="center"
                            color="#2A333C"
                            fontSize="1rem"
                            fontWeight="500"
                            lineHeight="1.75rem"
                          >
                            Total order price
                          </Text>
                          <Text
                            flex="1 1 0"
                            textAlign="center"
                            color="#2A333C"
                            fontSize="1rem"
                            fontWeight="500"
                            lineHeight="1.75rem"
                          >
                            Shipping cost
                          </Text>
                        </HStack>
                      </Box>
                      */}
                      <Box w={'100%'} padding={'1.25rem'}>
                        <HStack
                          borderTop="1px solid #AEBDCA"
                          align="center"
                          spacing="0.75rem"
                        >
                          <Box
                            width="1.75rem"
                            height="1.75rem"
                            background="white"
                            borderRadius="4px"
                            border="1px solid #9CADBE"
                          />
                          <Box w={'100%'}>
                            <HStack>
                              <Box>
                                <Img
                                  width="6.25rem"
                                  height="6.25rem"
                                  src="https://via.placeholder.com/100x100"
                                />
                              </Box>
                              <Box>
                                <VStack align="flex-start" spacing={'0.75rem'}>
                                  <Box>
                                    <VStack spacing={0}>
                                      <Box w={'100%'}>
                                        <Text
                                          color="#66809C"
                                          fontSize="0.9375rem"
                                          fontWeight="400"
                                          lineHeight="1.5rem"
                                        >
                                          Rampal Latour
                                        </Text>
                                      </Box>
                                      <Box w={'100%'}>
                                        <Text
                                          color="#485766"
                                          fontSize="1rem"
                                          fontWeight="500"
                                          lineHeight="1.75rem"
                                        >
                                          Marseille Blanc 300g
                                        </Text>
                                      </Box>
                                    </VStack>
                                  </Box>
                                  <Box>
                                    <Text
                                      color="#66809C"
                                      fontSize="0.9375rem"
                                      fontWeight="400"
                                      lineHeight="1.5rem"
                                    >
                                      Option : [Color]Cappuccino (+$2.00)
                                    </Text>
                                  </Box>
                                </VStack>
                              </Box>
                            </HStack>
                          </Box>
                          <Box>
                            <Text
                              textAlign="center"
                              color="#485766"
                              fontSize="1rem"
                              fontWeight="500"
                              lineHeight="1.75rem"
                            >
                              2
                            </Text>
                          </Box>
                          <Box>
                            <Text
                              textAlign="center"
                              color="#485766"
                              fontSize="1rem"
                              fontWeight="500"
                              lineHeight="1.75rem"
                            >
                              $54.00
                            </Text>
                          </Box>
                          <Box>
                            <Text
                              textAlign="center"
                              color="#485766"
                              fontSize="1rem"
                              fontWeight="500"
                              lineHeight="1.75rem"
                            >
                              $3.00
                            </Text>
                          </Box>
                        </HStack>
                      </Box>
                      {/* Additional product rows can be added here similarly */}
                    </VStack>
                  </Box>
                </VStack>

                {/* Orderer Information */}
                <VStack align="stretch" spacing="2rem" height="12.25rem">
                  <Text
                    textAlign="center"
                    color="#485766"
                    fontSize="1.5rem"
                    fontWeight="500"
                    lineHeight="2.475rem"
                  >
                    Orderer information
                  </Text>
                  <VStack align="stretch" spacing="1.25rem">
                    <HStack spacing="2rem" justify="flex-start">
                      <Text
                        width="10rem"
                        color="#7895B2"
                        fontSize="1rem"
                        fontWeight="400"
                        lineHeight="1.75rem"
                      >
                        Orderer name
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
                        Phone number
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
                        Email
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
                </VStack>

                {/* Shipping Information */}
                <VStack align="stretch" spacing="2rem" height="35.5rem">
                  <HStack justify="space-between" align="flex-end" width="100%">
                    <Text
                      textAlign="center"
                      color="#485766"
                      fontSize="1.5rem"
                      fontWeight="500"
                      lineHeight="2.475rem"
                    >
                      Shipping information
                    </Text>
                    <HStack spacing="0.5rem" justify="start" align="center">
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
                        Same as orderer information
                      </Text>
                    </HStack>
                  </HStack>
                  {/* Shipping Address Fields */}
                  <VStack align="stretch" spacing="1.25rem">
                    {/* Address 1 */}
                    <HStack
                      spacing="1.25rem"
                      justify="flex-start"
                      align="center"
                    >
                      <Text
                        width="10rem"
                        color="#7895B2"
                        fontSize="1rem"
                        fontWeight="400"
                        lineHeight="1.75rem"
                      >
                        Last name
                      </Text>
                      <Box
                        width="100%"
                        padding="0.75rem"
                        background="white"
                        borderRadius="4px"
                        border="1px solid #9CADBE"
                      />
                    </HStack>
                    {/* Additional Address Fields */}
                  </VStack>
                </VStack>
              </Box>
            </HStack>
          </Box>
        </VStack>
      </Center>
    </main>
  );
};

export default OrderPage;
