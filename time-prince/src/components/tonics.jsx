import React, { Component } from "react";
import Tonic from "./tonic";

class Tonics extends Component {
  state = {
    tonics: [
      {
        id: "t001",
        name: "Shark Tonic",
        count: 0,
        type: "T",
        description: "This is ... Tonic",
        imageUrl: "https://picsum.photos/150",
        combination: [
          { item: 1, name: "Fish Tank", numbItem: 1 },
          { item: 2, name: "Wooden Dock", numbItem: 1 },
          { item: 3, name: "Waterslide", numbItem: 1 },
        ],
      },
    ],
  };

  handleIncrement = (tonic) => {
    const tonics = [...this.state.tonics];
    const index = this.state.tonics.indexOf(tonic);
    tonics[index] = { ...tonic };
    tonics[index].count++;
    this.setState({ tonics });
  };

  handleDecrement = (tonic) => {
    const tonics = [...this.state.tonics];
    const index = this.state.tonics.indexOf(tonic);
    tonics[index] = { ...tonic };
    tonics[index].count > 0 ? tonics[index].count-- : (tonics[index].count = 0);

    this.setState({ tonics });
  };

  handleDecreseUpgrades = () => {};

  render() {
    return (
      <div>
        <h2>Inventory:</h2>
        {this.props.totalUpgrades.map((totalUpgrade) => (
          <div>
            <span className="m-2">{totalUpgrade.name}</span>
            <span className="m-2">{totalUpgrade.count}</span>
          </div>
        ))}

        {this.state.tonics.map((tonic) => (
          <Tonic
            key={tonic.id}
            id={tonic.id}
            tonic={tonic}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Tonics;
