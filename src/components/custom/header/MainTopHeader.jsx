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
import LogoGlobalLinear from '@public/svgs/simbol/global-linear.svg';
import HeaderSearchIcon from '@public/svgs/simbol/header-search-icon.svg';
import useLocale from '@/hooks/useLocale';
import { useCallback, useState } from 'react';
import { LANGUAGES } from '@/constants/lang';
import useMenu from '@/hooks/useMenu';
import { useRouter } from 'next/navigation';

const MainTopHeader = (props) => {
  const { bg = '#FAF7F2' } = props;
  const router = useRouter();
  const { lang, setLang, localeText } = useLocale();

  const [searchBy, setSearchBy] = useState('');
  const { listMenu, currentMenu, setCurrentMenu } = useMenu();

  const handleTopMenu = useCallback((item) => {
    setCurrentMenu(item);
    router.push(item.href);
  });

  return (
    <Center w={'100%'} h={'100%'} maxH={720} bg={bg}>
      <Box
        py={'1.5rem'}
        px={'1.25rem'}
        w={'100%'}
        maxW={1920}
        borderBottom={'1px solid #AEBDCA'}
      >
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
                  placeholder={localeText(LANGUAGES.HEADER_INPUT_PLACEHOLDER)}
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
                            bg={lang === 'KR' ? '#7895B2' : null}
                            onClick={() => {
                              setLang('KR');
                            }}
                          >
                            <Text
                              fontSize={'1rem'}
                              fontWeight={500}
                              color={lang === 'KR' ? '#FFF' : '#2A333C'}
                            >
                              {lang === 'KR' ? '한글' : 'Kor'}
                            </Text>
                          </MenuItem>
                          <MenuItem
                            bg={lang === 'EN' ? '#7895B2' : null}
                            onClick={() => {
                              setLang('EN');
                            }}
                          >
                            <Text
                              fontSize={'1rem'}
                              fontWeight={500}
                              color={lang === 'EN' ? '#FFF' : '#2A333C'}
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
                      {localeText(LANGUAGES.MY_PAGE)}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={'1rem'} fontWeight={500} color={'#2A333C'}>
                      {localeText(LANGUAGES.SIGN_UP_TO_SELLER)}
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
            {listMenu.map((item, index) => {
              return (
                <Box
                  key={index}
                  _hover={{
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    handleTopMenu(item);
                  }}
                >
                  <Text
                    fontSize={'1.25rem'}
                    fontWeight={currentMenu.key === item.key ? 500 : 400}
                    color={currentMenu.key === item.key ? '#66809C' : '#495060'}
                  >
                    {item.title}
                  </Text>
                </Box>
              );
            })}
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default MainTopHeader;
