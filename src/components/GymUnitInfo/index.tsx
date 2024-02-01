import { LocationsApiType } from '../../types';
import { gymItems } from '../utils/outfit';
import './gym-unit-info.css';

type GymUnitInfoProps = {
  info: LocationsApiType;
};

type FindItemImgType = {
  findMask?: string | undefined;
  findTowel?: string | undefined;
  findFountain?: string | undefined;
  findLockerRoom?: string | undefined;
};

const GymUnitInfo = ({ info }: GymUnitInfoProps) => {
  const {
    opened,
    title,
    content,
    schedules,
    mask,
    fountain,
    towel,
    locker_room,
  } = info;

  const findItem = (product: string, productObj: string) =>
    gymItems.find(
      (item) => item.item === product && item.obligatoriness === productObj,
    )?.img;

  const findItemImg: FindItemImgType = {
    findMask: findItem('mask', mask),
    findTowel: findItem('towel', towel),
    findFountain: findItem('fountain', fountain),
    findLockerRoom: findItem('locker_room', locker_room),
  };

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
          <p key={contentReplaced} className='gym-unit-info__location'>
            {contentReplaced}
          </p>
        ))}
      {opened && (
        <section className='gym-unit-info__options'>
          <section className='gym-unit-info__images__container'>
            {Object.keys(findItemImg).map((item) => (
              <img
                src={`${findItemImg[item as keyof typeof findItemImg]}`}
                style={{ width: 60 }}
                key={findItemImg[item as keyof typeof findItemImg]}
              />
            ))}
          </section>
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
