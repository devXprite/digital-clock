import './App.css';
import Clock from './Components/Clock';
import ParticlesBg from 'particles-bg'



function App() {
  return (
    <>
      <Clock/>
      <ParticlesBg type="ball" bg={true} />
    </>
  );
}

export default App;
