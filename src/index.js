import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDqdLBVsRZ5liPt-T21f79152UYSm_EGQQ';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
 );
}


ReactDOM.render(<App />, document.querySelector('.container'));
