import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
export const authContext = createContext();

const Layout = () => {
  return (
    <div className='max-w-5xl mx-auto'>
      <authContext.Provider>
        <Outlet></Outlet>
      </authContext.Provider>

    </div>
  );
};

export default Layout;