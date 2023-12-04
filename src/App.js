import './App.css';
import InteractiveArea from './map/InteractiveArea';
import React, { useState, useEffect } from 'react';
import { PanZoom } from 'react-easy-panzoom';
import TreeInfo from './map/TreeInfo';

function App() {
  const [selectedDot, setSelectedDot] = useState(null);

    const handleDotSelect = (dot) => {
        setSelectedDot(dot);
    };

  return (
    <div className="App">
      <body>
    <header>
        <ul class="nav">
            <li class="dropdown"><a>Home</a></li>
            <li class="dropdown">
                <a class="dropbin">Options</a>
                <div class="nav_dropdown">
                    <a>option1</a>
                    <a>option2</a>
                    <a>option3</a>
                </div>
            </li>
            <li class="search-container">
                <form action="/search" method="get">
                    <input type="text" placeholder="Search.." name="search"></input>
                    <button type="submit">o</button>
                </form>
            </li>
        </ul>
    </header>

    <main className="main-content">
        <PanZoom>
          <InteractiveArea onDotSelect={handleDotSelect} />
        </PanZoom>
        {selectedDot && <TreeInfo info={selectedDot} onClose={() => setSelectedDot(null)} />}
      </main>
</body>
    </div>
  );
}

export default App;
