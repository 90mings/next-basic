'use client';

import ContentBR from '@/components/custom/ContentBR';
import MainTopHeader from '@/components/custom/header/MainTopHeader';
import BrandHeader from '@/components/custom/header/BrandHeader';
import SignUpHeader from '@/components/custom/header/SignUpHeader';
import useLocale from '@/hooks/useLocale';
import useModal from '@/hooks/useModal';
import { deviceInfoState } from '@/stores/environmentRecoil';
import { Box, Center, Flex, HStack, Img, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import MainBanner from '@/components/custom/banner/MainBanner';
import BrandBanner from '@/components/custom/banner/BrandBanner';
import Banner1 from '@/svgs/banner/brandBanner1.svg';
import Banner2 from '@/svgs/banner/brandBanner2.svg';
import Banner3 from '@/svgs/banner/brandBanner3.svg';
import Banner4 from '@/svgs/banner/brandBanner4.svg';
import MainFirst from '@/svgs/main/main-first.svg';
import MainSecond from '@/svgs/main/main-second.svg';
import MainThird from '@/svgs/main/main-third.svg';
import { BANNERS, LANG_KEY } from '@/constants/lang';
import useMenu from '@/hooks/useMenu';
import RightIconButton from '@/components/button/custom/RightIconButton';

const App = () => {
  const { openModal } = useModal();
  const { headerMenu, setHeaderMenu, brandMenu, setBrandMenu } = useMenu();
  const { lang, setLang, localeText, localeBannerText } = useLocale();
  const [a, setA] = useState('');
  const deviceInfo = useRecoilValue(deviceInfoState);

  useEffect(() => {
    // 지역정보 취득
    if (!lang) {
      const fetchLocation = async () => {
        const ret = await axios.get('/api/location');
        console.log('response', ret.data);
        setLang(ret.data.location);
      };
      fetchLocation();
    }
  }, []);

  /* 웹 체크
  useEffect(() => {
    const setPage = () => {
      console.log(deviceInfo);
      if (deviceInfo.w < 600 || deviceInfo.isMobile) {
        console.log('## mobile');
      } else {
        console.log('## web');
      }
    };

    setPage();
  }, [deviceInfo]);
  */

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
                img: Banner1,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.content),
              },
              {
                img: Banner2,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.content),
              },
              {
                img: Banner3,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.content),
              },
              {
                img: Banner4,
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
                img: Banner1,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.content),
              },
              {
                img: Banner2,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER2.content),
              },
              {
                img: Banner3,
                title: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.title),
                content: localeBannerText(BANNERS.BRAND_BANNER.BANNER1.content),
              },
              {
                img: Banner4,
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
            right={
              <Box bg={'#F9F7F1'} p={5} w={'50%'}>
                <Text fontSize="lg" color="gray.700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  non erat felis. Aliquam erat volutpat. Nam vestibulum ante et
                  felis lacinia, eu tincidunt nulla tincidunt.
                </Text>
              </Box>
            }
            left={
              <Box h={'100%'} maxW={'50%'} maxH={720}>
                <Img src={MainFirst.src} />
              </Box>
            }
          />

          <ContentBR />
          <Center
            py={'3.75rem'}
            px={'10rem'}
            w={'100%'}
            h={'18.875rem'}
            bg={'#F2EEE2'}
          >
            <Flex
              w={'100%'}
              h={'100%'}
              direction="row"
              // justify="center"
              // align="center"
              // bg="gray.100"
            >
              <Box
                w={'50rem'}
                h={'100%'}
                alignContent={'flex-start'}
                alignSelf={'flex-start'}
                justifyItems={'flex-start'}
                justifySelf={'flex-start'}
              >
                <VStack spacing={'1.25rem'}>
                  <Box w={'100%'}>
                    <Text
                      fontSize={'2.5rem'}
                      fontWeight={500}
                      color={'#71513B'}
                    >
                      Piboogo
                    </Text>
                  </Box>
                  <Box w={'100%'}>
                    <HStack spacing={'1.75rem'}>
                      <Text
                        fontSize={'1rem'}
                        fontWeight={500}
                        color={'#A87C4E'}
                      >
                        Terms of Service
                      </Text>
                      <Text
                        fontSize={'1rem'}
                        fontWeight={500}
                        color={'#A87C4E'}
                      >
                        Privacy Policy
                      </Text>
                      <Text
                        fontSize={'1rem'}
                        fontWeight={500}
                        color={'#A87C4E'}
                      >
                        IP Policy
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
              <Box w={'50rem'}>
                <VStack spacing={'2rem'}>
                  <Box w={'100%'}>
                    <Text
                      fontSize={{
                        '3xl': '1rem',
                        '2xl': '0.9rem',
                        xl: '0.8rem',
                        lg: '0.7rem',
                        md: '0.6rem',
                        sm: '0.5rem',
                        xs: '0.4rem',
                      }}
                      fontWeight={400}
                      color={'#A87C4E'}
                    >
                      ©2024 Piboogo, Inc.
                    </Text>
                  </Box>
                  <Box w={'100%'}>
                    <Text
                      fontSize={{
                        '3xl': '1rem',
                        '2xl': '0.9rem',
                        xl: '0.8rem',
                        lg: '0.7rem',
                        md: '0.6rem',
                        sm: '0.5rem',
                        xs: '0.4rem',
                      }}
                      fontWeight={500}
                      color={'#A87C4E'}
                      lineHeight={{
                        '3xl': '2.1rem',
                        '2xl': '1.8rem',
                        xl: '1.8rem',
                        lg: '1.5rem',
                        md: '0.9rem',
                        sm: '0.6rem',
                        xs: '0.4rem',
                      }}
                    >
                      Privacy Officer: Gildong Hong | Business Registration No.:
                      809-81-01574
                      <br />
                      Address: 24th Floor, 372, Hangang-daero, Yongsan-gu,
                      Seoul, 04323, Republic of Korea
                      <br />
                      T: +82 2 1234 4567 | F: +82 2 1234 4567 | E:
                      piboogo_cs@piboogo.com
                      <br />
                      E-commerce Permit: 2017-Seoul-Yongsan-0451
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </Flex>
          </Center>
        </VStack>
      </Center>
    </main>
  );
};

export default App;
