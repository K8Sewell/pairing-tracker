import React, {Component} from 'react';
import Collector from './Collector';
import Display from './Display';
import Footer from './Footer';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: []
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Collector />
        <Display />
        <Footer />
      </div>
    );
  }
}

export default App;
