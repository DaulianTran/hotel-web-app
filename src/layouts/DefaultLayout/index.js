import * as React from 'react';
import Dashboards from '../Dashboards';
import Header from '../Header';

function DefaultLayout({ children }) {
  return (
    <div class="flex flex-col h-screen	">
      <Header />
      <div class="flex flex-row flex-1">
        <Dashboards />
        <div class="w-10/12">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
