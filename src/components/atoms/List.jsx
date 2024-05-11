/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
const List = ({ navLink, navTitle }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(navLink === location.pathname);
  }, [location.pathname, navLink]);

  return (
    <>
      <li className='md:flex list-none'>
        <Link
          to={navLink}
          className={`font-semibold w-[75px] text-[16px] text-Text hover:underline ${
            isActive ? 'underline' : ''
          }`}
        >
          {navTitle}
        </Link>
      </li>
    </>
  );
};

export default List;
