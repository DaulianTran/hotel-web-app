import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ icon, name, href, color }) {
  const [iconColor, setIconColor] = useState('white');
  const [textColor, setTextColor] = useState('text-gray-300');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      class={`mt-3 ${textColor} ${isHovered ? 'bg-gray-500' : ''}`}
      onMouseEnter={() => {
        setIconColor('#2b80ff');
        setIsHovered(true);
        setTextColor('text-white');
      }}
      onMouseLeave={() => {
        setIconColor(color);
        setIsHovered(false);
        setTextColor('text-gray-300');
      }}
    >
      <Link class="flex flex-row gap-6 items-center py-2 pl-10" to={href}>
        <FontAwesomeIcon icon={icon} color={iconColor} />
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default Nav;
