'use client';

import { DefaultInput } from '@/components';
import { Box, Center, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { LoginButton, SearchInput } from 'src/components';
import { SNS_TYPE_NAVER } from 'src/constants/common';

const App = ({ Component, pageProps }) => {
  const [a, setA] = useState('');
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
          <Select>
            <option>1</option>
          </Select>
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
