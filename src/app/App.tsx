import 'app/styles/index.scss';
import { useThemeContext } from 'app/providers/ThemeProvider';
import { RouterPages } from 'app/providers/routing';
import { NavBar } from 'widgets/Navbar';
import { ClassNames } from 'shared/lib/ClassNames';
import { SideBar } from 'widgets/SideBar';
import React, { Suspense } from 'react';

export function App() {
  // const { theme } = useThemeContext();
  // const classApp = ClassNames('app', {}, [theme]);
  return (
    <div className="classApp">
      <Suspense fallback="">
        <SideBar />
        <div className="content">
          <NavBar />
          <div className="wrapper-pages">
            <RouterPages />
          </div>
        </div>
      </Suspense>
    </div>
  );
}
