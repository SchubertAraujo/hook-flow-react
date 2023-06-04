import { PortifolioCard } from '../../components/PortifolioCard';
import { PortifoliosProvider } from '../../components/Portifolios';
import { PhotoProfile } from '../../components/profileCard/PhotoProfile';
import { ProfileInfoBot } from '../../components/profileCard/ProfileCardBottom';
import { ProfileInfoTop } from '../../components/profileCard/ProfileCardTop';
import './style.css';

export const Home = () => {
  return (
    <div className="conteiner">
      <PhotoProfile />
      <ProfileInfoTop />
      <ProfileInfoBot />
      <PortifoliosProvider>
        <PortifolioCard />
        <h1>oi</h1>
      </PortifoliosProvider>
    </div>
  );
};
