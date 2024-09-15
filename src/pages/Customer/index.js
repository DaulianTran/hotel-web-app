import { useEffect, useState } from 'react';
import Button from '@/components/Button';
import Search from '@/components/Search';
import Table from '@/components/Table';
import Location from '@/components/Location';
import { useLocation } from 'react-router-dom';
import Dialog from '@/components/Dialog';
import DialogBody from '@/components/Dialog/DialogBody';
import DeleteCustomerDialog from './DeleteCustomerDialog';
import { faScrewdriverWrench, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RowUpdateWithAPI from '@/components/Table/RowUpdateWithAPI';
import RowDeleteWithAPI from '@/components/Table/RowDeleteWithAPI';

function Customer() {
  const [openState, setOpenState] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const AttrToNameHeader = { id: 'ID', name: 'Name', email: 'Email' };

  const [search, setSearch] = useState('');

  const [showing, setShowing] = useState(3);
  const handleShowing = (event) => {
    setShowing(Number(event.target.value));
  };

  const location = useLocation();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const rows = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
    },
  ];

  const [filteredData, setFilteredData] = useState(rows);

  const handleSeach = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    const filtered = rows.filter((item) => item.name?.toLowerCase().includes(search.toLowerCase()));
    setFilteredData(filtered);
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="flex justify-between">
        <Location />
        <Button name="Add New Customer" href={`${location.pathname}/Add-Customer`} />
        <button
          className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
          type="button"
          onClick={() => setOpenState(true)}
        >
          Open regular modal
        </button>
        <DeleteCustomerDialog openState={openState} setOpenState={setOpenState} selectedCustomer={selectedCustomer} />
      </div>
      <div className="flex flex-col p-4 mt-5 bg-white rounded-lg">
        <div className="flex flex-row items-baseline justify-between mb-3">
          <div>
            <label>Showing </label>
            <select
              value={showing}
              onChange={handleShowing}
              className="px-4 ml-2 border-none rounded-md bg-slate-100 focus:outline-none focus:ring-0"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
          <Search placeholder={'Search Customer'} onSearchChange={handleSeach} />
        </div>
        <div>
          <Table
            AttrToNameHeader={AttrToNameHeader}
            rows={filteredData}
            rowsPerPage={showing}
            currentPage={currentPage}
            onChangePage={setCurrentPage}
          >
            <RowUpdateWithAPI />
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Customer;
