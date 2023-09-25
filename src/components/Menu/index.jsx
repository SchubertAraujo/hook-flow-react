import { Link } from 'react-router-dom';
import './style.css';
import { LanguageAndImgs } from '../LanguagesAndImgs';

export const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <button>
            <Link to={'/'}>
              <LanguageAndImgs languagesImgs={'profile'} />
            </Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={'/Skills'}>Conhecimento</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={'/objective'}>Objetivos</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={'/Experiênce'}>Experiência</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};
