import Button from '@/components/Button';
import Table from '@/components/Table';
function Customer() {
  const headers = ['#', 'Name', 'City', 'Phone', 'Actions'];
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
      day la trang customer
      <Button name="add" href="/add" />
      <Table headers={headers} rows={rows} rowsPerPage={2} />
    </div>
  );
}

export default Customer;
