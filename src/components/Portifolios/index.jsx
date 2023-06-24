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
      setrepositoryState(handleShowRepositories(repos));
    };
    fecthRepository();
  }, []);
  //Para mostar apenas os repositorios que eu quero
  //Estou usando os topicos do gitHub com o topico "show"
  const handleShowRepositories = (repos) => {
    let filteredRepository = [];
    for (const repo of repos) {
      if (repo.topics.indexOf('shows') != -1) {
        filteredRepository.push(repo);
      }
    }
    return filteredRepository;
  };
  return (
    <div className="container">
      <PortifolioCard repos={repositoryState} />
    </div>
  );
};
