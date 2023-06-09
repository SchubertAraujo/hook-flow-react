import { useEffect, useState } from 'react';
import './style.css';
import { PortifolioCard } from '../PortifolioCard';

const loadRepository = async () => {
  const repository = await fetch(
    'https://api.github.com/users/schubertaraujo/repos',
  );
  const repositoryJson = await repository.json();
  return repositoryJson;
};

export const Portifolios = () => {
  const [repositoryState, setrepositoryState] = useState([]);

  useEffect(() => {
    const fecthRepository = async () => {
      const repos = await loadRepository();
      setrepositoryState(repos);
    };
    fecthRepository();
  }, []);

  return (
    <div className="container">
      <PortifolioCard repos={repositoryState} />
    </div>
  );
};
