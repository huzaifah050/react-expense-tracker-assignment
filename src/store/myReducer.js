const initState = {
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

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = {
        item: action.item.item,
        itemDescription: action.item.itemDescription,
        currency: action.item.currency,
        time: action.item.time,
        date: action.item.date
      };
      return { ...state, items: [...state.items, newItem] };

    default:
      return state;
  }
};

export default myReducer;
