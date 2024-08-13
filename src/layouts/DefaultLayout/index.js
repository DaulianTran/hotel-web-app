import * as React from 'react';

function DefaultLayout({ children }) {
  return (
    <div>
      <div>day la Header</div>
      <div>day la dashboards</div>
      <div>day la main content {children}</div>
    </div>
  );
}

export default DefaultLayout;
