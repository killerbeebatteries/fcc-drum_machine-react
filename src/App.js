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
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: "snareDrum",
    url: "https://soundcamp.org/sounds/381/snare/A/subtle-reverb-snare-drum-sound-a-key-01-Kb6.ogg"
  }

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
            <PadBank />
          </div>
          <div className="col-sm-6">
            <Controls />
          </div>
        </div>
      </div>
    );
  }
}

class PadBank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: true
    }
    this.playSound = this.playSound.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

  };
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }
  };

  playSound(keyTrigger) {
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
  };

  render() {
  return (
      <div className="container bg-secondary" id="pad">
        <div className="row" id="cymbols">
          <div className="col-sm-6 drum-pad" id="highHat"
            id={cymbols[0].id}
            onClick={() => this.playSound(cymbols[0].keyTrigger)}
            >
            <audio
              className='clip'
              id={cymbols[0].keyTrigger}
              src={cymbols[0].url}
            />
            <h4>highHat</h4>
            {cymbols[0].keyTrigger}
          </div>
          <div className="col-sm-6 drum-pad" id="cymbol">
            <h4>cymbol</h4>
          </div>
        </div>
        <div className="row" id="drums">
          <div className="col-sm-6 drum-pad" id="snareDrum"
          id={drums[0].id}
          onClick={() => this.playSound(drums[0].keyTrigger)}
          >
          <audio
            className='clip'
            id={drums[0].keyTrigger}
            src={drums[0].url}
          />
          <h4>snareDrum</h4>
          {drums[0].keyTrigger}

          </div>
          <div className="col-sm-6 drum-pad" id="bassDrum">
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
