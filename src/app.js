import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import 'bootstrap-css-only';
import 'react-bootstrap';

class App extends React.Component {

  render() {
    return (
      <main>
        <div className="container">
          <div className="row">
            <h1>Kadie Salmon</h1>
          </div>
        </div>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
