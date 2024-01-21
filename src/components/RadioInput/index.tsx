import './radioInput.css';

type PropsType = {
  info: {
    period: string;
    startTime: string;
    endTime: string;
  };
};

const RadioInput = ({ info }: PropsType) => {
  const { period, startTime, endTime } = info;
  return (
    <div>
      <label className='radio__label'>
        <section>
          <input type='radio' id={period} name='select-period' />
          <span>{period}</span>
        </section>
        <span>{`${startTime} às ${endTime}`}</span>
      </label>
    </div>
  );
};

export default RadioInput;
