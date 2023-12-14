import { Link } from 'react-router-dom';
import profile from '../../imgs/man.png';
import skills from '../../imgs/skills.png';
import experience from '../../imgs/xp.png';
import objectives from '../../imgs/objectives.png';
import menu from '../../imgs/menu.png';
import './style.css';
import { IconsAndDescriptions } from '../IconsAndDescriptions';
import propT from 'prop-types';
import { useEffect, useState } from 'react';

export const Menu = ({ classMenu, subMenu, isResponsive }) => {
  const [menuResponsive, setMenuResponsive] = useState(isResponsive);
  const [showCompleteMenu, setShowCompleteMenu] = useState(!menuResponsive);

  const clickMenu = () => {
    if (classMenu === 'menu-and-submenu')
      showCompleteMenu ? setShowCompleteMenu(false) : setShowCompleteMenu(true);
  };

  useEffect(() => {
    setMenuResponsive(isResponsive);
  }, [isResponsive]);

  return (
    <nav>
      <ul className={classMenu}>
        <li onClick={clickMenu}>
          {menuResponsive && (
            <IconsAndDescriptions
              iconImg={menu}
              description={'Menu'}
              className={'menu-imgs'}
            />
          )}
        </li>
        {showCompleteMenu && (
          <div className={subMenu} onClick={clickMenu}>
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
          </div>
        )}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  classMenu: propT.string,
  subMenu: propT.string,
  isResponsive: propT.bool,
};
