import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '../Menu';
import './style.css';
import { Profile } from '../Profile/ProfileInfos';
import { Skills } from '../Skills';
import { Objectives } from '../Objectives';
import { Experience } from '../Xp';
import { useState } from 'react';

export const CardInfo = () => {
  const [fullMenu, setFullMenu] = useState(window.innerWidth >= 520);
  const [responsiveMenu, setResponsiveMenu] = useState(
    window.innerWidth <= 520,
  );

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 520) {
      setFullMenu(false);
      setResponsiveMenu(true);
    } else {
      setFullMenu(true);
      setResponsiveMenu(false);
    }
  });

  return (
    <>
      <h2 className="name-profile">Schubert Araujo</h2>
      <BrowserRouter>
        {fullMenu && (
          <Menu classMenu={''} subMenu={'menu'} isResponsive={false} />
        )}
        {responsiveMenu && (
          <Menu
            classMenu={'menu-and-submenu'}
            subMenu={'sub-menu'}
            isResponsive={true}
          />
        )}
        <div className="profile-infos">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Objectives" element={<Objectives />} />
            <Route path="/Xp" element={<Experience />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
