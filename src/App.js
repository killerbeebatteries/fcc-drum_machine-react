import './App.css';

import React from 'react';
//import ReactDOM from 'react-dom';

// basing this stuff on the demo here:
// https://codepen.io/freeCodeCamp/pen/MJyNMd
const cymbols = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: "highHat",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Hi_hat_open.ogg"
  }
]

const drums = [
  keyCode: 65,
  keyTrigger: 'Q',
  id: "snareDrum",
  url: "https://soundcamp.org/sounds/381/snare/A/subtle-reverb-snare-drum-sound-a-key-01-Kb6.ogg"

]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: true
    }
  };
  render() {
    return (
      <div className="container bg-primary" id="main">
        <div className="row">
          <div className="col-sm-6">
            <Pad />
          </div>
          <div className="col-sm-6">
            <Controls />
          </div>
        </div>
      </div>
    );
  }
}

class Pad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: true
    }
  };
  render() {
  return (
      <div className="container bg-secondary" id="pad">
        <div className="row" id="cymbols">
          <div className="col-sm-6" id="highHat">
            <h4>highHat</h4>
          </div>
          <div className="col-sm-6" id="cymbol">
            <h4>cymbol</h4>
          </div>
        </div>
        <div className="row" id="drums">
          <div className="col-sm-6" id="snareDrum">
            <h4>snareDrum</h4>
          </div>
          <div className="col-sm-6" id="bassDrum">
            <h4>bassDrum</h4>
          </div>
        </div>
      </div>
    )
  }
}

function Controls() {
  return (
    <div className="container bg-secondary" id="controls">
      <div className="row" id="gauges">
        <div className="col-sm-12" id="diplayPanel">
          <h4>displayPanel</h4>
        </div>
      </div>
    </div>
  )
}

export default App;
