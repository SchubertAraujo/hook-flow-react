import { PhotoProfile } from '../../components/profile-info/PhotoProfile';
import { ProfileInfoBot } from '../../components/profile-info/ProfileInfosBot';
import { ProfileInfoTop } from '../../components/profile-info/ProfileInfosTop';
import './style.css';

export const Home = () => {
  return (
    <div className="conteiner">
      <PhotoProfile />
      <ProfileInfoTop />
      <ProfileInfoBot />
      <img src={require('./schubert.jpg
      ')} />
    </div>
  );
};
