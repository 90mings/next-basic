'use client';

import {
  Box,
  Center,
  HStack,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import LogoGlobalLinear from '@/svgs/simbol/global-linear.svg';
import HeaderSearchIcon from '@/svgs/simbol/header-search-icon.svg';
import useLocale from '@/hooks/useLocale';
import { useEffect, useState } from 'react';
import { LANG_KEY } from '@/constants/lang';
import useMenu from '@/hooks/useMenu';

const MainTopHeader = () => {
  const { lang, setLang, localeText } = useLocale();

  const [searchBy, setSearchBy] = useState('');
  const { headerMenu, setHeaderMenu } = useMenu();

  const listMenu = [
    {
      title: localeText(LANG_KEY.PROMOTION),
      key: 'PROMOTION',
      href: '123',
    },
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
  ];

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

  return (
    <Box w={'100%'} h={'100%'} maxH={720} maxW={1920}>
      <Box py={'1.5rem'} px={'1.25rem'} w={'100%'}>
        <VStack w={'100%'} spacing={'2rem'}>
          <HStack
            justifyContent={'space-between'}
            py={'0.5rem'}
            px={'1.25rem'}
            w={'100%'}
          >
            <Box w={'11.375rem'} minW={'320px'}>
              <Box display={'flex'} justifyContent={'flex-start'}>
                {/* <Img src={LogoPiboogo.src} /> */}
                <Text fontSize={'2.75rem'} fontWeight={500} color={'#485766'}>
                  Piboogo
                </Text>
              </Box>
            </Box>
            <Box>
              <InputGroup
                p={'0.06rem'}
                onClick={() => {
                  //
                }}
              >
                <Input
                  w={'37.5rem'}
                  h={'3.5rem'}
                  borderRadius={'4.13rem'}
                  border={'1px solid #7895B2'}
                  placeholder={localeText(LANG_KEY.HEADER_INPUT_PLACEHOLDER)}
                  _placeholder={{
                    fontWeight: 400,
                    fontSize: '1rem',
                    fontColor: '#73829D',
                  }}
                  fontSize={'1rem'}
                  fontWeight={400}
                  value={searchBy || ''}
                  onChange={(e) => {
                    setSearchBy(e.target.value);
                  }}
                  // type={type}
                  // borderRadius={borderRadius}
                  // borderColor={borderColor}
                  // color={color}
                  // max={max}
                  // fontSize={fontSize}
                  // fontWeight={fontWeight}
                  // readOnly={isClickComp}
                  // value={value || ''}
                  // onChange={handleChange}
                  // onKeyDown={handleOnKeyDown}
                  // onFocus={onFocus}
                  // onBlur={onBlur}
                  // _placeholder={_placeholder}
                  // textAlign={textAlign}
                />
                <InputRightElement
                  mr={'0.45rem'}
                  h={'100%'}
                  onClick={() => {
                    //
                  }}
                  _hover={{
                    cursor: 'pointer',
                  }}
                >
                  <Center h={'100%'}>
                    <Img w={'2rem'} h={'2rem'} src={HeaderSearchIcon.src} />
                  </Center>
                </InputRightElement>
              </InputGroup>
            </Box>
            <Box minW={'320px'}>
              <Box display={'flex'} justifyContent={'flex-end'}>
                <HStack spacing={'2.5rem'}>
                  <Box>
                    <HStack spacing={1}>
                      <Box>
                        <Img src={LogoGlobalLinear.src} />
                      </Box>
                      <Menu isLazy>
                        <MenuButton>
                          <Text
                            fontSize={'1rem'}
                            fontWeight={500}
                            color={'#2A333C'}
                          >
                            {lang === 'KR' ? '한글' : 'Eng'}
                          </Text>
                        </MenuButton>
                        <MenuList>
                          <MenuItem
                            onClick={() => {
                              setLang('KR');
                            }}
                          >
                            <Text
                              fontSize={'1rem'}
                              fontWeight={500}
                              color={'#2A333C'}
                            >
                              {lang === 'KR' ? '한글' : 'Kor'}
                            </Text>
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              setLang('EN');
                            }}
                          >
                            <Text
                              fontSize={'1rem'}
                              fontWeight={500}
                              color={'#2A333C'}
                            >
                              {lang === 'KR' ? '영문' : 'Eng'}
                            </Text>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </HStack>
                  </Box>
                  <Box>
                    <Text fontSize={'1rem'} fontWeight={500} color={'#2A333C'}>
                      {localeText(LANG_KEY.MY_PAGE)}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={'1rem'} fontWeight={500} color={'#2A333C'}>
                      {localeText(LANG_KEY.SIGN_UP_TO_SELLER)}
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Box>
          </HStack>
          <HStack
            // justifyContent={'space-'}
            px={'1.25rem'}
            w={'100%'}
            spacing={'3.75rem'}
          >
            {listMenu.map((item) => {
              return (
                <Box
                  key={item.title}
                  _hover={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    setHeaderMenu(item.key);
                  }}
                >
                  <Text
                    fontSize={'1.25rem'}
                    fontWeight={headerMenu === item.key ? 500 : 400}
                    color={headerMenu === item.key ? '#66809C' : '#495060'}
                  >
                    {item.title}
                  </Text>
                </Box>
              );
            })}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default MainTopHeader;
