import Nav from '@/components/Nav';

function Admin() {
  return (
    <div className="flex justify-between mt-4 gap-5">
      <Nav name="Phòng đến trong ngày" number="0" isAdmin color="bg-sky-100" />
      <Nav name="Phòng đi trong ngày" number="12" isAdmin color="bg-violet-100" />
      <Nav name="Phòng đang sử dụng" number="10" isAdmin color="bg-emerald-100" />
      <Nav name="Khách đang ở" number="24" isAdmin color="bg-orange-100" />
    </div>
  );
}

export default Admin;
