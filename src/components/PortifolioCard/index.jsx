import './style.css';
import PropT from 'prop-types';
import { LanguageAndImgs } from '../LanguagesAndImgs';

export const PortifolioCard = ({ repos }) => {
  const handleLanguagesOrTechs = (topics, languages) => {
    let languagesOrTechs;
    languagesOrTechs =
      topics.indexOf(languages.toLowerCase()) !== -1 ? languages : '';
    return languagesOrTechs;
  };

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
            <LanguageAndImgs
              languages={handleLanguagesOrTechs(
                repository.topics,
                'javascript',
              )}
            />
            <LanguageAndImgs
              languagesImgs={handleLanguagesOrTechs(repository.topics, 'html5')}
            />
            <LanguageAndImgs
              languagesImgs={handleLanguagesOrTechs(repository.topics, 'css3')}
            />
            <LanguageAndImgs
              languagesImgs={handleLanguagesOrTechs(repository.topics, 'react')}
            />
          </div>
        </div>
      ))}
    </>
  );
};

PortifolioCard.propTypes = {
  repos: PropT.array,
};
