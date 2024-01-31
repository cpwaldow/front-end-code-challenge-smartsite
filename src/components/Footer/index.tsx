import './footer.css';
import logo from '../assets/smartfit-logo.png';

const Footer = () => {
  return (
    <footer className='footer__container'>
      <img src={logo} alt='Smart Fit Logo' />
      <h4>Todos os direitos reservados - 2020</h4>
    </footer>
  );
};

export default Footer;
