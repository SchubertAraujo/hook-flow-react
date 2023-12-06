import {
  Css,
  Html,
  Javascript,
  Json,
  React,
  WebStore,
} from '../IconsAndDescriptions/badgeTechs';
import './style.css';
import PropT from 'prop-types';

export const PortifolioCard = ({ repos }) => {
  return (
    <>
      {repos.map((repository) => (
        <a
          key={repository.id}
          href={`https://github.com/SchubertAraujo/${repository.name}`}
          target="_blank"
          rel="noreferrer"
        >
          {' '}
          <div className="card">
            <div className="left-card">
              <img
                src={`https://raw.githubusercontent.com/${repository.full_name}/main/preview.png`}
              />
            </div>
            <div className="right-card">
              <p>{repository.name.replace(/-/g, ' ')}</p>
              <p>{repository.description}</p>
              <p>Techs: </p>
              <div className="techs-boxes">
                {repository.topics.indexOf('javascript') !== -1 && (
                  <Javascript />
                )}
                {repository.topics.indexOf('html5') !== -1 && <Html />}
                {repository.topics.indexOf('css3') !== -1 && <Css />}
                {repository.topics.indexOf('react') !== -1 && <React />}
                {repository.topics.indexOf('json') !== -1 && <Json />}
                {repository.topics.indexOf('webstorage') !== -1 && <WebStore />}
              </div>
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

PortifolioCard.propTypes = {
  repos: PropT.array,
};
