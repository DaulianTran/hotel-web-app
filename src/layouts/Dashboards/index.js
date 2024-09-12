import Nav from '@/components/Nav';
import { faUser, faChartLine, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Dashboards() {
  const [active, setAcive] = useState(0);

  // const handleClick = () => {};

  return (
    <div className="bg-white w-2/12 overflow-auto">
      <ul>
        <Nav
          icon={faUser}
          name="Customer"
          href="/Customer-List"
          onClick={() => {
            setAcive(1);
          }}
          isActive={active === 1}
        />
        <Nav
          icon={faUser}
          name="Staff"
          href="/Staff-List"
          onClick={() => {
            setAcive(2);
          }}
          isActive={active === 2}
        />
        <Nav icon={faIdCard} name="Working" href="/working" />
        <Nav icon={faChartLine} name="statistical" href="/statistical" />
      </ul>
    </div>
  );
}

export default Dashboards;
