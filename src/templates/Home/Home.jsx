// import { PortifolioCard } from '../../components/PortifolioCard';
import { Portifolios } from '../../components/Portifolios';
import { PhotoProfile } from '../../components/profileCard/PhotoProfile';
import { ProfileInfoBot } from '../../components/profileCard/CardProfileBottom';
import { ProfileInfoTop } from '../../components/profileCard/CardProfileTop';
import './style.css';

export function Home() {
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
