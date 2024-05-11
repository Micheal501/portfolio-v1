import Logo from '../atoms/Logo';
import List from '../atoms/List';
import Button from '../atoms/Button';

const NavDesktop = () => {
  return (
    <>
      <div className='flex'>
        <Logo logo='Micheal Owen' />
      </div>
      <div className='flex gap-6 list-none'>
        <List
          navTitle='Home'
          navLink='/'
        />
        <List
          navTitle='About'
          navLink='/about'
        />
        <List
          navTitle='Portfolio'
          navLink='/portfolio'
        />
      </div>
      <Button
        titleButton='Contact Me'
        buttonLink='https://wa.me/62895376866611/'
      />
    </>
  );
};

export default NavDesktop;
