import './style.css';
import PropT from 'prop-types';
export const PortifolioCard = ({ repos }) => {
  return (
    <>
      {repos.map((repository) => (
        <div key={repository.id} className="card">
          <div className="left-card">
            <img src={require('./1.png')} />;
          </div>
          <div className="right-card">
            <h2>{repository.name}</h2>
          </div>
        </div>
      ))}
    </>
  );
};
PortifolioCard.propTypes = {
  repos: PropT.node,
};
