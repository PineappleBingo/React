import React, { Component } from "react";

class Upgrade extends Component {
  // Think of it as private local variable
  //   state = {
  //     // name: this.props.name,
  //     // energy: this.props.energy,
  //     // description: this.props.description,
  //     // imageUrl: this.props.imageUrl,
  //     count: this.props.upgrade.count,
  //   };
  // to make upgrade object as controlled components, using single source of the truth, deleting all the local state.

  //   //   one solution
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // doen't need it anymore since upgrades take care of it.
  //   handleIncrement = (Upgrade) => {
  //     this.setState({ count: this.state.count + 1 });
  //   };
  //   handleReset = (Upgrade) => {
  //     this.setState({ count: 0 });
  //   };

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* directly getting name from props */}
        <h2>{this.props.upgrade.name}</h2>
        <div>{this.props.upgrade.energy}</div>
        <img src={this.props.upgrade.imageUrl} alt="" />
        <div>{this.props.upgrade.description}</div>
        <span className="badge badge-warning m-1">{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.upgrade)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.upgrade)}
          className="btn btn-secondaty btn-sm m-1"
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-1"
          onClick={() => this.props.onDelete(this.props.upgrade.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-warning btn-sm m-1"
          onClick={() => this.props.onReset(this.props.upgrade)}
        >
          Reset
        </button>
      </div>
    );
  }

  formatCount() {
    // return this.state.count === 0 ? "Zero" : this.state.count;
    const { count } = this.props.upgrade;
    return count === 0 ? "Zero" : count;
  }
}

export default Upgrade;
