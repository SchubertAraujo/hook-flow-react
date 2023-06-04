import { createContext, useEffect, useState } from 'react';
import './style.css';
import { repositoryContext } from './data';
import Prop from 'prop-types';

export const RepositoryContex = createContext();

const loadRepository = async () => {
  const repository = await fetch(
    'https://api.github.com/users/schubertaraujo/repos',
  );
  const repositoryJson = await repository.json();
  return repositoryJson;
};

export const PortifoliosProvider = ({ children }) => {
  const [contextState, setContextState] = useState(repositoryContext);
  useEffect(() => {
    const fecthRepository = async () => {
      const repos = await loadRepository();
      setContextState(repos);
    };
    fecthRepository();
  }, []);

  return (
    <RepositoryContex.Provider value={{ contextState }}>
      {children}
    </RepositoryContex.Provider>
  );
};

PortifoliosProvider.propTypes = {
  children: Prop.node,
};
