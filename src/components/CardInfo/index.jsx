import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '../Menu';
import './style.css';
import { Profile } from '../Profile';
import { Skills } from '../Skills';
export const CardInfo = () => {
  return (
    <>
      <h2 className="name-profile">Schubert Araujo</h2>
      <BrowserRouter>
        <Menu />
        <div className="profile-infos">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/Skills" element={<Skills />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
