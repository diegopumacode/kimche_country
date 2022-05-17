import { useEffect, useState } from 'react';

const paginationListGroup = (list, steps = 5) => {
  const page = [];
  let index = 0;
  let pageIndex = 0;
  while (index < list.length) {
    page[pageIndex] = list.slice(index, index + steps);
    index += steps;
    pageIndex += 1;
  }
  return { page, index, pageIndex };
};

export default function usePagination(list, initialPage, steps, reactionStates = []) {
  const [paginationList, setPaginationList] = useState([]);
  const { page, index, pageIndex } = paginationListGroup(list, steps);
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    setCurrentPage(initialPage);
    setPaginationList(page[0]);
  }, [...reactionStates]);

  const viewMore = () => {
    if (currentPage < pageIndex) {
      setPaginationList([...paginationList, ...page[currentPage]]);
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    paginationList,
    index,
    viewMore,
    currentPage,
    pageIndex,
  };
}
