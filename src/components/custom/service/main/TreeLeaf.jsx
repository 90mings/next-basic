'use client';

import { Box, Image } from '@chakra-ui/react';
import LeafSvgs from '@/svgs/leaf/index';
import CSS from './Tree.module.css';
import MainInfoButton from './MainInfoButton';
import { TYPE_SUBJECT } from '@/constants/common';

const TreeLeaf = (props) => {
  const {
    isWide = false,
    isActive = false,
    data = [],
    topicDataList = [],
  } = props;

  return (
    <Box
      zIndex={3}
      className="leaf-form"
      position={'absolute'}
      w={'84.7950%'}
      maxW={isWide ? '70%' : null}
      h={{
        xl: '37.0149%',
        lg: '37.0149%',
        md: '37.0149%',
        sm: '28%',
        xs: '28%',
      }}
      objectFit={'contain'}
      left={'50%'}
      transform={'translate(-50%, 0%)'}
      // bottom={'44.5515%'}
      bottom={'42.5515%'}
    >
      <Box position={'relative'} w={'100%'} h={'100%'}>
        {topicDataList && (
          <MainInfoButton
            isActive={isActive}
            type={TYPE_SUBJECT}
            isWide={isWide}
            data={topicDataList}
          />
        )}
        <Image
          className={`${CSS.leaf} ${CSS.leaf01}`}
          src={
            data[0]?.passVowelBranchId ? LeafSvgs.leaf01Active : LeafSvgs.leaf01
          }
        />
        <Image
          className={`${CSS.leaf} ${CSS.leaf02}`}
          src={
            data[1]?.passVowelBranchId ? LeafSvgs.leaf02Active : LeafSvgs.leaf02
          }
        />
        <Image
          className={`${CSS.leaf} ${CSS.leaf03}`}
          src={
            data[2]?.passVowelBranchId ? LeafSvgs.leaf03Active : LeafSvgs.leaf03
          }
        />
        <Image
          className={`${CSS.leaf} ${CSS.leaf04}`}
          src={
            data[3]?.passVowelBranchId ? LeafSvgs.leaf04Active : LeafSvgs.leaf04
          }
        />
        <Image
          className={`${CSS.leaf} ${CSS.leaf05}`}
          src={
            data[4]?.passVowelBranchId ? LeafSvgs.leaf05Active : LeafSvgs.leaf05
          }
        />
        <Image
          className={`${CSS.leaf} ${CSS.leaf06}`}
          src={
            data[5]?.passVowelBranchId ? LeafSvgs.leaf06Active : LeafSvgs.leaf06
          }
        />
        <Image
          className={`${CSS.leaf} ${CSS.leaf07}`}
          src={
            data[6]?.passVowelBranchId ? LeafSvgs.leaf07Active : LeafSvgs.leaf07
          }
        />
        <Image
          className={`${CSS.leaf} ${CSS.leaf08}`}
          src={
            data[7]?.passVowelBranchId ? LeafSvgs.leaf08Active : LeafSvgs.leaf08
          }
        />
        <Image
          className={`${CSS.leaf} ${CSS.leaf09}`}
          src={
            data[8]?.passVowelBranchId ? LeafSvgs.leaf09Active : LeafSvgs.leaf09
          }
        />
        <Image
          className={`${CSS.leaf} ${CSS.leaf10}`}
          src={
            data[9]?.passVowelBranchId ? LeafSvgs.leaf10Active : LeafSvgs.leaf10
          }
        />
      </Box>
    </Box>
  );
};

export default TreeLeaf;
