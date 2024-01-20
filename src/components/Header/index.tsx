import logo from '../../assets/smartfit-logo.png';
import './header.css';

const Header = () => {
  return (
    <header>
      <section className='header--background--black'>
        <img src={logo} alt='SmartFit Logo' className='header__logo' />
      </section>
      <section className='header__container'>
        <h1 className='header__title'>reabertura smart fit</h1>
        <p className='header__description'>
          O horário de funcionamento das nossas unidades stá seguindo os
          decretos de cada município. Por isso, confira aqui e a sua unidade
          está aberta e s medidas de segurança que estamos seguindo.
        </p>
      </section>
    </header>
  );
};

export default Header;
