import { useState } from 'react';
import Button from '@/components/Button';
import Search from '@/components/Search';
import Table from '@/components/Table';
function Customer() {
  const [currentPage, setCurrentPage] = useState(1);
  const headers = ['#', 'Name', 'City', 'Phone'];
  const rows = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      city: 'Hà Nội',
      phone: '0123456789',
    },
    {
      id: 2,
      name: 'Trần Thị B',
      city: 'Hồ Chí Minh',
      phone: '0987654321',
    },
    {
      id: 3,
      name: 'Lê Văn C',
      city: 'Đà Nẵng',
      phone: '0345678912',
    },
    {
      id: 4,
      name: 'Lê Văn C',
      city: 'Đà Nẵng',
      phone: '0345678912',
    },
    {
      id: 5,
      name: 'Lê Văn C',
      city: 'Đà Nẵng',
      phone: '0345678912',
    },
    {
      id: 6,
      name: 'Lê Văn C',
      city: 'Đà Nẵng',
      phone: '0345678912',
    },
    {
      id: 7,
      name: 'Lê Văn C',
      city: 'Đà Nẵng',
      phone: '0345678912',
    },
  ];
  return (
    <div>
      <div class="flex flex-row">
        <Button name="add" href="/add" />
        <Search placeholder={'Search Customer'} />
      </div>
      <Table headers={headers} rows={rows} rowsPerPage={3} currentPage={currentPage} onChangePage={setCurrentPage} />
    </div>
  );
}

export default Customer;
