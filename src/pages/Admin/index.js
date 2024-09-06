import * as React from 'react';
import Table from '../../components/Table';

function Admin() {
  const headers = ['#', 'Name', 'City', 'Phone'];
  const rows = [
    { id: 1, name: 'Nguyễn Văn A', city: 'Hà Nội', phone: '0123456789' },
    { id: 2, name: 'Trần Thị B', city: 'Hồ Chí Minh', phone: '0987654321' },
    { id: 3, name: 'Lê Văn C', city: 'Đà Nẵng', phone: '0345678912' },
  ];
  return (
    <>
      <Table headers={headers} rows={rows} />
    </>
  );
}

export default Admin;
