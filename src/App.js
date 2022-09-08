import map from './images/map.png';
import circus from './images/carnival.png';
import waterpark from './images/waterpark.png';
import actionland from './images/actionland.png';
import entrance from './images/entrance.png';
import zoo from './images/zoo.png';

import React, { useState } from 'react';

import './App.css';

function App() {
  
  const [currentHover, setCurrentHover] = useState();

  const mouseEnter = (attraction) => {
    console.log(attraction);
    if(attraction == "circus") {
      setCurrentHover(document.getElementById('circus-info'));
      setTimeout(function() {
        document.getElementById('circus-info').style.visibility = "visible";
      }, 10);
      document.getElementById("circus-popup").style.visibility = "visible";
      
    } else if(attraction == "waterpark") {
      setCurrentHover(document.getElementById('waterpark-info'));
      document.getElementById("waterpark-popup").style.visibility = "visible";
      setTimeout(function() {
        document.getElementById('waterpark-info').style.visibility = "visible";
      }, 10);
    } else if(attraction == "actionland") {
      setCurrentHover(document.getElementById('actionland-info'));
      document.getElementById("actionland-popup").style.visibility = "visible";
      setTimeout(function() {
        document.getElementById('actionland-info').style.visibility = "visible";
      }, 10);
    } else if(attraction == "zoo") {
      setCurrentHover(document.getElementById('zoo-info'));
      document.getElementById("zoo-popup").style.visibility = "visible";
      setTimeout(function() {
        document.getElementById('zoo-info').style.visibility = "visible";
      }, 10);
    }
  }
  const mouseLeave = (attraction) => {
    console.log("leave");
    if(attraction == "circus") {
      document.getElementById("circus-popup").style.visibility = "hidden";
      document.getElementById('circus-info').style.visibility = "hidden";
      setCurrentHover(null);
    } else if(attraction == "waterpark") {
      document.getElementById("waterpark-popup").style.visibility = "hidden";
      document.getElementById('waterpark-info').style.visibility = "hidden";
      setCurrentHover(null);
    } else if(attraction == "actionland") {
      document.getElementById("actionland-popup").style.visibility = "hidden";
      document.getElementById('actionland-info').style.visibility = "hidden";
      setCurrentHover(null);
    } else if(attraction == "zoo") {
      document.getElementById("zoo-popup").style.visibility = "hidden";
      document.getElementById('zoo-info').style.visibility = "hidden";
      setCurrentHover(null);
    }
  }  

  document.addEventListener('mousemove', function(e) {
    if(currentHover != null) {
      let left = e.pageX;
      let top = e.pageY;
      currentHover.style.left = (left) + 'px';
      currentHover.style.top = (top-250) + 'px';
    }
  });

  return (
    <div className="App">
      <div className="map-section" id="map-section">
        <img src={map} className="map" id="map"/>

        <div id="circus-info" className="info-boxes">
          <h4>Carnival</h4>
          This is the carnival, here you can explore xx and everything <br/>
          is looking good and clean, if I could come with a recommendation <br/>
          I would try the yy.<br/> <br/>

          Click to Enter!<br/>
        </div>
        <a id="circus" onMouseEnter={() => mouseEnter("circus")} onMouseLeave={() => mouseLeave("circus")} />
        <img src={circus} id="circus-popup"/>

        <div id="waterpark-info" className="info-boxes">
          <h4>Waterpark</h4>
          This is the waterpark, here you can explore xx and everything <br/>
          is looking good and clean, if I could come with a recommendation <br/>
          I would try the yy.<br/> <br/>

          Click to Enter!<br/>
        </div>
        <a id="waterpark" onMouseEnter={() => mouseEnter("waterpark")} onMouseLeave={() => mouseLeave("waterpark")} />
        <img src={waterpark} id="waterpark-popup"/>

        <a id="entrance" onMouseEnter={() => mouseEnter("entrance")} onMouseLeave={() => mouseLeave("entrance")} />

        <div id="actionland-info" className="info-boxes">
          <h4>Actionland</h4>
          This is the actionland, here you can explore xx and everything <br/>
          is looking good and clean, if I could come with a recommendation <br/>
          I would try the yy.<br/> <br/>

          Click to Enter!<br/>
        </div>
        <a id="actionland" onMouseEnter={() => mouseEnter("actionland")} onMouseLeave={() => mouseLeave("actionland")} />
        <img src={actionland} id="actionland-popup"/>

        <div id="zoo-info" className="info-boxes">
          <h4>Zoo</h4>
          This is the zoo, here you can explore xx and everything <br/>
          is looking good and clean, if I could come with a recommendation <br/>
          I would try the yy.<br/> <br/>

          Click to Enter!<br/>
        </div>
        <a id="zoo" onMouseEnter={() => mouseEnter("zoo")} onMouseLeave={() => mouseLeave("zoo")} />
        <img src={zoo} id="zoo-popup"/>
      </div>
    </div>
  );
}

export default App;
