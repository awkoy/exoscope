import React, { Component } from 'react'; 
import Episodes from './../containers/episodes';
import Holding from './../containers/holding';

class Main extends Component {
  render() {
    return (
      <main> 
        <Episodes/>
        <Holding/>
      </main>    
    );
  }
}

export default Main;
