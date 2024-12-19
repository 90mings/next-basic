'use client';

import { Box, Center, Flex, HStack, Img, Text, VStack } from '@chakra-ui/react';

import ContentBR from '@/components/custom/ContentBR';
import MainTopHeader from '@/components/custom/header/MainTopHeader';
import BrandHeader from '@/components/custom/header/BrandHeader';
import SignUpHeader from '@/components/custom/header/SignUpHeader';
import useLocale from '@/hooks/useLocale';

import MainBanner from '@/components/custom/banner/MainBanner';
import BrandBanner from '@/components/custom/banner/BrandBanner';

import BestBanner1 from '@public/svgs/banner/best-brand1.svg';
import BestBanner2 from '@public/svgs/banner/best-brand2.svg';
import BestBanner3 from '@public/svgs/banner/best-brand3.svg';
import BestBanner4 from '@public/svgs/banner/best-brand4.svg';

import NewBanner1 from '@public/svgs/banner/new-brand1.svg';
import NewBanner2 from '@public/svgs/banner/new-brand2.svg';
import NewBanner3 from '@public/svgs/banner/new-brand3.svg';
import NewBanner4 from '@public/svgs/banner/new-brand4.svg';

import Brand1 from '@public/svgs/brand/brand1.svg';
import Brand2 from '@public/svgs/brand/brand2.svg';
import Brand3 from '@public/svgs/brand/brand3.svg';
import Brand4 from '@public/svgs/brand/brand4.svg';
import Brand5 from '@public/svgs/brand/brand5.svg';
import Brand6 from '@public/svgs/brand/brand6.svg';

import MainFirst from '@public/svgs/main/main-first.svg';
import MainSecond from '@public/svgs/main/main-second.svg';
import MainThird from '@public/svgs/main/main-third.svg';
import { BANNERS, LANG_KEY } from '@/constants/lang';
import useMenu from '@/hooks/useMenu';
import RightIconButton from '@/components/button/custom/RightIconButton';
import Footer from '@/components/common/custom/Footer';

