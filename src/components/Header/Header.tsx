import React from 'react';

import CarouselPage from '../Main/Carousel';
import CardList from '../Main/CardList';
import HeaderNav from './HeaderNav';


const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(true);

  const handleModeToggle = (): void => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <HeaderNav isDarkMode={isDarkMode} onModeToggle={handleModeToggle} />
      <CarouselPage/>
      <CardList/>
    </>
  );
};

export default Header;
