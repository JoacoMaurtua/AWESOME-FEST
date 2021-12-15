import React from 'react';
import MainArea from './components/MainArea/MainArea';
import SliderCarrousel from './components/Slider/SliderCarrousel';
import MenuArea from './components/MenuArea/MenuArea';

function App() {
  return (
    <div className="App">
      <MainArea/>
      <SliderCarrousel />

      <MenuArea/>
    </div>
  );
}

export default App;


