import { LocationsApiType } from '../../types';
import './gym-unit-info.css';

type GymUnitInfoProps = {
  info: LocationsApiType;
};

const GymUnitInfo = ({ info }: GymUnitInfoProps) => {
  const { opened, title, content } = info;

  const handleContentReplace = () => {
    const splitContent = content.split('<br>');
    const firstPlaceContent = splitContent[0]
      .replace('&#8211;', '-')
      .replace('<p>', '');
    const lastPlaceContent = splitContent[1].replace('</p>', '');
    return [firstPlaceContent, lastPlaceContent];
  };

  return (
    <div className='gym-unit-info__container'>
      <p
        className={`${
          opened ? 'gym-unit-info__isOpen' : 'gym-unit-info__isClosed'
        }`}
      >
        {opened ? 'Aberto' : 'Fechado'}
      </p>
      <h3 className='gym-unit-info__title'>{title}</h3>
      {handleContentReplace().map((contentReplaced) => (
        <p key={contentReplaced} className='gym-unit-info__location '>
          {contentReplaced}
        </p>
      ))}
    </div>
  );
};

export default GymUnitInfo;
