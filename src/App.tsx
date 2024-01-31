import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import IconsLegend from './components/IconsLegend';

function App() {
  return (
    <>
      <Header />
      <main className='main__container'>
        <Form />
        <IconsLegend />
      </main>
      <Footer />
    </>
  );
}

export default App;
