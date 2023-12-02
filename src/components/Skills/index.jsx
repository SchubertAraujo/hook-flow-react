import {
  Css,
  Delphi,
  Html,
  Javascript,
  Json,
  React,
  SqlServer,
  WebStore,
} from '../IconsAndDescriptions/badgeTechs';
import './style.css';

export const Skills = () => {
  return (
    <>
      <h3>Conhecimento</h3>
      <div className="skill-boxes">
        <div className="skill-box-style">
          <h4 className="title-border">Linguaguens</h4>
          <div className="techs-boxes">
            <Html />
            <Css />
            <Javascript />
            <Delphi />
          </div>
        </div>
        <div className="skill-box-style">
          <h4 className="title-border">Libs/APIs/Notações</h4>
          <div className="techs-boxes">
            <Json />
            <WebStore />
            <React />
          </div>
        </div>
        <div className="skill-box-style">
          <h4 className="title-border">Banco de dados</h4>
          <div className="techs-boxes">
            <SqlServer />
          </div>
        </div>
      </div>
    </>
  );
};
