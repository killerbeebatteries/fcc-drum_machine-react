import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container" id="main">
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

function Pad() {
  return (
    <div className="container" id="pad">
      <div className="row" id="topOfKit">
        <div className="col-sm-4" id="snareDrum">
          <h4>snareDrum</h4>
        </div>
        <div className="col-sm-4" id="highHat">
          <h4>highHat</h4>
        </div>
        <div className="col-sm-4" id="cymbol">
          <h4>cymbol</h4>
        </div>
      </div>
      <div className="row" id="bottomOfKit">
        <div className="col-sm-12" id="bassDrum">
          <h4>bassDrum</h4>
        </div>
      </div>
    </div>
  )
}

function Controls() {
  return (
    <div className="container" id="controls">
      <div className="row" id="gauges">
        <div className="col-sm-12" id="diplayPanel">
          <h4>displayPanel</h4>
        </div>
      </div>
    </div>
  )
}

export default App;
