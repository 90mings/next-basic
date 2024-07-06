'use client';

import { Box, HStack, Image } from '@chakra-ui/react';
import StemSvgs from '@/svgs/stem/index';
import CSS from './Stem.module.css';
import TreeStemImage from '@/svgs/stem/tree-stem.svg';

const TreeStem = (props) => {
  const { isWide = false, data = [] } = props;

  /*
  width: 333.71px;
  height: 562.51px;
  */
  return (
    <Box
      zIndex={3}
      position={'absolute'}
      left={'50%'}
      transform={'translate(-50%, 0%)'}
      w={'41.71375%'}
      bottom={'29.6269%'}
    >
      <Box position={'relative'} w={'100%'} h={'100%'}>
        <Box
          position={'relative'}
          left={'50%'}
          transform={'translate(-50%, 0%)'}
          // w={isWide ? '70%' : '100%'}
          width={isWide ? '70%' : 'fit-content'}
          h={'100%'}
        >
          {data[0]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem01}`}
              src={StemSvgs.stem01Active}
            />
          )}
          {data[1]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem02}`}
              src={StemSvgs.stem02Active}
            />
          )}
          {data[2]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem03}`}
              src={StemSvgs.stem03Active}
            />
          )}
          {data[3]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem04}`}
              src={StemSvgs.stem04Active}
            />
          )}
          {data[4]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem05}`}
              src={StemSvgs.stem05Active}
            />
          )}
          {data[5]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem06}`}
              src={StemSvgs.stem06Active}
            />
          )}
          {data[6]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem07}`}
              src={StemSvgs.stem07Active}
            />
          )}
          {data[7]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem08}`}
              src={StemSvgs.stem08Active}
            />
          )}
          {data[8]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem09}`}
              src={StemSvgs.stem09Active}
            />
          )}
          {data[9]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem10}`}
              src={StemSvgs.stem10Active}
            />
          )}

          {data[10]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem11}`}
              src={StemSvgs.stem11Active}
            />
          )}
          {data[11]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem12}`}
              src={StemSvgs.stem12Active}
            />
          )}
          {data[12]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem13}`}
              src={StemSvgs.stem13Active}
            />
          )}
          {data[13]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem14}`}
              src={StemSvgs.stem14Active}
            />
          )}
          {data[14]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem15}`}
              src={StemSvgs.stem15Active}
            />
          )}
          {data[15]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem16}`}
              src={StemSvgs.stem16Active}
            />
          )}

          {data[16]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem17}`}
              src={StemSvgs.stem17Active}
            />
          )}
          {data[16]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem18}`}
              src={StemSvgs.stem18Active}
            />
          )}
          {data[16]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem19}`}
              src={StemSvgs.stem19Active}
            />
          )}
          {data[17]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem20}`}
              src={StemSvgs.stem20Active}
            />
          )}
          {data[17]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem21}`}
              src={StemSvgs.stem21Active}
            />
          )}
          {data[18]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem22}`}
              src={StemSvgs.stem22Active}
            />
          )}
          {data[18]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem23}`}
              src={StemSvgs.stem23Active}
            />
          )}
          {data[19]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem24}`}
              src={StemSvgs.stem24Active}
            />
          )}
          {data[19]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem25}`}
              src={StemSvgs.stem25Active}
            />
          )}
          {data[20]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem26}`}
              src={StemSvgs.stem26Active}
            />
          )}
          {data[20]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem27}`}
              src={StemSvgs.stem27Active}
            />
          )}
          {data[21]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem28}`}
              src={StemSvgs.stem28Active}
            />
          )}
          {data[21]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem29}`}
              src={StemSvgs.stem29Active}
            />
          )}
          {data[22]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem30}`}
              src={StemSvgs.stem30Active}
            />
          )}
          {data[22]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem31}`}
              src={StemSvgs.stem31Active}
            />
          )}
          {data[23]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem32}`}
              src={StemSvgs.stem32Active}
            />
          )}
          {data[23]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem33}`}
              src={StemSvgs.stem33Active}
            />
          )}
          {data[24]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem34}`}
              src={StemSvgs.stem34Active}
            />
          )}
          {data[24]?.passConsonantsBranchId && (
            <Image
              className={`${CSS.stem} ${CSS.stem35}`}
              src={StemSvgs.stem35Active}
            />
          )}

          <HStack
            justifyContent={'center'}
            position={'relative'}
            zIndex={1}
            //bg={'red'}
            //
          >
            <Image
              src={TreeStemImage.src}
              // visibility={'hidden'}
              //
            />
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default TreeStem;
