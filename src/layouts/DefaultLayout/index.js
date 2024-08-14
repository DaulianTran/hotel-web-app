import * as React from 'react';
import Dashboards from '../Dashboards';

function DefaultLayout({ children }) {
  return (
    <div>
      <div>day la Header</div>

      <div class="flex flex-row">
        <Dashboards />
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
