/* eslint-disable react-hooks/rules-of-hooks */
import Nav from '@/components/Nav';
import Table from '@/components/Table';
import { Tab, Tabs } from '@/components/Tabs';
import { useState } from 'react';

export const AttrToNameHeader = {
  id: 'ID',
  code_booking: 'Code booking',
  name: 'Name',
  kinds_of_room: 'Kinds Of Room',
  number_of_room: 'Number of Room',
  arrival_date: 'Arrival Date',
  departure_date: 'Departure date',
};

function ArrivalTables() {
  const [currentPage, setCurrentPage] = useState(1);

  const rows = [
    {
      id: 1,
      code_booking: 'CB12345',
      name: 'Leanne Graham',
      kinds_of_room: 'Standard Room',
      number_of_room: '1012',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
    {
      id: 2,
      code_booking: 'CB12234',
      name: 'Ervin Howell',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
    {
      id: 3,
      code_booking: 'CB12234',
      name: 'Ervin Howell',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
    {
      id: 4,
      code_booking: 'CB12234',
      name: 'Ervin Howell',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
    {
      id: 5,
      code_booking: 'CB12234',
      name: 'Ervin Howell',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
  ];

  return (
    <Table
      AttrToNameHeader={AttrToNameHeader}
      rows={rows}
      rowsPerPage={3}
      currentPage={currentPage}
      onChangePage={setCurrentPage}
      isAdmin
    />
  );
}

function DepartureTables() {
  const [currentPage, setCurrentPage] = useState(1);

  const rows = [
    {
      id: 1,
      code_booking: 'CB12345',
      name: 'Kylian Mbappe',
      kinds_of_room: 'Standard Room',
      number_of_room: '1023',
      arrival_date: '10/12/2023',
      departure_date: '12/12/2023',
    },
    {
      id: 2,
      code_booking: 'CB34234',
      name: 'Critiano Ronaldo',
      kinds_of_room: 'Superior Room',
      number_of_room: '3213',
      arrival_date: '10/12/2023',
      departure_date: '12/12/2023',
    },
    {
      id: 3,
      code_booking: 'CB16544',
      name: 'Lionel Messi',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
    {
      id: 4,
      code_booking: 'CB12234',
      name: 'Ervin Howell',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
    {
      id: 5,
      code_booking: 'CB12234',
      name: 'Ervin Howell',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
  ];

  return (
    <Table
      AttrToNameHeader={AttrToNameHeader}
      rows={rows}
      rowsPerPage={3}
      currentPage={currentPage}
      onChangePage={setCurrentPage}
      isAdmin
    />
  );
}

function CurrentTables() {
  const [currentPage, setCurrentPage] = useState(1);

  const rows = [
    {
      id: 1,
      code_booking: 'CB12345',
      name: 'Nguyễn Công Trí',
      kinds_of_room: 'Standard Room',
      number_of_room: '1012',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
    {
      id: 2,
      code_booking: 'CB12234',
      name: 'Lê Thị Nhàn',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
    {
      id: 3,
      code_booking: 'CB12234',
      name: 'Tần Thủy Hoàng',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
    {
      id: 4,
      code_booking: 'CB12234',
      name: 'Ervin Howell',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
    {
      id: 5,
      code_booking: 'CB12234',
      name: 'Ervin Howell',
      kinds_of_room: 'Superior Room',
      number_of_room: '2011',
      arrival_date: '10/12/2012',
      departure_date: '12/12/2012',
    },
  ];

  return (
    <Table
      AttrToNameHeader={AttrToNameHeader}
      rows={rows}
      rowsPerPage={3}
      currentPage={currentPage}
      onChangePage={setCurrentPage}
      isAdmin
    />
  );
}

function Admin() {
  return (
    <div>
      <div className="flex justify-between mt-4 gap-5">
        <Nav name="Phòng đến trong ngày" number="0" isAdmin color="bg-sky-100" />
        <Nav name="Phòng đi trong ngày" number="12" isAdmin color="bg-violet-100" />
        <Nav name="Phòng đang sử dụng" number="10" isAdmin color="bg-emerald-100" />
        <Nav name="Khách đang ở" number="24" isAdmin color="bg-orange-100" />
      </div>
      <div className="mt-4 p-2 rounded-sm bg-white ">
        <Tabs>
          <Tab component={ArrivalTables} active>
            Phòng đến trong ngày
          </Tab>
          <Tab component={DepartureTables}>Phòng đi trong ngày</Tab>
          <Tab component={CurrentTables}>Phòng đang sử dụng</Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Admin;
