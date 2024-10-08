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

import Pagination from './Pagination';
import { useState, Children, isValidElement, cloneElement } from 'react';
import RowDeleteWithAPI from './RowDeleteWithAPI';
import RowUpdateWithAPI from './RowUpdateWithAPI';

function Table({
  AttrToNameHeader,
  rows,
  actions,
  rowsPerPage,
  currentPage: externalCurrentPage,
  onChangePage: externalSetCurrentPage,
  isAdmin,
  children,
}) {
  const [internalCurrentPage, setInternalCurrentPage] = useState(1);

  // if (isAdmin) {
  //   return <div>acb</div>;
  // }
  //Internal, external are used to cover case "transfer state from outside or not"

  const currentPage = externalCurrentPage !== undefined ? externalCurrentPage : internalCurrentPage;
  const onChangePage = externalSetCurrentPage !== undefined ? externalSetCurrentPage : setInternalCurrentPage;

  const headerKeys = Object.keys(AttrToNameHeader);

  //check if action is declared, then update the variable, can add new actions for future update.
  // If update, add new attribute to actionToggle and another else case if to forEach loop
  const actionToggle = { RowDeleteWithAPI: false, RowUpdateWithAPI: false };
  const componentsMap = {
    RowDeleteWithAPI: RowDeleteWithAPI,
    RowUpdateWithAPI: RowUpdateWithAPI,
  };

  Children.toArray(children).forEach((child) => {
    if (isValidElement(child)) {
      if (child.type.displayName === 'RowDeleteWithAPI') {
        actionToggle.RowDeleteWithAPI = true;
      } else if (child.type.displayName === 'RowUpdateWithAPI') {
        actionToggle.RowUpdateWithAPI = true;
      }
    }
  });
  const hasAction = Object.values(actionToggle).some((value) => value === true);

  // table cell template
  const tableCell = (value) => {
    return (
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white" key={value}>
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

      hasAction &&
        rowCells.push(
          <td className="flex flex-row gap-2 px-6 py-4 min-h-14">
            {Children.map(children, (child) => {
              if (isValidElement(child)) {
                // Kiểm tra mỗi actionToggle
                return Object.keys(actionToggle).map((action) => {
                  if (actionToggle[action] && child.type.displayName === action) {
                    return cloneElement(child, { row });
                  }
                  return null;
                });
              }
              return null;
            }).flat()}
          </td>,
        );

      // AttrToNameHeader.map((key) => rowCells.push(tableCell(row[key])));

      elements.push(
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={i}>
          {rowCells}
        </tr>,
      );

      // ĐANG LỖI VỚI TÌM KIẾM

      // const emptyRows = rowsPerPage - (endIndex - startIndex);
      // for (let i = 0; i < emptyRows; i++) {
      //   elements.push(
      //     <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={i}>
      //       <td className="flex flex-row gap-2 px-6 py-4 min-h-14"></td>
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
        {Object.keys(actionToggle).map((action) => {
          if (actionToggle[action]) {
            const Component = componentsMap[action];
            cloneElement(<Component />, { row });
          }
        })}
      </tr>
    ));
  };

  const renderTableHeader = (title, index) => {
    return (
      <th
        scope="col"
        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400"
        key={index}
      >
        {title}
      </th>
    );
  };

  return (
    <>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden ">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  {AttrToNameHeader && headerKeys.map((key, index) => renderTableHeader(AttrToNameHeader[key], index))}
                  {hasAction && renderTableHeader('Action', 'Action')}
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