const MainPage = () => {
  const { brandMenu, setBrandMenu } = useMenu();
  const { localeText, localeBannerText } = useLocale();

  return (
    <main>
      <Center w={'100%'}>
        <VStack w={'100%'} maxW={1920} spacing={0}>
          <SignUpHeader />
          <MainTopHeader />
          <MainBanner
            right={
              <Center
                bg={'#90AEC4'}
                px={'6.25rem'}
                // py={'11.06rem'}
                w={'50%'}
              >
                <VStack spacing={'5rem'} w={'100%'}>
                  <Box w={'100%'}>
                    <Text
                      fontSize={{
                        '3xl': '3rem',
                        '2xl': '2.5rem',
                        xl: '2rem',
                        lg: '1.5rem',
                        md: '1rem',
                        sm: '0.5rem',
                        xs: '1rem',
                      }}
                      fontWeight={500}
                      color={'#FFF'}
                      lineHeight={{
                        '3xl': '4.3rem',
                        '2xl': '4rem',
                        xl: '3.8rem',
                        lg: '3.2rem',
                        md: '2.5rem',
                        sm: '2.8rem',
                        xs: '2.5rem',
                      }}
                    >
                      Buy products for
                      <br />
                      your store your customers
                      <br /> will love.
                    </Text>
                  </Box>
                  <Box w={'100%'}>
                    <RightIconButton
                      w={'15.5rem'}
                      h={'3.875rem'}
                      bg={'#FFF'}
                      color={'#66809C'}
                      // iconName={'arrowRight'}
                      // onClick
                      textKey={LANG_KEY.GO_TO_BRAND_HOME}
                    />
                  </Box>
                </VStack>
              </Center>
            }
            left={
              <Box h={'100%'} maxW={'50%'} maxH={720}>
                <Img src={MainFirst.src} />
              </Box>
            }
          />
          <ContentBR />
          <BrandHeader
            headerTitle={'Best Brand'}
            targetMenu={brandMenu}
            setTargetMenu={setBrandMenu}
            listMenu={[
              {
                title: localeText(LANG_KEY.SKIN_CARE),
                key: 'SKIN_CARE',
                href: '/main/category/skincare',
              },
              {
                title: localeText(LANG_KEY.MAKE_UP),
                key: 'MAKE_UP',
                href: '/main/category/make-up',
              },
              {
                title: localeText(LANG_KEY.HAIR_CARE),
                key: 'HAIR_CARE',
                href: '123',
              },
              {
                title: localeText(LANG_KEY.BODY_CARE),
                key: 'BODY_CARE',
                href: '123',
              },
              {
                title: localeText(LANG_KEY.MENS_GROOMING),
                key: 'MENS_GROOMING',
                href: '123',
              },
            ]}
          />
          <BrandBanner
            onClickAllView={() => {
              console.log('123');
            }}
            listBrand={[
              {
                img: BestBanner1,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.content),
              },
              {
                img: BestBanner2,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.content),
              },
              {
                img: BestBanner3,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.content),
              },
              {
                img: BestBanner4,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.content),
              },
            ]}
          />
          <ContentBR />
          <MainBanner
            right={
              <Box h={'100%'} maxW={'50%'} maxH={720}>
                <Img src={MainSecond.src} />
              </Box>
            }
            left={
              <Center
                bg={'#D9E7EC'}
                px={'6.25rem'}
                // py={'7.5rem'}
                w={'50%'}
              >
                <VStack spacing={'4.25rem'} w={'100%'}>
                  <Box w={'100%'}>
                    <Text
                      fontSize={'2.5rem'}
                      fontWeight={500}
                      color={'#576076'}
                      lineHeight={'3.5rem'}
                    >
                      We make it simple.
                      <br />
                      You make it yours.
                    </Text>
                  </Box>
                  <Box w={'100%'}>
                    <VStack spacing={'2.5rem'}>
                      <Box w={'100%'}>
                        <Text
                          fontSize={'1.5rem'}
                          fontWeight={400}
                          color={'#66809C'}
                          lineHeight={'2.1rem'}
                        >
                          Faire is the one-stop-shop for
                          <br />
                          everything you need to stock your store.
                        </Text>
                      </Box>
                      <Box w={'100%'}>
                        <Text
                          fontSize={'1.5rem'}
                          fontWeight={400}
                          color={'#66809C'}
                          lineHeight={'2.1rem'}
                        >
                          Shop quality brands with low order
                          <br />
                          minimums and free shipping options.
                        </Text>
                      </Box>
                      <Box w={'100%'}>
                        <Text
                          fontSize={'1.5rem'}
                          fontWeight={400}
                          color={'#66809C'}
                          lineHeight={'2.1rem'}
                        >
                          Buy new inventory for your shop now and pay invoices
                          60
                          <br />
                          days later, with zero fees
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                </VStack>
              </Center>
            }
          />
          <ContentBR />
          <BrandHeader
            headerTitle={'New Brand'}
            targetMenu={brandMenu}
            setTargetMenu={setBrandMenu}
            listMenu={[
              {
                title: localeText(LANG_KEY.SKIN_CARE),
                key: 'SKIN_CARE',
                href: '123',
              },
              {
                title: localeText(LANG_KEY.MAKE_UP),
                key: 'MAKE_UP',
                href: '123',
              },
              {
                title: localeText(LANG_KEY.HAIR_CARE),
                key: 'HAIR_CARE',
                href: '123',
              },
              {
                title: localeText(LANG_KEY.BODY_CARE),
                key: 'BODY_CARE',
                href: '123',
              },
              {
                title: localeText(LANG_KEY.MENS_GROOMING),
                key: 'MENS_GROOMING',
                href: '123',
              },
            ]}
          />
          <BrandBanner
            onClickAllView={() => {
              console.log('123');
            }}
            listBrand={[
              {
                img: NewBanner1,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.content),
              },
              {
                img: NewBanner2,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.content),
              },
              {
                img: NewBanner3,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.content),
              },
              {
                img: NewBanner4,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.content),
              },
            ]}
          />
          <ContentBR />
          <MainBanner
            right={
              <Center
                bg={'#E9F2F5'}
                px={'6.25rem'}
                // py={'11.06rem'}
                w={'50%'}
              >
                <VStack spacing={'5rem'} w={'100%'}>
                  <Box w={'100%'}>
                    <Text
                      fontSize={{
                        '3xl': '3rem',
                        '2xl': '2.5rem',
                        xl: '2rem',
                        lg: '1.5rem',
                        md: '1rem',
                        sm: '0.5rem',
                        xs: '1rem',
                      }}
                      fontWeight={500}
                      color={'#576076'}
                      lineHeight={{
                        '3xl': '4.3rem',
                        '2xl': '4rem',
                        xl: '3.8rem',
                        lg: '3.2rem',
                        md: '2.5rem',
                        sm: '2.8rem',
                        xs: '2.5rem',
                      }}
                    >
                      Buy products for
                      <br />
                      your store your customers
                      <br /> will love.
                    </Text>
                  </Box>
                  <Box w={'100%'}>
                    <RightIconButton
                      w={'15.5rem'}
                      h={'3.875rem'}
                      bg={'#FFF'}
                      color={'#576076'}
                      // onClick
                      textKey={LANG_KEY.GO_TO_BRAND_HOME}
                    />
                  </Box>
                </VStack>
              </Center>
            }
            left={
              <Box h={'100%'} maxW={'50%'} maxH={720}>
                <Img src={MainThird.src} />
              </Box>
            }
          />
          <ContentBR />
          <MainBanner
            right={
              <Box
                w={'50%'}
                h={'100%'}
                bg={'#7895B2'}
                py={{
                  xl: '3.25rem',
                  lg: '2.75rem',
                  md: '2.25rem',
                  sm: '1.75rem',
                }}
                pl={{
                  xl: '3.25rem',
                  lg: '2.75rem',
                  md: '2.25rem',
                  sm: '1.75rem',
                }}
                pr={'0rem'}
              >
                <VStack spacing={'1.5rem'}>
                  <Box>
                    <HStack spacing={'1.5rem'}>
                      <Box>
                        <Img
                          /*
                          w={{
                            xl: '27.625rem',
                            lg: '27.625rem',
                            md: '27.625rem',
                            sm: '27.625rem',
                          }}
                          h={{
                            xl: '18.5rem',
                            lg: '13.875rem',
                            md: '9.25rem',
                            sm: '4.625rem',
                          }}
                          */
                          w={'27.625rem'}
                          h={'18.5rem'}
                          objectFit={'cover'}
                          src={MainThird.src}
                        />
                      </Box>
                      <Box>
                        <Img
                          w={'27.625rem'}
                          h={'18.5rem'}
                          objectFit={'cover'}
                          src={MainThird.src}
                        />
                      </Box>
                    </HStack>
                  </Box>
                  <Box>
                    <HStack spacing={'1.5rem'}>
                      <Box>
                        <Img
                          w={'27.625rem'}
                          h={'18.5rem'}
                          objectFit={'cover'}
                          src={MainThird.src}
                        />
                      </Box>
                      <Box>
                        <Img
                          w={'27.625rem'}
                          h={'18.5rem'}
                          objectFit={'cover'}
                          src={MainThird.src}
                        />
                      </Box>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            }
            left={
              <Center
                bg={'#7895B2'}
                px={'6.25rem'}
                // py={'11.06rem'}
                w={'50%'}
              >
                <VStack spacing={'5rem'} w={'100%'}>
                  <Box w={'100%'}>
                    <VStack spacing={'2.5rem'}>
                      <Box w={'100%'}>
                        <Text
                          fontSize={{
                            '3xl': '2.5rem',
                            '2xl': '2.5rem',
                            xl: '2rem',
                            lg: '1.5rem',
                            md: '1rem',
                            sm: '0.5rem',
                            xs: '1rem',
                          }}
                          fontWeight={500}
                          color={'#FFF'}
                          lineHeight={{
                            '3xl': '3.5rem',
                            '2xl': '4rem',
                            xl: '3.8rem',
                            lg: '3.2rem',
                            md: '2.5rem',
                            sm: '2.8rem',
                            xs: '2.5rem',
                          }}
                        >
                          Discover your next
                          <br />
                          bestseller
                        </Text>
                      </Box>
                      <Box w={'100%'}>
                        <Text
                          fontSize={{
                            '3xl': '1.5rem',
                            '2xl': '2.5rem',
                            xl: '2rem',
                            lg: '1.5rem',
                            md: '1rem',
                            sm: '0.5rem',
                            xs: '1rem',
                          }}
                          fontWeight={400}
                          color={'#F2EEE2'}
                          lineHeight={{
                            '3xl': '2.1rem',
                            '2xl': '4rem',
                            xl: '3.8rem',
                            lg: '3.2rem',
                            md: '2.5rem',
                            sm: '2.8rem',
                            xs: '2.5rem',
                          }}
                        >
                          See what retailers from across
                          <br />
                          the globe are loving on Faire
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                  <Box w={'100%'}>
                    <RightIconButton
                      bg={'#FFF'}
                      color={'#485766'}
                      iconName={'arrowRight'}
                      // onClick
                      // textKey = 'VIEW_ALL',
                    />
                  </Box>
                </VStack>
              </Center>
            }
          />

          <ContentBR />

          <MainBanner
            isHeight
            right={
              <Box w={'100%'} h={'100%'} maxW={'50%'} pl={'7.5rem'}>
                <Center h={'100%'}>
                  <VStack spacing={'4.25rem'} w={'100%'}>
                    <Box w={'100%'}>
                      <Text
                        fontSize={{
                          '3xl': '2.5rem',
                          '2xl': '2.5rem',
                          xl: '2rem',
                          lg: '1.5rem',
                          md: '1rem',
                          sm: '0.5rem',
                          xs: '1rem',
                        }}
                        fontWeight={500}
                        color={'#485766'}
                        lineHeight={{
                          '3xl': '4rem',
                          '2xl': '4rem',
                          xl: '3.8rem',
                          lg: '3.2rem',
                          md: '2.5rem',
                          sm: '2.8rem',
                          xs: '2.5rem',
                        }}
                      >
                        Our high-level
                        <br />
                        partners
                      </Text>
                    </Box>
                    <Box w={'100%'}>
                      <Text
                        fontSize={{
                          '3xl': '1.5rem',
                          '2xl': '1.5rem',
                          xl: '2rem',
                          lg: '1.5rem',
                          md: '1rem',
                          sm: '0.5rem',
                          xs: '1rem',
                        }}
                        fontWeight={400}
                        color={'#66809C'}
                        lineHeight={{
                          '3xl': '2.475rem',
                          '2xl': '2.475',
                          xl: '2.475',
                          lg: '2.475',
                          md: '2.475',
                          sm: '2.475',
                          xs: '2.475',
                        }}
                      >
                        Faire is the one-stop-shop for
                        <br />
                        everything you need to stock your store.
                      </Text>
                    </Box>
                  </VStack>
                </Center>
              </Box>
            }
            left={
              <Box h={'100%'} maxW={'50%'} maxH={720} px={'3.25rem'}>
                <Center h={'100%'}>
                  <VStack spacing={'3rem'}>
                    <HStack spacing={'1.75rem'}>
                      <Center
                        w={'25.3125rem'}
                        h={'8.75rem'}
                        bg={'#D9E7EC'}
                        borderRadius={'0.5rem'}
                      >
                        <Img src={Brand1.src} />
                      </Center>
                      <Center
                        w={'25.3125rem'}
                        h={'8.75rem'}
                        bg={'#D9E7EC'}
                        borderRadius={'0.5rem'}
                      >
                        <Img src={Brand2.src} />
                      </Center>
                    </HStack>
                    <HStack spacing={'1.75rem'}>
                      <Center
                        w={'25.3125rem'}
                        h={'8.75rem'}
                        bg={'#D9E7EC'}
                        borderRadius={'0.5rem'}
                      >
                        <Img src={Brand3.src} />
                      </Center>
                      <Center
                        w={'25.3125rem'}
                        h={'8.75rem'}
                        bg={'#D9E7EC'}
                        borderRadius={'0.5rem'}
                      >
                        <Img src={Brand4.src} />
                      </Center>
                    </HStack>
                    <HStack spacing={'1.75rem'}>
                      <Center
                        w={'25.3125rem'}
                        h={'8.75rem'}
                        bg={'#D9E7EC'}
                        borderRadius={'0.5rem'}
                      >
                        <Img src={Brand5.src} />
                      </Center>
                      <Center
                        w={'25.3125rem'}
                        h={'8.75rem'}
                        bg={'#D9E7EC'}
                        borderRadius={'0.5rem'}
                      >
                        <Img src={Brand6.src} />
                      </Center>
                    </HStack>
                  </VStack>
                </Center>
              </Box>
            }
          />

          <ContentBR />

          {/* footer */}
          <Footer />
        </VStack>
      </Center>
    </main>
  );
};

export default MainPage;
