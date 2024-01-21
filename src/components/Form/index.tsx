import RadioInput from '../RadioInput';
import periods from '../utils/period';
import clock from '../../assets/clock.svg';
import './form.css';

const Form = () => {
  return (
    <section className='main__container'>
      <form className='form--border'>
        <section className='form__container__time'>
          <img src={clock} alt='clock icon' className='form--icon' />
          <p className='form__time--text'>Horário</p>
        </section>
        <h2 className='form__subtitle'>Qual período quer treinar?</h2>
        {periods.map((period) => (
          <RadioInput key={period.period} info={period} />
        ))}
        <section className='form__container__result'>
          <label>
            <input type='checkbox' name='close-units' id='close-units' />
            Exibir unidades fechadas
          </label>
          <p>
            Resultados encontrados: <b>0</b>
          </p>
        </section>
        <section className='form__container__btn'>
          <button className='form__btn btn__find__unit'>
            encontrar unidade
          </button>
          <button className='form__btn btn__clear'>limpar</button>
        </section>
      </form>
    </section>
  );
};

export default Form;
