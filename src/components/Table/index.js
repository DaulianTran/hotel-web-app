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
import { faScrewdriverWrench, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Table({
  AttrToNameHeader,
  rows,
  actions,
  rowsPerPage,
  currentPage: externalCurrentPage,
  onChangePage: externalSetCurrentPage,
}) {
  //Internal, external are used to cover case "transfer state from outside or not"
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);

  const currentPage = externalCurrentPage !== undefined ? externalCurrentPage : internalCurrentPage;
  const onChangePage = externalSetCurrentPage !== undefined ? externalSetCurrentPage : setInternalCurrentPage;

  const headerKeys = Object.keys(AttrToNameHeader);
  // table cell template
  const tableCell = (value) => {
    return (
      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" key={value}>
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
        <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" key={i}>
          {rowCells}
          <td class="flex flex-row py-4 px-6 gap-2">
            <FontAwesomeIcon icon={faTrash} style={{ color: '#e61433' }} size="4xs" />
            <FontAwesomeIcon icon={faScrewdriverWrench} style={{ color: '#74C0FC' }} size="4xs" />
          </td>
        </tr>,
      );
    }

    return elements;
  };

  // return all table rows at once
  const renderAllTableRow = () => {
    return rows.map((row, index) => (
      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" key={index}>
        {Object.values(row).map((value) => tableCell(value))}
        <td class="flex flex-row py-4 px-6 gap-2">
          <FontAwesomeIcon icon={faTrash} style={{ color: '#e61433' }} size="4xs" />
          <FontAwesomeIcon icon={faScrewdriverWrench} style={{ color: '#74C0FC' }} size="4xs" />
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div class="overflow-x-auto shadow-md sm:rounded-lg m-2">
        <div class="inline-block min-w-full align-middle">
          <div class="overflow-hidden ">
            <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead class="bg-gray-100 dark:bg-gray-700">
                <tr>
                  {AttrToNameHeader &&
                    headerKeys.map((key) => (
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400"
                      >
                        {AttrToNameHeader[key]}
                      </th>
                    ))}
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 w-40"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
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
