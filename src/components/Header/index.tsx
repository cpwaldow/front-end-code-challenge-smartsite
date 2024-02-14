import logo from '../assets/smartfit-logo.png';
import './header.css';

const Header = () => {
  return (
    <header>
      <section className='header--background--black'>
        <img src={logo} alt='SmartFit Logo' className='header__logo' />
      </section>
      <section className='main__container'>
        <h1 className='header__title' data-testid='header-title'>
          REABERTURA SMART FIT
        </h1>
        <p className='header__description' data-testid='header-description'>
          O horário de funcionamento das nossas unidades stá seguindo os
          decretos de cada município. Por isso, confira aqui e a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>
      </section>
    </header>
  );
};

export default Header;
