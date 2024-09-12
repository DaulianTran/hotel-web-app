import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Location() {
  const location = useLocation(); // Lấy URL hiện tại
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div>
      <h1 className="text-xl font-bold">{pathnames[pathnames.length - 1].replace(/-/g, ' ')}</h1>
      <nav>
        <Link to="/admin">Admin</Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={name}>
              {!isLast && (
                <span>
                  {' / '}
                  <Link to={routeTo} className="text-blue-600">
                    {name.replace(/-/g, ' ')}
                  </Link>
                </span>
              )}
              {isLast && (
                <span>
                  {' / '}
                  <span className="text-blue-600">{name.replace(/-/g, ' ')}</span>
                </span>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </div>
  );
}

export default Location;
