import DOMPurify from 'dompurify';
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
    street,
    region,
    uf,
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

  const handleAltImageText = (item: string) => {
    const gymItem = item.split('find')[1].toLowerCase();
    const gymItemObligatoriness = info[gymItem];

    if (gymItem === 'lockerroom') {
      return `${gymItem} - ${locker_room}`;
    }

    return `${gymItem} - ${gymItemObligatoriness}`;
  };

  return (
    <div className='gym-unit-info__container'>
      <p
        className={`${
          opened ? 'gym-unit-info__isOpen' : 'gym-unit-info__isClosed'
        }`}
        data-testid='isOpen-or-isClose'
      >
        {opened ? 'Aberto' : 'Fechado'}
      </p>
      <h3
        className='gym-unit-info__title'
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}
      ></h3>
      {content && (
        <p
          className='gym-unit-info__location'
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
        ></p>
      )}
      {street && (
        <p className='gym-unit-info__location'>{`${street} - ${region}, ${uf}`}</p>
      )}
      {opened && (
        <section className='gym-unit-info__options'>
          <section className='gym-unit-info__images__container'>
            {Object.keys(findItemImg).map((item) => (
              <img
                alt={handleAltImageText(item)}
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
