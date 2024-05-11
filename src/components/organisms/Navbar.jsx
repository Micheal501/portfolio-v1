import NavDesktop from '../molecules/NavDesktop';
import NavMobile from '../molecules/NavMobile';

const Navbar = () => {
  return (
    <>
      {/* Fixed Navigation */}
      <div className='pt-2 w-full'>
        {/* Desktop Navigation */}
        <div className='hidden md:flex justify-around items-center pt-12 text-Text'>
          <NavDesktop />
        </div>

        {/* Mobile Navigation */}
        <div className='md:hidden'>
          <NavMobile />
        </div>
      </div>

      {/* Placeholder for the fixed navigation to prevent content overlap */}
      <div className='md:flex md:invisible h-20'></div>
    </>
  );
};

export default Navbar;
