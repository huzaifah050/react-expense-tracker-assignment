import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          item: "phone",
          itemDescription: "Samsung Phone",
          time: "3:00pm",
          date: "12/09/2020"
          // time: this.props.date.toLocaleTimeString()
        }
      ],
      item: "",
      itemDescription: "",
      time: "",
      date: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      item: this.state.item,
      itemDescription: this.state.itemDescription,
      time: this.state.time,
      date: this.state.date
    };
    this.setState({
      items: [...this.state.items, newItem],
      item: "",
      itemDescription: "",
      time: "",
      date: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const items = this.state.items.map((item, index) => {
      return (
        <div className="output" key={index}>
          <h4>{item.item}</h4>
          <small>{item.time}</small>
          <small>{item.date}</small>
          <p>{item.itemDescription}</p>
        </div>
      );
    });

    return (
      <div>
        <h1 className="App-header">EXPENSE TRACKER</h1>
        <div className="container">
          <div className="form-container">
            <h2>ADD NEW ITEM</h2>
            <form onSubmit={this.handleSubmit}>
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
          <div className="output-container">
            <div>{items}</div>
          </div>
        </div>
      </div>
    );
  }
}
