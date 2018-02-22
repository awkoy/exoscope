import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./style/index.css";
//content
import Main from "./pages/main";
import Header from "./partials/header";
import Footer from "./partials/footer";

const store = createStore (()=>{});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Main} />
            <Footer />
          </div> 
        </Router>
      </Provider>
    );
  }
}

export default App;
