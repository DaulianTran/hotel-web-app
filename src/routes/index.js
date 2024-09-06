// Pages
import Admin from '@/pages/Admin';
import Customer from '@/pages/Customer';

const publicRoutes = [
  { path: '/', component: Admin },
  { path: '/customer', component: Customer },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
