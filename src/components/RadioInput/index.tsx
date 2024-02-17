import './radioInput.css';

type PropsType = {
  info: {
    period: string;
    startTime: string;
    endTime: string;
  };
  setSelectedOption: (info: string) => void;
};

const RadioInput = ({ info, setSelectedOption }: PropsType) => {
  const { period, startTime, endTime } = info;
  return (
    <div onClick={() => setSelectedOption(period)}>
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
