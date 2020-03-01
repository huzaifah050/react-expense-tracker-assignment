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
        <div key={index}>
          <h4>{item.item}</h4>
          <small>{item.time}</small>
          <small>{item.date}</small>
          <p>{item.itemDescription}</p>
        </div>
      );
    });

    return (
      <div className="App">
        {/* <Clock date={new Date()} /> */}
        <h1>ADD NEW ITEM</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Item:
            <input
              type="text"
              name="item"
              value={this.state.item}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Item Description:
            <textarea
              onChange={this.handleChange}
              value={this.state.itemDescription}
            />
          </label>

          <label>
            Time purchased:
            <input
              type="time"
              name="time"
              onChange={this.handleChange}
              value={this.state.time}
            />
          </label>

          <label>
            Date purchased:
            <input
              type="date"
              name="date"
              onChange={this.handleChange}
              value={this.state.date}
            />
          </label>
          <button type="submit">Add Item</button>
        </form>

        <div>{items}</div>
      </div>
    );
  }
}
