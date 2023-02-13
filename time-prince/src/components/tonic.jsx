import React, { Component } from "react";

class Tonic extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.tonic.name}</h1>
        <img src={this.props.tonic.imageUrl} alt="" />
        {this.props.tonic.combination.map((item) => (
          <div className="m-2">
            <span className="btn">{item.name}</span>
            <span className="btn">{item.numbItem}</span>
          </div>
        ))}
        <span className="badge badge-warning m-1">{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.tonic)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.tonic)}
          className="btn btn-secondaty btn-sm m-1"
        >
          -
        </button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.props.tonic;
    return count === 0 ? "Zero" : count;
  }
}

export default Tonic;
