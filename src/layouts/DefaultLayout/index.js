import * as React from 'react';
import Dashboards from '../Dashboards';
import Header from '../Header';

function DefaultLayout({ children }) {
  return (
    <div class="flex flex-col h-screen	">
      <Header />
      <div>day la Header</div>

      <div class="flex flex-row">
        <Dashboards />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
