import './App.css';
import React, { Component } from 'react';
import Form from './components/Form';
import DisplayExpense from './components/DisplayExpense';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          item: 'Phone',
          itemDescription: 'Samsung Phone',
          currency: '4',
          time: '3:00pm',
          date: '12/09/2020'
          // time: this.props.date.toLocaleTimeString()
        }
      ]
    };
  }

  addExpense = newItem => {
    let items = [...this.state.items, newItem];
    this.setState({
      items
    });
  };

  //CURRENCY

  render() {
    return (
      <div>
        <Form addExpense={this.addExpense} />
        <DisplayExpense items={this.state.items} />
      </div>
    );
  }
}
