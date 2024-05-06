'use client';

import { Box, IconButton, Image, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import NavAlert from '@/svgs/nav-ring.svg';
import NavRank from '@/svgs/nav-rank.svg';
import NavMy from '@/svgs/nav-my.svg';
import { MY_PAGE, ALARM, RANK } from '@/constants/pageURL';

const MainNavbar = (props) => {
  const router = useRouter();

  const handleAlarm = () => {
    router.push(ALARM.root);
  };

  const handleRank = () => {
    router.push(RANK.root);
  };

  const handleMyPage = () => {
    router.push(MY_PAGE.root);
  };

  return (
    <Box position={'absolute'} top={0} right={0}>
      <VStack spacing={0}>
        <IconButton
          w="100px"
          h="100px"
          bg="#FEC240"
          _active={{}}
          _hover={{}}
          border={0}
          borderRadius={0}
          onClick={handleAlarm}
        >
          <Image src={NavAlert.src} />
        </IconButton>
        <IconButton
          w="100px"
          h="100px"
          bg="#4DC6E0"
          _active={{}}
          _hover={{}}
          border={0}
          borderRadius={0}
          onClick={handleRank}
        >
          <Image src={NavRank.src} />
        </IconButton>
        <IconButton
          w="100px"
          h="100px"
          bg="#75B125"
          _active={{}}
          _hover={{}}
          border={0}
          borderRadius={0}
          borderBottomLeftRadius={'30px'}
          onClick={handleMyPage}
        >
          <Image src={NavMy.src} />
        </IconButton>
      </VStack>
    </Box>
  );
};

export default MainNavbar;
