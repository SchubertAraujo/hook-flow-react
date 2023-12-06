import { Delphi, SqlServer } from '../IconsAndDescriptions/badgeTechs';
import './style.css';

export const Experience = () => {
  return (
    <>
      <h3>Conhecimento</h3>
      <div className="companies-boxes">
        <div className="companies-box-style">
          <h4 className="title-border">NetView Informatica</h4>
          <p className="p-companies">Ano: 2010/2011</p>
          <p className="p-companies">Vaga: Programador Estágiario</p>
          <p className="p-companies">Techs: </p>
          <div className="xp-tech-boxes">
            <Delphi />
            <SqlServer />
          </div>
        </div>
        <div className="companies-box-style">
          <h4 className="title-border">Sisloc</h4>
          <p className="p-companies">Ano: 2011/2012</p>
          <p className="p-companies">Vaga: Programador Júnior</p>
          <p className="p-companies">Techs: </p>
          <div className="xp-tech-boxes">
            <Delphi />
            <SqlServer />
          </div>
        </div>
        <div className="companies-box-style">
          <h4 className="title-border">Virtual Sistemas</h4>
          <p className="p-companies">Ano: 2013/2014</p>
          <p className="p-companies">Vaga: Programador Delphi</p>
          <p className="p-companies">Techs: </p>
          <div className="xp-tech-boxes">
            <Delphi />
            <SqlServer />
          </div>
        </div>
      </div>
    </>
  );
};
