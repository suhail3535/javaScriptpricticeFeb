
// import React from 'react'
// import SquareGrid from './Square'
// import Timer from './Countdown'
// import Timer1 from './Countdown1'
// import Product from './pages/Product'

// const App = () => {
//   return (
//     <div>
//       {/* <Timer/>
//       <Timer1/> */}
//       <Product />
//     </div>
//   )
// }

// export default App
// Complete React Code
import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import LoadParticles from 'react-tsparticles';
function App () {
  return (
    <div className="App">
      By Ankit Bansal
      <Particles
        params={{
          particles: {
            number: {
              value: 200,
              density: {
                enable: true,
                value_area: 1000,
              }
            },
          },
        }}
      />

    </div>
  );
}

export default App;
