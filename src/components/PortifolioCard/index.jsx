import './style.css';
import PropT from 'prop-types';

export const PortifolioCard = ({ repos }) => {
  return (
    <>
      {repos.map((repository) => (
        <div key={repository.id} className="card">
          <div className="left-card">
            <>FOTO</>
          </div>
          <div className="right-card">
            <h2>{repository.description}</h2>
            <p>Techs:</p>
          </div>
        </div>
      ))}
    </>
  );
};

PortifolioCard.propTypes = {
  repos: PropT.node,
};
