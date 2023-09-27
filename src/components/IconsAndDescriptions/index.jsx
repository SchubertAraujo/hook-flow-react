// import css from '../../imgs/css-3.png';
// import js from '../../imgs/js.png';
// import html from '../../imgs/html5.png';
// import profile from '../../imgs/man.png';
// import skills from '../../imgs/skills.png';
// import experience from '../../imgs/xp.png';
// import objectives from '../../imgs/objectives.png';
import propT from 'prop-types';
import './style.css';

export const IconsAndDescriptions = ({ iconImg, description, className }) => {
  return (
    <div className={className}>
      <div>
        <img src={iconImg} />
        <p>{description}</p>
      </div>
    </div>
  );
};

IconsAndDescriptions.propTypes = {
  iconImg: propT.string,
  description: propT.string,
  className: propT.string,
};
