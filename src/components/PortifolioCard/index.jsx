import { useContext } from 'react';
import './style.css';
import { RepositoryContex } from './../Portifolios';

export const PortifolioCard = () => {
  // eslint-disable-next-line no-unused-vars
  const theContext = useContext(RepositoryContex);
  const { contextState } = theContext;
  const {
    teste: [id],
  } = contextState;
  // return contextState.map((m) => {
  //   <div key={m.id}>{m.id}</div>;
  // });
  return console.log(id);
};
