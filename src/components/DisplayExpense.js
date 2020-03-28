import React from 'react';

const DisplayExpense = ({ items }) => {
  
  console.log(items);
  const item = items.map((item, index) => {
    if (item.currency !== '' && item.currency > 0 && item.item !== '') {
      return (
        <div className="output" key={index}>
          <div className="items-content">
            <div>
              <h4 className="item">{item.item}</h4>
            </div>

            <div className="item-details">
              <small className="time">{item.time}</small>
              <small className="date">{item.date}</small>
            </div>
          </div>
          <h5>
            {' '}
            <span>&#8373;</span> {item.currency}
          </h5>

          <p className="discription">{item.itemDescription}</p>
        </div>
      );
    } else {
      return null;
    }
  });
  return (
    <div>
      <div className="container">
        <h3 className="center blue-text">Added Expense</h3>
        <div className="output-items">{item}</div>
      </div>
    </div>
  );
};

export default DisplayExpense;
