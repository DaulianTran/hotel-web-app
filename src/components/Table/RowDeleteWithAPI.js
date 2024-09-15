import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RowDeleteWithAPI() {
  return (
    <div className="w-6 h-6 text-center rounded-sm cursor-pointer bg-sky-100">
      <FontAwesomeIcon icon={faScrewdriverWrench} style={{ color: '#74C0FC' }} size="sm" />
    </div>
  );
}

RowDeleteWithAPI.displayName = 'RowDeleteWithAPI';

export default RowDeleteWithAPI;
