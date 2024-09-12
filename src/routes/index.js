// Pages
import Admin from '@/pages/Admin';
import Customer from '@/pages/Customer';

const publicRoutes = [
  { path: '/', component: Admin },
  { path: '/Customer-List', component: Customer },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
