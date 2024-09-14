// Pages
import Admin from '@/pages/Admin';
import Customer from '@/pages/Customer';
import AddCustomer from '@/pages/Customer/AddCustomer';
import Staff from '@/pages/Staff';

const publicRoutes = [
  { path: '/', component: Admin },
  { path: '/Customer-List', component: Customer },
  { path: '/Customer-List/Add-Customer', component: AddCustomer },
  { path: '/Staff-List', component: Staff },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
