import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RowUpdateWithAPI() {
  return (
    <div className="w-6 h-6 text-center bg-red-100 rounded-sm cursor-pointer">
      <FontAwesomeIcon icon={faTrashCan} style={{ color: '#fc2c1d' }} size="sm" />
    </div>
  );
}

RowUpdateWithAPI.displayName = 'RowUpdateWithAPI';
export default RowUpdateWithAPI;
