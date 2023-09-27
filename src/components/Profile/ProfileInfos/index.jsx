/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { ProfileInterface } from '../ProfileInterface';
import './style.css';
import { person } from './data.js';

export const Profile = () => {
  const [propertys, setPropertys] = useState([]);

  const keys = Object.keys(person);
  const values = Object.values(person);
  let keyAndValue;

  const handleFillArray = () => {
    keyAndValue = keys.map((key, index) => ({
      key: key,
      value: values[index],
    }));
    return keyAndValue;
  };

  handleFillArray();

  return (
    <div>
      <h3 className="title-style">Informações Gerais</h3>
      <div className="snippet-style">
        <code>
          <ProfileInterface objectDeclaration={true} propertyInfos={[]} />
          <ProfileInterface
            objectDeclaration={false}
            propertyInfos={keyAndValue}
          />
        </code>
      </div>
    </div>
  );
};
