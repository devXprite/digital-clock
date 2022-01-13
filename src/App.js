import './App.css';
import Clock from './Components/Clock';
import ParticlesBg from 'particles-bg'



function App() {
  return (
    <>
      <Clock/>
      <ParticlesBg type="fountain" bg={true} num={2} />
    </>
  );
}

export default App;
