import { Link } from 'react-router-dom';
import './style.css';

export const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <Link to={'/'}>Profile</Link>
        </li>
        <li>
          <Link to={'/Skills'}>Conhecimento</Link>
        </li>
        <li>
          <Link to={'/objective'}>Objetivos</Link>
        </li>
        <li>
          <Link to={'/Experiênce'}>Experiência</Link>
        </li>
      </ul>
    </nav>
  );
};
