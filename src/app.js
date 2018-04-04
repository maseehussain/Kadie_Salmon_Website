import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import NavbarMain from './components/utility/Navbar';

import 'bootstrap-css-only';
import 'react-bootstrap';
import 'reactstrap';

class App extends React.Component {

  render() {
    return (
      <main>
        <div className="container">
          <header>
            <NavbarMain />
          </header>
        </div>
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
