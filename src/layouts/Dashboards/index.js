import Nav from '@/components/Nav';
import { faUser, faChartLine, faIdCard } from '@fortawesome/free-solid-svg-icons';

function Dashboards({ icon, name }) {
  return (
    <div class="bg-[#083344] w-2/12 overflow-auto">
      <ul>
        <Nav icon={faUser} name="Customer" href="/Customer-List" />
        <Nav icon={faUser} name="Staff" href="/staff" />
        <Nav icon={faIdCard} name="Working" href="/working" />
        <Nav icon={faChartLine} name="statistical" href="/statistical" />
      </ul>
    </div>
  );
}

export default Dashboards;
