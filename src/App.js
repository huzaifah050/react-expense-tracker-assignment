import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './components/Form';
import DisplayExpense from './components/DisplayExpense';
import { addItems} from '../src/store/ actions'
class App extends Component {
  addExpense = newItem => {
   this.props.addExpense(newItem)
  };

  //CURRENCY

  render() {
    return (
      <div>
        <Form addExpense={this.addExpense} />
        <DisplayExpense items={this.props.items} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = {
  addExpense: addItems
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
