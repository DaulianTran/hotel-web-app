import * as React from 'react';
import Header from '../Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>day la Header</div>
      <div>day la dashboards</div>
      <div>day la main content {children}</div>
    </div>
  );
}

export default DefaultLayout;
