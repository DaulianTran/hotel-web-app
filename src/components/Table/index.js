/* <Table />
- Props
  + header: string array, chứa tiêu đề từng cột
  + rows: array object, dữ liệu bảng
  + actions: array component, chứa component 
  + rowsPerPage:  number
  + currentPage, onChangePage : control table with state. Must declare both.
- Future update:
  + If you about to use pagination in database, you should transfer state to parent component
*/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from './Pagination';
import { faScrewdriverWrench, faTrash, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Table({
  AttrToNameHeader,
  rows,
  actions,
  rowsPerPage,
  currentPage: externalCurrentPage,
  onChangePage: externalSetCurrentPage,
  isAdmin,
}) {
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);

  // if (isAdmin) {
  //   return <div>acb</div>;
  // }
  //Internal, external are used to cover case "transfer state from outside or not"

  const currentPage = externalCurrentPage !== undefined ? externalCurrentPage : internalCurrentPage;
  const onChangePage = externalSetCurrentPage !== undefined ? externalSetCurrentPage : setInternalCurrentPage;

  const headerKeys = Object.keys(AttrToNameHeader);
  // table cell template
  const tableCell = (value) => {
    return (
      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" key={value}>
        {value}
      </td>
    );
  };

  // return table rows based on page
  const renderTableRowsByPage = (currentPage, rowsPerPage) => {
    const elements = [];
    const startIndex = (currentPage - 1) * rowsPerPage;
    let endIndex = startIndex + rowsPerPage;
    if (endIndex > rows.length) {
      endIndex = rows.length;
    }

    for (let i = startIndex; i < endIndex; i++) {
      const row = rows[i];
      const rowCells = [];

      for (const key of headerKeys) {
        rowCells.push(tableCell(row[key]));
      }

      // AttrToNameHeader.map((key) => rowCells.push(tableCell(row[key])));

      elements.push(
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={i}>
          {rowCells}
          {!isAdmin ? (
            <td className="flex flex-row py-4 px-6 gap-2 min-h-14">
              <div className="bg-red-100 h-6 w-6 rounded-sm text-center cursor-pointer">
                <FontAwesomeIcon icon={faTrashCan} style={{ color: '#fc2c1d' }} size="sm" />
              </div>
              <div className="bg-sky-100 h-6 w-6 rounded-sm text-center cursor-pointer">
                <FontAwesomeIcon icon={faScrewdriverWrench} style={{ color: '#74C0FC' }} size="sm" />
              </div>
            </td>
          ) : null}
        </tr>,
      );

      // ĐANG LỖI VỚI TÌM KIẾM

      // const emptyRows = rowsPerPage - (endIndex - startIndex);
      // for (let i = 0; i < emptyRows; i++) {
      //   elements.push(
      //     <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={i}>
      //       <td className="flex flex-row py-4 px-6 gap-2 min-h-14"></td>
      //     </tr>,
      //   );
      // }
    }

    return elements;
  };

  // return all table rows at once
  const renderAllTableRow = () => {
    return rows.map((row, index) => (
      <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={index}>
        {Object.values(row).map((value) => tableCell(value))}
        {!isAdmin ? (
          <td className="flex flex-row py-4 px-6 gap-2">
            <FontAwesomeIcon icon={faTrash} style={{ color: '#e61433' }} size="sm" />
            <FontAwesomeIcon icon={faScrewdriverWrench} style={{ color: '#74C0FC' }} size="sm" />
          </td>
        ) : null}
      </tr>
    ));
  };

  return (
    <>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  {AttrToNameHeader &&
                    headerKeys.map((key) => (
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400"
                      >
                        {AttrToNameHeader[key]}
                      </th>
                    ))}
                  {!isAdmin ? (
                    <th
                      scope="col"
                      className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 w-40"
                    >
                      Actions
                    </th>
                  ) : null}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {/* Function check if user declare rowPerPage to decide which "return table rows" function is used */}
                {rows ? (
                  rowsPerPage ? (
                    renderTableRowsByPage(currentPage, rowsPerPage)
                  ) : (
                    renderAllTableRow()
                  )
                ) : (
                  <div className="h-20"></div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Pass state to paginate tab */}
      {rowsPerPage && (
        <Pagination
          totalItems={rows.length}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          onChangePage={onChangePage}
        />
      )}
    </>
  );
}

export default Table;
