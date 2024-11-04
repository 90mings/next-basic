'use client';

import { DefaultInput, LoginButton, SearchInput } from '@/components';
import { SNS_TYPE_NAVER } from '@/constants/common';
import LANGUAGES from '@/constants/lang';
import useLocale from '@/hooks/useLocale';
import useModal from '@/hooks/useModal';
import utils from '@/utils';
import { Box, Center, Select, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const App = ({ Component, pageProps }) => {
  const { openModal } = useModal();
  const { lang, setLang, localeText } = useLocale();
  const [a, setA] = useState('');

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

    const ret = utils.checkEmail('abc');
    console.log('ret', ret);
    if (ret === null) {
      openModal({
        text: localeText('NOT_FOUND_EMAIL'),
      });
    } else if (!ret) {
      openModal({
        text: localeText('NOT_MATCH_EMAIL'),
      });
    }
  }, []);

  return (
    <main>
      <Center>
        <Box w="50%">
          <DefaultInput
            max={3}
            value={a}
            onChange={(v) => {
              setA(v);
            }}
            placeholder={'abc'}
          />
          <SearchInput
            placeholder={'abc'}
            value={a}
            onChange={(v) => {
              setA(v);
            }}
          />
          <Select
            value={lang}
            onChange={(e) => {
              setLang(e.target.value);
            }}
          >
            <option value={'KR'}>KR</option>
            <option value={'EN'}>EN</option>
          </Select>
          <Text color={'red'}>{localeText('a')}</Text>
          <LoginButton
            type={SNS_TYPE_NAVER}
            onClick={async () => {
              handleSnsLogin(SNS_TYPE_NAVER);
            }}
          />
        </Box>
      </Center>
    </main>
  );
};

export default App;
