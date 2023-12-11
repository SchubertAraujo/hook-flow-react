// import { PortifolioCard } from '../../components/PortifolioCard';
import { Portifolios } from '../../components/Portifolios';
import { PhotoProfile } from '../../components/profileCard/PhotoProfile';
import { ProfileInfoBot } from '../../components/profileCard/CardProfileBottom';
import { ProfileInfoTop } from '../../components/profileCard/CardProfileTop';
import './style.css';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {
    document.title = 'Perfil Pessoal';

    return () => {
      document.title = 'React App';
    };
  }, []);

  return (
    <div>
      <div className="conteiner profile-card">
        <PhotoProfile />
        <ProfileInfoTop />
        <ProfileInfoBot />
      </div>
      <div className="conteiner">
        <Portifolios />
      </div>
    </div>
  );
}
