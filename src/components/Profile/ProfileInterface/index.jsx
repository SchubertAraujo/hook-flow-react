import './style.css';
import propT from 'prop-types';

export const ProfileInterface = ({ objectDeclaration, propertyInfos }) => {
  return (
    <div>
      {objectDeclaration ? (
        <pre>
          <p>
            {' '}
            <b className="reseverd-word-color">{'  '}let</b>
            <span className="variable-color"> pessoa</span>
            <span className="assignement-color"> =</span>
            {' {'}
          </p>
        </pre>
      ) : (
        <>
          {propertyInfos.map((property) => (
            <pre key={property.key}>
              <p className="teste">
                <p className="property-color">
                  {'     ' + property.key + ': '}
                </p>
                <p className="property-value-color">
                  {'"' + property.value + '"'}
                </p>
              </p>
            </pre>
          ))}
          <pre>
            <p>{'   }'}</p>
          </pre>
        </>
      )}
    </div>
  );
};

ProfileInterface.propTypes = {
  objectDeclaration: propT.bool,
  propertyInfos: propT.array,
  key: propT.array,
};
