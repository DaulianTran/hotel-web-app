import * as React from 'react';
import Dashboards from '../Dashboards';
import Header from '../Header';

function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col h-screen	">
      <Header />
      <div className="flex flex-row flex-1">
        <Dashboards />
        <div className="w-10/12 px-4 py-2 bg-slate-100">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
