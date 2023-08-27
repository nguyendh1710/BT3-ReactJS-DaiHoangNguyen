

import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle.min";
import ShoesStore from "./ShoesStore/ShoesStore";

function App() {
  return (
    <div className="App">
             <ShoesStore/>
    </div>
  );
}

export default App;
