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
        <div key={repository.id} className="card">
          <div className="left-card">
            <img
              src={`https://raw.githubusercontent.com/${repository.full_name}/main/preview.png`}
            />
          </div>
          <div className="right-card">
            <p>{repository.description}</p>
            <p>Techs: </p>
            <div className="techs-boxes">
              {repository.topics.indexOf('javascript') !== -1 && <Javascript />}
              {repository.topics.indexOf('html5') !== -1 && <Html />}
              {repository.topics.indexOf('css3') !== -1 && <Css />}
              {repository.topics.indexOf('react') !== -1 && <React />}
              {repository.topics.indexOf('json') !== -1 && <Json />}
              {repository.topics.indexOf('webstorage') !== -1 && <WebStore />}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

PortifolioCard.propTypes = {
  repos: PropT.array,
};
