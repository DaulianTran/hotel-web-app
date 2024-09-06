import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Search({ placeholder }) {
  return (
    <div class="flex px-4 py-3 rounded-lg border-2 shadow-xl overflow-hidden max-w-md mx-auto font-[sans-serif] h-10">
      <input placeholder={placeholder} class="w-full focus:outline-none bg-transparent text-gray-600 text-sm" />
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#a3a199' }} class="cursor-pointer" />
    </div>
  );
}

export default Search;
