import React from 'react';
import './Tiles.css';
import {Link} from 'react-router-dom'

function Tiles() {
  return (
    <div className="tiles_container">
      <Link to="/regextest" className="tile">RegEx Testing</Link>
      <Link to="#" className="tile">Generic Resource</Link>
      <Link to="#" className="tile">Head Words</Link>
      <Link to="#" className="tile">Legit Words</Link>
      <Link to="#" className="tile">Reports</Link>
      <Link to="#" className="tile">Rule set Authoring</Link>
      <Link to="#" className="tile">Stop Words</Link>
      <Link to="#" className="tile">Tree Code View</Link>
    </div>
  );
}

export default Tiles;
