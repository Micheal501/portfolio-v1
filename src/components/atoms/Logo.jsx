/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const Logo = ({ logo }) => {
  return (
    <>
      <h1 className='font-bold font-primary w-[195px] text-[28px] text-Text cursor-pointer'>
        <Link to='/'>{logo}</Link>
      </h1>
    </>
  );
};

export default Logo;
