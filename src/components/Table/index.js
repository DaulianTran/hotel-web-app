/* <Table />
- Props
  + header: string array, chứa tiêu đề từng cột
  + rows: array object, dữ liệu bảng
  + actions: array component, chứa component 
  + rowsPerPage:  number
*/
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Pagination from './Pagination';
import { faScrewdriverWrench, faTrash } from '@fortawesome/free-solid-svg-icons';

function Table({ headers, rows, actions, rowsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const tableRow = (value) => {
    return (
      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" key={value}>
        {value}
      </td>
    );
  };
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

      const values = Object.values(row);
      for (let j = 0; j < values.length; j++) {
        rowCells.push(tableRow(values[j]));
      }

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

  const renderAllTableRow = () => {
    return rows.map((row, index) => (
      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700" key={index}>
        {Object.values(row).map((value) => (
          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" key={value}>
            {value}
          </td>
        ))}
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
                  {headers &&
                    headers.map((header) => (
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        {header}
                      </th>
                    ))}
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 w-40"
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
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
      {rowsPerPage && (
        <Pagination
          totalItems={rows.length}
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          handleSetCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}

export default Table;
