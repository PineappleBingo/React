import React, { Component } from "react";

class Potion extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.potion.name}</h1>
        <img src={this.props.potion.imageUrl} alt="" />
        {this.props.potion.combination.map((item) => (
          <div className="m-2">
            <span className="btn">{item.name}</span>
            <span className="btn">{item.numbItem}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Potion;
