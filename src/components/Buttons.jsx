import React from 'react';
import satData from './satData';

function Buttons({ filterByType, setSat, displaySats }) {
  return (
    <div>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}

      {/*--button displays all satellites--*/}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
}

export default Buttons;