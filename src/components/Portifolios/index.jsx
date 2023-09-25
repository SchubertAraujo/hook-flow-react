import { useEffect, useState } from 'react';
import './style.css';
import { PortifolioCard } from '../PortifolioCard';
import { useCallback } from 'react';

const loadRepository = async () => {
  const repository = await fetch(
    'https://api.github.com/users/schubertaraujo/repos',
  );

  const repositoryJson = await repository.json();
  return repositoryJson;
};

export const Portifolios = () => {
  const [repository, setRepository] = useState([]);
  const [allRepository, setAllRepository] = useState([]);
  const [page, setPage] = useState(0);
  const [portifolioPerPage] = useState(2);

  const handleLoadPortifolios = useCallback(async (page, portifolioPerPage) => {
    const fecthRepository = async () => {
      const repos = await loadRepository();
      setAllRepository(handleShowRepositories(repos));
      setRepository(repos.slice(page, portifolioPerPage));
    };
    fecthRepository();
  }, []);

  const noMorePortifolos = page + portifolioPerPage >= allRepository.length;
  useEffect(() => {
    handleLoadPortifolios(0, portifolioPerPage);
  }, [handleLoadPortifolios, portifolioPerPage]);

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

  const loadMorePortifolios = () => {
    const nextPage = page + portifolioPerPage;
    const nextPost = allRepository.slice(
      nextPage,
      nextPage + portifolioPerPage,
    );
    repository.push(...nextPost);
    setPage(nextPage);
  };
  return (
    <>
      <div className="container">
        <PortifolioCard repos={repository} />
      </div>
      <div>
        <button onClick={loadMorePortifolios} disabled={noMorePortifolos}>
          Carregar mais portifólios
        </button>
      </div>
    </>
  );
};
