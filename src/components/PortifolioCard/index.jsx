import './style.css';
import Props from 'prop-types';

export function PortifolioCard({ key, name }) {
  return (
    <div>
      {key.id}
      {name}
      {console.log(name)}
    </div>
  );
}

PortifolioCard.propTypes = {
  key: Props.number,
  name: Props.string,
};
