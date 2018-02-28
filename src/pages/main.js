import React, { Component } from 'react'; 
import Episodes from './../containers/episodes';
import Holding from './../containers/holding';
import Market from './../containers/market';
import Events from './../containers/events';

class Main extends Component {
  render() {
    return (
      <main> 
        <Episodes/>
        <Holding/>
        <Market/>
        <Events/>
      </main>    
    );
  }
}

export default Main;
