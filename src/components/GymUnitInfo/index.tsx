import { LocationsApiType } from '../../types';
import './gym-unit-info.css';
// import requiredMask from '../assets/required-mask.png';
// import recommendedMask from '../assets/recommended-mask.png';
// import requiredTowel from '../assets/required-towel.png';
// import recommendedTowel from '../assets/recommended-towel.png';
// import parcialFountain from '../assets/partial-fountain.png';
// import forbiddenFountain from '../assets/forbidden-fountain.png';
// import requiredLockerroom from '../assets/required-lockerroom.png';
// import partialLockerroom from '../assets/partial-lockerroom.png';
// import forbiddenLockerroom from '../assets/forbidden-lockerroom.png';

type GymUnitInfoProps = {
  info: LocationsApiType;
};

const GymUnitInfo = ({ info }: GymUnitInfoProps) => {
  const { opened, title, content, schedules } = info;
  console.log(info);

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
      {content &&
        handleContentReplace().map((contentReplaced) => (
          <p key={contentReplaced} className='gym-unit-info__location '>
            {contentReplaced}
          </p>
        ))}
      {opened && (
        <section className='gym-unit-info__options'>
          <p>images</p>
          <section className='gym-unit-info__schedules'>
            {schedules.map((date, index) => (
              <div
                key={date.hour + index}
                className='gym-unit-info__schedules__weekdays'
              >
                <h4>{date.weekdays}</h4>
                <p>{date.hour}</p>
              </div>
            ))}
          </section>
        </section>
      )}
    </div>
  );
};

export default GymUnitInfo;
