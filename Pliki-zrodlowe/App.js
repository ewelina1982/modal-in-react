// const Person = () => <h1>to nasz modal</h1>;
// const Person1 = () => <h1>to nasz modal fajny</h1>;
// class App extends React.Component {
//   state = {
//     open: true
//   };
//   handeDelete = () => {
//     this.setState({
//       open: !this.state.open
//     });
//   };
//   handelShow = () => {
//     if (this.state.open) {
//       return <Person />;
//     } else {
//       return <Person1 />;
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>kup bilet</h1>
//         <input
//           type="checkbox"
//           onChange={this.handeDelete}
//           chacked={this.state.open}
//         />
//         <label>mam 16 lt</label>
//         {this.handelShow()}
//       </div>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById("root"));

const Person = () => <h1> Modal</h1>;
const Person1 = () => <p>Witam to mój modal w React</p>;

class App extends React.Component {
  state = {
    open: false
  };
  handeDelete = () => {
    this.setState({
      open: !this.state.open
    });
  };
  handeShow = () => {
    this.setState({
      open: true
    });
  };

  render() {
    return (
      <div>
        {this.state.open ? (
          <div onClick={this.handeShow} className="modal-drop" />
        ) : null}
        <button className="first-button" onClick={this.handeShow}>
          Kliknij mnie
        </button>
        <dialog open={this.state.open ? true : false}>
          <Person />
          <Person1 />
          <button onClick={this.handeDelete}>zamknij</button>
        </dialog>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
