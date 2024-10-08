import { Link } from 'react-router-dom';

function Button({ name, href }) {
  return (
    <Link
      className="min-h-12 max-h-10 min-w-20 rounded-lg bg-sky-500 flex justify-center uppercase text-white items-center cursor-pointer px-3.5"
      to={href}
    >
      {name}
    </Link>
  );
}

export default Button;
