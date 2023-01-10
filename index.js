import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Item(props) {
  return (
    <div className="item">
      <b>Name:</b> {props.name} <br />
      <b>Price:</b> ${props.price}
      <br />
      <b>Color:</b> {props.color}
      <br />
      <b>Rating:</b> {props.rating}
    </div>
  );
}

function App() {
  return (
    <div>
      <Item name="Cheese" price="4.99" color="yellow" rating="5" />
      <Item name="Bread" price="1.5" color="brown" rating="5" />
      <Item name="Ice cream" price="24" color="green" rating="5" />
      <Item name="weiner" price="24" color="pink" rating="5" />
      <Item name="buns" price="24" color="green" rating="5" />
    </div>
  );
}

const el = <App />;
ReactDOM.render(el, document.getElementById('root'));

function Sec(props) {
  return (
    <div className="section">
      <b>Section:</b> {props.section} <br />
      <b>Row:</b> ${props.row}
      <br />
      <b>Seat:</b> {props.seat}
      <br />
      <b>Rating:</b> {props.rating}
    </div>
  );
}
function App2() {
  return (
    <div>
      <Sec section="315" row="C" seat="12" rating="5" />
      <Sec section="315" row="C" seat="12" rating="5" />
      <Sec section="315" row="C" seat="12" rating="5" />
      <Sec section="315" row="C" seat="12" rating="5" />
      <Sec section="315" row="C" seat="12" rating="5" />
    </div>
  );
}
const al = <App2 />;
ReactDOM.render(al, document.getElementById('root2'));
