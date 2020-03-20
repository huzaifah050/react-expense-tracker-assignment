import React, { Component } from 'react';

class Form extends Component {
  state = {
    item: '',
    itemDescription: '',
    currency: '',
    time: '',
    date: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      item: this.state.item,
      itemDescription: this.state.itemDescription,
      currency: this.state.currency,
      time: this.state.time,
      date: this.state.date
    };
    this.props.addExpense(newItem);
    this.setState({
      item: '',
      itemDescription: '',
      currency: '',
      time: '',
      date: ''
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">EXPENSE TRACKER</h1>
        <div>
          <div className="form-container">
            <div className="header">
              <h2>Add New Item</h2>
            </div>
            <form onSubmit={this.handleSubmit} className="form">
              <div className="form-row">
                <label>Item:</label>
                <input
                  type="text"
                  name="item"
                  value={this.state.item}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-row">
                <label>Item Description:</label>
                <textarea
                  name="itemDescription"
                  onChange={this.handleChange}
                  value={this.state.itemDescription}
                />
              </div>

              <div className="form-row">
                <label>Amount spent:</label>
                <span className="GHS">
                  <input
                    type="number"
                    name="currency"
                    value={this.state.currency}
                    onChange={this.handleChange}
                  />
                </span>
              </div>

              <div className="form-row">
                <label>Time purchased:</label>
                <input
                  type="time"
                  name="time"
                  onChange={this.handleChange}
                  value={this.state.time}
                />
              </div>

              <div className="form-row">
                <label>Date purchased:</label>
                <input
                  type="date"
                  name="date"
                  onChange={this.handleChange}
                  value={this.state.date}
                />
              </div>
              <div>
                <button className="btn" type="submit">
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
