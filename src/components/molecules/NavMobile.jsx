import { slide as Menu } from 'react-burger-menu';
import Logo from '../atoms/Logo';
import List from '../atoms/List';

const NavMobile = () => {
  return (
    <>
      <Menu left>
        <Logo logo='Micheal Owen' />
        <List
          navTitle='Home'
          navLink='/'
        />
        <List
          navTitle='About'
          navLink='/about'
        />
        <List
          navTitle='Contact'
          navLink='https://wa.me/62895376866611/'
        />
        <List
          navTitle='Portfolio'
          navLink='/portfolio'
        />
      </Menu>
    </>
  );
};

export default NavMobile;
