/* eslint-disable no-unused-vars */
import css from '../../imgs/css-3.png';
import js from '../../imgs/js.png';
import html from '../../imgs/html5.png';
import profile from '../../imgs/man.png';
import propT from 'prop-types';

export const LanguageAndImgs = ({ languagesImgs }) => {
  return (
    <div className="languages-imgs">
      {languagesImgs == 'javascript' ? (
        <>
          <img src={js} />
          <>javascript</>
        </>
      ) : (
        ''
      )}
      {languagesImgs == 'html5' ? (
        <>
          <img src={html} />
          <>html</>
        </>
      ) : (
        ''
      )}
      {languagesImgs == 'css3' ? (
        <>
          <img src={css} />
          <>css</>
        </>
      ) : (
        ''
      )}
      {languagesImgs == 'react' ? (
        <>
          <img src={js} />
          <>react</>
        </>
      ) : (
        ''
      )}
      {languagesImgs == 'profile' ? (
        <div className="teste">
          <img src={profile} />
          <p>perfil</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

LanguageAndImgs.propTypes = {
  languagesImgs: propT.string,
};
