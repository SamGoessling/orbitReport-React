import React, { useState } from 'react';
import satData from './components/satData';
import Banner from './components/Banner';
import Buttons from './components/Buttons';
import Table from './components/Table';

function App() {
  //-- hold current set of satellites to display --//
  const [sat, setSat] = useState(satData);

  //-- extract orbit types for button --//
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  //-- function that flters satellities according to orbit type --//
  const filterByType = (currentType) => {
    const filteredSats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(filteredSats);
  };
  
  return (
  <>
    <Banner />
    <Buttons
    filterByType={filterByType}
    setSat={setSat}
    displaySats={displaySats}
    />
    <Table sat={sat} />
    </>
  );
}

export default App;