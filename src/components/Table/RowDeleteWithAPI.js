import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function RowDeleteWithAPI({ onClick }) {
  return (
    <div className="w-6 h-6 text-center bg-red-100 rounded-sm cursor-pointer" onClick={onClick}>
      <FontAwesomeIcon icon={faTrashCan} style={{ color: '#fc2c1d' }} size="sm" />
    </div>
  );
}

RowDeleteWithAPI.displayName = 'RowDeleteWithAPI';

export default RowDeleteWithAPI;
