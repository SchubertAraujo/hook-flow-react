import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from '../Menu';
import './style.css';
import { Profile } from '../Profile/ProfileInfos';
import { Skills } from '../Skills';
//import { Xp } from '../Experience';
import { Objectives } from '../Objectives';
import { Experience } from '../Xp';
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
            <Route path="/Objectives" element={<Objectives />} />
            <Route path="/Xp" element={<Experience />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
