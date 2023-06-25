/* eslint-disable no-unused-vars */
import css from '../../imgs/css-3.png';
import js from '../../imgs/js.png';
import html from '../../imgs/html5.png';
import propT from 'prop-types';

export const LanguageAndImgs = ({ languages }) => {
  return (
    <div className="languages-imgs">
      {languages == 'javascript' ? (
        <>
          <img src={js} />
          <>javascript</>
        </>
      ) : (
        ''
      )}
      {languages == 'html5' ? (
        <>
          <img src={html} />
          <>html</>
        </>
      ) : (
        ''
      )}
      {languages == 'css3' ? (
        <>
          <img src={css} />
          <>css</>
        </>
      ) : (
        ''
      )}
      {languages == 'react' ? (
        <>
          <img src={js} />
          <>react</>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

LanguageAndImgs.propTypes = {
  languages: propT.string,
};
