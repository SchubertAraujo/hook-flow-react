import { IconsAndDescriptions } from '.';
import js from '../../imgs/js.png';
import css from '../../imgs/css-3.png';
import html from '../../imgs/html5.png';
import delphi from '../../imgs/icons8-delphi-16.png';
import json from '../../imgs/folder.png';
import webStorage from '../../imgs/server-storage.png';
import react from '../../imgs/react.png';
import sqlServer from '../../imgs/sql.png';

export const Javascript = () => {
  return (
    <IconsAndDescriptions
      iconImg={js}
      className={'js'}
      description={'Javascript'}
      type="languageTechs"
    />
  );
};

export const Css = () => {
  return (
    <IconsAndDescriptions
      iconImg={css}
      className={'css'}
      description={'Css3'}
      type="languageTechs"
    />
  );
};

export const Html = () => {
  return (
    <IconsAndDescriptions
      iconImg={html}
      className={'html'}
      description={'Html5'}
      type="languageTechs"
    />
  );
};

export const Delphi = () => {
  return (
    <IconsAndDescriptions
      iconImg={delphi}
      className={'delphi'}
      description={'Delphi'}
      type="languageTechs"
    />
  );
};

export const Json = () => {
  return (
    <IconsAndDescriptions
      iconImg={json}
      className={'json'}
      description={'Json'}
      type="languageTechs"
    />
  );
};

export const WebStore = () => {
  return (
    <IconsAndDescriptions
      iconImg={webStorage}
      className={'webStorage'}
      description={'Web Storage'}
      type="languageTechs"
    />
  );
};

export const React = () => {
  return (
    <IconsAndDescriptions
      iconImg={react}
      className={'react'}
      description={'React'}
      type="languageTechs"
    />
  );
};

export const SqlServer = () => {
  return (
    <IconsAndDescriptions
      iconImg={sqlServer}
      className={'sqlServer'}
      description={'Sql Server'}
      type="languageTechs"
    />
  );
};
