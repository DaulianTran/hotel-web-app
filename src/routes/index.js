// Pages
import Admin from '@/pages/Admin';
import Customer from '@/pages/Customer';
import Staff from '@/pages/Staff';

const publicRoutes = [
  { path: '/', component: Admin },
  { path: '/Customer-List', component: Customer },
  { path: '/Staff-List', component: Staff },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
