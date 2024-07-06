'use client';

import { Box, Image } from '@chakra-ui/react';
import TreeRootImage from '@/svgs/root/tree-root.svg';
import TreeRoot1Active from '@/svgs/root/tree-root1-active.svg';
import TreeRoot2Active from '@/svgs/root/tree-root2-active.svg';
import TreeRoot3Active from '@/svgs/root/tree-root3-active.svg';
import TreeRoot4Active from '@/svgs/root/tree-root4-active.svg';
import TreeRoot5Active from '@/svgs/root/tree-root5-active.svg';
import { useEffect, useState } from 'react';
import utils from 'src/utils';

const TreeRoot = (props) => {
  const { isWide = false, data = [] } = props;

  const [passCount, setPassCount] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      const tempData = [...data];
      tempData.pop();
      const result = tempData.filter((item) => {
        return (
          item.passRingSoundStepId !== 0 &&
          utils.isNotEmpty(item.passRingSoundStepId)
        );
      });
      setPassCount(result.length);
    }
  }, [data]);

  /*
  width: 626.68px;
  height: 295px;
  */
  return (
    <Box
      zIndex={4}
      position={'absolute'}
      w={'78.3375%'}
      left={'8.3750%'}
      // transform={'translate(-50%, 0%)'}
      // bottom={'8.3582%'}
      top={'69.63%'}
    >
      <Box position={'relative'} w={'100%'} h={'100%'}>
        <Box
          position={'relative'}
          left={'50%'}
          transform={'translate(-50%, 0%)'}
          w={isWide ? '70%' : '100%'}
          h={'100%'}
        >
          {passCount > 0 && (
            <Image
              zIndex={5}
              position={'absolute'}
              w={'47.1756%'}
              top={'3%'}
              objectFit={'contain'}
              left={'0'}
              src={TreeRoot1Active.src}
            />
          )}
          {passCount > 1 && (
            <Image
              zIndex={5}
              position={'absolute'}
              w={'34.0206%'}
              top={'3%'}
              objectFit={'contain'}
              left={'18.6060%'}
              src={TreeRoot2Active.src}
            />
          )}
          {passCount > 2 && (
            <Image
              zIndex={5}
              position={'absolute'}
              w={'22.2650%'}
              top={'3%'}
              objectFit={'contain'}
              left={'44.3129%'}
              src={TreeRoot3Active.src}
            />
          )}
          {passCount > 3 && (
            <Image
              zIndex={5}
              position={'absolute'}
              w={'44.5522%'}
              objectFit={'contain'}
              left={'55.4350%'}
              src={TreeRoot4Active.src}
            />
          )}
          {passCount > 4 && (
            <Image
              zIndex={5}
              position={'absolute'}
              w={'31.8153%'}
              top={'3%'}
              objectFit={'contain'}
              left={'62.8231%'}
              src={TreeRoot5Active.src}
            />
          )}
          <Image src={TreeRootImage.src} />
        </Box>
      </Box>
    </Box>
  );
};

export default TreeRoot;
