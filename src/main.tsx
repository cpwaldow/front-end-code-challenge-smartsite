import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import GymProvider from './context/GymProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GymProvider>
    <App />
  </GymProvider>,
);
