import Button from '@/components/Button';
import Search from '@/components/Search';

function Customer() {
  return (
    <div>
      day la trang customer
      <div class="flex flex-row">
        <Button name="add" href="/add" />
        <Search placeholder="Search Customer" />
      </div>
    </div>
  );
}

export default Customer;
