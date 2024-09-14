import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ icon, name, href, color, isActive, number, isAdmin }) {
  const [iconColor, setIconColor] = useState(color || '');
  const [textColor, setTextColor] = useState('text-stone-600');
  const [isHovered, setIsHovered] = useState(false);

  if (isAdmin) {
    return (
      <div className={`w-3/12 min-h-20 ${color} flex flex-col rounded-sm p-3`}>
        <label className="font-normal text-sm ">{name}</label>
        <span className="font-semibold text-4xl	mt-2">{number}</span>
      </div>
    );
  }

  return (
    <li
      className={`mt-3 ${isHovered ? 'bg-blue-100' : ''} ${isActive ? 'text-blue-600' : textColor}`}
      onMouseEnter={() => {
        setIconColor('#2563eb');
        setIsHovered(true);
        setTextColor('text-blue-600');
      }}
      onMouseLeave={() => {
        setIconColor(color || '');
        setIsHovered(false);
        setTextColor('text-stone-600');
      }}
    >
      <Link className="flex flex-row gap-6 items-center py-2 pl-10" to={href}>
        <FontAwesomeIcon icon={icon} color={iconColor} />
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default Nav;
