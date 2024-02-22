import { useContext, useState } from 'react';

import RadioInput from '../RadioInput';
import periods from '../utils/period';
import clock from '../assets/clock.svg';
import './form.css';
import BtnFindUnit from './BtnFindUnit';
import GymContext from '../../context/GymContext';

const Form = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const { gyms } = useContext(GymContext);

  return (
    <section>
      <form className='form--border' onSubmit={(e) => e.preventDefault()}>
        <section className='form__container__time'>
          <img src={clock} alt='clock icon' className='form--icon' />
          <p className='form__time--text'>Horário</p>
        </section>
        <h2 className='form__subtitle'>Qual período quer treinar?</h2>
        {periods.map((period) => (
          <RadioInput
            key={period.period}
            info={period}
            setSelectedOption={setSelectedOption}
          />
        ))}
        <section className='form__container__result'>
          <label>
            <input type='checkbox' name='close-units' id='close-units' />
            Exibir unidades fechadas
          </label>
          <p>
            Resultados encontrados: <b>{gyms?.locations.length}</b>
          </p>
        </section>
        <section className='form__container__btn'>
          <BtnFindUnit period={selectedOption} />
          <button className='form__btn btn__clear'>LIMPAR</button>
        </section>
      </form>
    </section>
  );
};

export default Form;
