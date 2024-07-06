'use client';

import { Box, HStack, IconButton, Image, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import NavAlert from '@/svgs/nav-ring.svg';
import NavRank from '@/svgs/nav-rank.svg';
import NavMy from '@/svgs/nav-my.svg';
import { MY_PAGE, ALARM, RANK } from '@/constants/pageURL';
import { RADIUS_S_40 } from '@/constants/common';

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
    <Box position={'absolute'} w={'100%'} h={'100%'} top={0} right={0}>
      <HStack justifyContent={'flex-end'}>
        <VStack spacing={0}>
          <IconButton
            w={{ xl: '100px', lg: '90px', md: '80px', sm: '70px', xs: '60px' }}
            h={{ xl: '100px', lg: '90px', md: '80px', sm: '70px', xs: '60px' }}
            bg="#FEC240"
            _active={{}}
            _hover={{}}
            border={0}
            borderRadius={0}
            onClick={handleAlarm}
          >
            <Image w={'60%'} src={NavAlert.src} />
          </IconButton>
          <IconButton
            w={{ xl: '100px', lg: '90px', md: '80px', sm: '70px', xs: '60px' }}
            h={{ xl: '100px', lg: '90px', md: '80px', sm: '70px', xs: '60px' }}
            bg="#4DC6E0"
            _active={{}}
            _hover={{}}
            border={0}
            borderRadius={0}
            onClick={handleRank}
          >
            <Image w={'60%'} src={NavRank.src} />
          </IconButton>
          <IconButton
            w={{ xl: '100px', lg: '90px', md: '80px', sm: '70px', xs: '60px' }}
            h={{ xl: '100px', lg: '90px', md: '80px', sm: '70px', xs: '60px' }}
            bg="#75B125"
            _active={{}}
            _hover={{}}
            border={0}
            borderRadius={0}
            borderBottomLeftRadius={RADIUS_S_40}
            onClick={handleMyPage}
          >
            <Image w={'60%'} src={NavMy.src} />
          </IconButton>
        </VStack>
      </HStack>
    </Box>
  );
};

export default MainNavbar;
