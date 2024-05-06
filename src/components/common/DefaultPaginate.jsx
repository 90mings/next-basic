import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, IconButton, Text } from '@chakra-ui/react';

import CSS from './DefaultPaginate.module.css';

const DefaultPaginate = (props) => {
  const {
    currentPage = 1,
    setCurrentPage,
    totalCount = 1,
    contentNum = 1,
  } = props;

  // 고정
  const pageBlock = 5;
  // 적절하게 분배
  // const pageBlock = Math.ceil(totalCount / contentNum);

  const toFirstPage = () => {
    setCurrentPage(1);
  };
  const toPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const toNextPage = () => {
    if (currentPage < Math.ceil(totalCount / contentNum))
      setCurrentPage(currentPage + 1);
  };
  const toLastPage = () => {
    setCurrentPage(Math.ceil(totalCount / contentNum));
  };

  const renderPages = () => {
    let firstNum = 1;
    // if (currentPage > 5)
    if (currentPage > pageBlock)
      firstNum += Math.floor((currentPage - 1) / pageBlock) * pageBlock;

    return Array(pageBlock)
      .fill(0)
      .map((pagerItem, index) => {
        if (firstNum + index <= Math.ceil(totalCount / contentNum)) {
          const pageIndex = `pagination_page_${index}`;
          return (
            <Button
              p={0}
              className={`${CSS.paginationBbutton}`}
              _hover={{
                borderColor: '#50555C',
              }}
              borderColor={
                currentPage === firstNum + index
                  ? '#50555C !important'
                  : '#DDDDDD'
              }
              key={pageIndex}
              onClick={() => {
                return setCurrentPage(firstNum + index);
              }}
            >
              <Text
                fontWeight={500}
                fontSize="12px"
                color={currentPage === firstNum + index ? '#000920' : '#B5B5B5'}
              >
                {firstNum + index}
              </Text>
            </Button>
          );
        }
      });
  };

  return (
    <Box>
      <HStack justifyContent="space-around" alignItems="center" spacing={1}>
        <IconButton
          _hover={{
            borderColor: '#50555C',
          }}
          onClick={toPrevPage}
          className={`${CSS.paginationBbutton}`}
        >
          <ChevronLeftIcon />
        </IconButton>
        {renderPages()}
        <IconButton
          _hover={{
            borderColor: '#50555C',
          }}
          onClick={toNextPage}
          className={`${CSS.paginationBbutton}`}
        >
          <ChevronRightIcon />
        </IconButton>
      </HStack>
    </Box>
  );
};

export default DefaultPaginate;
