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
    </>
  );
}

export default App;
