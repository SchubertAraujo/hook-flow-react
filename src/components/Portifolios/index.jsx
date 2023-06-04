import { useReducer } from 'react';
//import { PortifolioCard } from '../PortifolioCard';
import './style.css';
import Prop from 'prop-types';
import { reducer } from './reducer';
import { data } from './data';

// eslint-disable-next-line no-unused-vars
export const PortifoliosProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [repositoryState, repositoryDipatch] = useReducer(reducer, data);
  return console.log(repositoryState);
};

PortifoliosProvider.propTypes = {
  children: Prop.node.isRequired,
};
