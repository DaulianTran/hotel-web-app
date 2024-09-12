const Pagination = ({ totalItems, rowsPerPage, currentPage, onChangePage }) => {
  if (!rowsPerPage && typeof rowsPerPage !== 'number') {
    return null; // Handle the case where rowPerPage is not valid
  }

  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const pageNumbers = [];

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onChangePage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onChangePage(currentPage - 1);
    }
  };

  currentPage > 1
    ? pageNumbers.push(
        <button
          to="#"
          className={
            'relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out border rounded-md cursor-pointer border-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 ' +
            (currentPage === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-700 hover:border-sky-500 hover:text-sky-500')
          }
          onClick={goToPreviousPage}
        >
          {'<'}
        </button>,
      )
    : pageNumbers.push(<div className="w-[88px]"></div>);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <button
        to="#"
        className={
          'relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out  border rounded-md cursor-pointer border-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 ' +
          (currentPage === i
            ? 'bg-sky-500 text-white cursor-default'
            : 'text-gray-700 hover:border-sky-500 hover:text-sky-500')
        }
        onClick={() => onChangePage(i)}
      >
        {i}
      </button>,
    );
  }
  currentPage < totalPages
    ? pageNumbers.push(
        <button
          to="#"
          className={
            'relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out  border rounded-md cursor-pointer border-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 text-gray-700 hover:border-sky-500 hover:text-sky-500'
          }
          onClick={goToNextPage}
        >
          {'>'}
        </button>,
      )
    : pageNumbers.push(<div className="w-[62px]"></div>);

  return (
    <nav class="flex space-x-2 ml-[15%] justify-end mt-2" aria-label="Pagination">
      {pageNumbers}
    </nav>
  );
};

export default Pagination;
