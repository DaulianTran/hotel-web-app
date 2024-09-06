import { Link } from 'react-router-dom';

function Button({ name, href }) {
  return (
    <Link
      class="min-h-8 max-h-10 min-w-20 max-w-36 rounded-lg bg-cyan-500 flex justify-center uppercase text-white items-center cursor-pointer px-3.5"
      to={href}
    >
      {name}
    </Link>
  );
}

export default Button;
