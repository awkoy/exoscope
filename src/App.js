import React, { Component } from 'react';
import Main from './pages/main';
import Header from './partials/header';
import Footer from './partials/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
