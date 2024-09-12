import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search({ placeholder, onSearchChange }) {
  const handleSeach = (event) => {
    onSearchChange(event.target.value);
  };
  return (
    <div className="flex px-4 py-3 rounded-lg border-2 overflow-hidden max-w-md font-[sans-serif] h-10">
      <input
        placeholder={placeholder}
        onChange={handleSeach}
        className="w-full focus:outline-none bg-transparent text-gray-600 text-sm"
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#a3a199' }} className="cursor-pointer" />
    </div>
  );
}

export default Search;
