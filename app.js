var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['Orange Juice', 'Beers', 'Chipotle']}/> 
  </div>
);

var GroceryList = (props) => {

  var onListItemClick = (event) => {
    console.log('hello');
  };

  return (
    <ul>
      <li onClick={onListItemClick}>{props.items[0]}</li>
      <li onClick={onListItemClick}>{props.items[1]}</li>
      <li>{props.items[2]}</li>
    </ul>
  );
}

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
    );
  }

}

var GroceryList = (props) => (
  <ul>
    {props.items.map(todo =>
      <GroceryListItem todo={todo} />
    )}
  </ul>
);
ReactDOM.render(<App />, document.getElementById("app"));
