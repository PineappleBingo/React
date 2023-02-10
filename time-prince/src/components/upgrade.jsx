import React, { Component } from "react";

class Upgrade extends Component {
  // Think of it as private local variable
  state = {
    // name: this.props.name,
    // energy: this.props.energy,
    // description: this.props.description,
    // imageUrl: this.props.imageUrl,
    count: this.props.upgrade.count,
  };

  //   //   one solution
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = () => {
    // console.log("Clicked");
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        {/* directly getting name from props */}
        <h2>{this.props.upgrade.name}</h2>
        <div>{this.props.upgrade.energy}</div>
        <img src={this.props.upgrade.imageUrl} alt="" />
        <div>{this.props.upgrade.description}</div>
        <span className="badge badge-warning m-2">{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.upgrade.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    // return this.state.count === 0 ? "Zero" : this.state.count;
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Upgrade;
