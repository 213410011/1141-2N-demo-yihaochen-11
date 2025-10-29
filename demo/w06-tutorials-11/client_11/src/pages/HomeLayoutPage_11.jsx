import { Outlet } from 'react-router-dom';
import Navbar_11 from '../components/Navbar_11';

const HomeLayoutPage_11 = () => {
  return (
    <>
        <Navbar_11 />
        <Outlet /> 
    </>
  );
};

export default HomeLayoutPage_11;
