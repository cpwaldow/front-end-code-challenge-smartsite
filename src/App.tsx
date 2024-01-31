import Footer from './components/Footer';
import Form from './components/Form';
import GymUnits from './components/GymUnits';
import Header from './components/Header';
import IconsLegend from './components/IconsLegend';

function App() {
  return (
    <>
      <Header />
      <main className='main__container'>
        <Form />
        <IconsLegend />
        <GymUnits />
      </main>
      <Footer />
    </>
  );
}

export default App;
