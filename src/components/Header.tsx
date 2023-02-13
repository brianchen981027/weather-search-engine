import React from 'react';

import Image from 'next/image';

import WeatherLogo from '@/Images/WeatherLogo.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 h-fit bg-transparent px-[5%] py-[5%] md:px-[10%]">
      <div className="flex items-center h-10 md:h-fit cursor-pointer">
        <Image
          alt="Brian's Blog"
          className="mx-auto"
          fill
          objectFit="contain"
          src={WeatherLogo}
        />
      </div>
    </header>
  );
};

export default Header;
