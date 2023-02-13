import React, { Component } from "react";
import Potion from "./potion";

class Potions extends Component {
  state = {
    positons: [
      {
        id: "p001",
        name: "Aquatic Communicator Potion",
        count: 0,
        type: "P",
        description: "This is ... Potion",
        imageUrl: "https://picsum.photos/150",
        combination: [
          { item: 1, name: "Fish Tank", numbItem: 2 },
          { item: 2, name: "Wooden Dock", numbItem: 2 },
          { item: 3, name: "Waterslide", numbItem: 2 },
        ],
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.positons.map((potion) => (
          <Potion key={potion.id} potion={potion} />
        ))}
      </div>
    );
  }
}

export default Potions;
