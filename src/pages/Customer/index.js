import { useState } from 'react';
import Button from '@/components/Button';
import Search from '@/components/Search';
import Table from '@/components/Table';
import Location from '@/components/Location';

function Customer() {
  const [currentPage, setCurrentPage] = useState(1);
  const AttrToNameHeader = { id: 'ID', name: 'Name', email: 'Email' };

  const [showing, setShowing] = useState(3);
  const handleShowing = (event) => {
    setShowing(Number(event.target.value));
  };

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
  return (
    <div>
      <div class="flex justify-between">
        <Location />
        <Button name="Add New Customer" href="/add" />
      </div>
      <div class="flex flex-col bg-white rounded-lg p-4 mt-5">
        <div class="flex flex-row justify-between items-baseline mb-3">
          <div>
            <label>Showing </label>
            <select
              value={showing}
              onChange={handleShowing}
              class="border-none ml-2 rounded-md px-4 bg-slate-100 focus:outline-none focus:ring-0"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </select>
          </div>
          <Search placeholder={'Search Customer'} />
        </div>
        <div>
          <Table
            AttrToNameHeader={AttrToNameHeader}
            rows={rows}
            rowsPerPage={showing}
            currentPage={currentPage}
            onChangePage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Customer;
