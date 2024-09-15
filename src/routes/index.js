// Pages
import Admin from '@/pages/Admin';
import Customer from '@/pages/Customer';
import AddCustomer from '@/pages/Customer/AddCustomer';
import Staff from '@/pages/Staff';
import Login from '@/pages/Login';

const publicRoutes = [
  { path: '/', component: Admin },
  { path: '/Customer-List', component: Customer },
  { path: '/Customer-List/Add-Customer', component: AddCustomer },
  { path: '/Staff-List', component: Staff },
  { path: '/login', component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
