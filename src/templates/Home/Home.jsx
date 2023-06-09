// import { PortifolioCard } from '../../components/PortifolioCard';
import { Portifolios } from '../../components/Portifolios';
import { PhotoProfile } from '../../components/profileCard/PhotoProfile';
import { ProfileInfoBot } from '../../components/profileCard/ProfileCardBottom';
import { ProfileInfoTop } from '../../components/profileCard/ProfileCardTop';
import './style.css';

export const Home = () => {
  return (
    <div>
      <div className="conteiner">
        <PhotoProfile />
        <ProfileInfoTop />
        <ProfileInfoBot />
      </div>
      <div className="conteiner2">
        <Portifolios />
      </div>
    </div>
  );
};
