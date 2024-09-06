import { Link } from 'react-router-dom';

const Pagination = ({ totalItems, rowsPerPage }) => {
  if (rowsPerPage && typeof rowsPerPage === 'number') {
    console.log('this is number 09282');
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    const pageNumbers = [];

    pageNumbers.push(
      <Link
        to="#"
        className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border rounded-md cursor-pointer border-fuchsia-100 hover:bg-fuchsia-200 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
      >
        Previous
      </Link>,
    );
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <Link
          to="#"
          className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border rounded-md cursor-pointer border-fuchsia-100 hover:bg-fuchsia-200 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
        >
          {i}
        </Link>,
      );
    }
    pageNumbers.push(
      <Link
        to="#"
        className="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border rounded-md cursor-pointer border-fuchsia-100 hover:bg-fuchsia-200 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
      >
        next
      </Link>,
    );

    return (
      <nav class="flex space-x-2 ml-[15%]" aria-label="Pagination">
        {pageNumbers}
      </nav>
    );
  }

  return null; // Handle the case where rowPerPage is not valid
};

export default Pagination;
