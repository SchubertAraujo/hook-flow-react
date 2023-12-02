import { Link } from 'react-router-dom';
import profile from '../../imgs/man.png';
import skills from '../../imgs/skills.png';
import experience from '../../imgs/xp.png';
import objectives from '../../imgs/objectives.png';
import './style.css';
import { IconsAndDescriptions } from '../IconsAndDescriptions';

export const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to={'/'}>
            <IconsAndDescriptions
              iconImg={profile}
              description={'Perfil'}
              className={'menu-imgs'}
            />
          </Link>
        </li>
        <li>
          <Link to={'/Skills'}>
            <IconsAndDescriptions
              iconImg={skills}
              description={'Conhecimento'}
              className={'menu-imgs'}
            />
          </Link>
        </li>
        <li>
          <Link to={'/Objectives'}>
            <IconsAndDescriptions
              iconImg={objectives}
              description={'Objetivos'}
              className={'menu-imgs'}
            />
          </Link>
        </li>
        <li>
          <Link to={'/Xp'}>
            <IconsAndDescriptions
              iconImg={experience}
              description={'Experiência'}
              className={'menu-imgs'}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
