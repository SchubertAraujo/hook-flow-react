import { Children, useEffect, useState } from 'react';
import { PhotoProfile } from '../../components/profileCard/PhotoProfile';
import { ProfileInfoBot } from '../../components/profileCard/ProfileCardBottom';
import { ProfileInfoTop } from '../../components/profileCard/ProfileCardTop';
import './style.css';
import { Portifolios, PortifoliosProvider } from '../../components/PortifoliosProvider';


export const Home = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchReps = async () => {
      c
      setRepos(repsResponse);
    };
    fetchReps();
  }, []);

  return (
    <div className="conteiner">
      <PhotoProfile />
      <ProfileInfoTop />
      <ProfileInfoBot />
      <PortifoliosProvider />
    </div>
  );
};
