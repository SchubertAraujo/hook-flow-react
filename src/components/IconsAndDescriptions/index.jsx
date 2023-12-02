import propT from 'prop-types';
import './style.css';

export const IconsAndDescriptions = ({
  iconImg,
  description,
  className,
  type = 'buttons',
}) => {
  return (
    <>
      {type === 'buttons' ? (
        <div className={className}>
          <div>
            <img src={iconImg} />
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div className="languages-techs">
          <img src={iconImg} className="icon-position" />
          <div className={className}>{description}</div>
        </div>
      )}
    </>
  );
};

IconsAndDescriptions.propTypes = {
  iconImg: propT.string,
  description: propT.string,
  className: propT.string,
  type: propT.string,
};
