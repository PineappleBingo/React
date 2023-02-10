import React, { Component } from "react";
import Upgrade from "./upgrade";

// const upgrades = {
//   1: {
//     id: 1,
//     name: "Rose Tree",
//     count: 0,
//     energy: 600,
//     description: "This is rose tree..",
//     imageUrl: "https://picsum.photos/200",
//   },
//   2: {
//     id: 2,
//     name: "Olive Tree",
//     count: 0,
//     energy: 400,
//     description: "This is Olive tree..",
//     imageUrl: "https://picsum.photos/200",
//   },
//   3: {
//     id: 3,
//     name: "Tree House",
//     count: 0,
//     energy: 300,
//     description: "This is Tree House..",
//     imageUrl: "https://picsum.photos/200",
//   },
// };

class Upgrades extends Component {
  state = {
    // upgrades: upgrades,

    upgrades: [
      {
        id: 1,
        name: "Rose Tree",
        count: 0,
        energy: 600,
        description: "This is rose tree..",
        imageUrl: "https://picsum.photos/200",
      },
      {
        id: 2,
        name: "Olive Tree",
        count: 0,
        energy: 400,
        description: "This is Olive tree..",
        imageUrl: "https://picsum.photos/200",
      },
      {
        id: 3,
        name: "Tree House",
        count: 0,
        energy: 300,
        description: "This is Tree House..",
        imageUrl: "https://picsum.photos/200",
      },
    ],
  };

  //   rules of thumbs - modify state within in the component declared.
  // instead of we delete upgrade object in upgrade component, we "raising" & "Handling" Event
  handleDelete = (upgradeId) => {
    // do not update states directly.
    console.log("Event Handler Called:", upgradeId);
    const upgrades = this.state.upgrades.filter((u) => u.id !== upgradeId);
    // this.setState({ upgrades : upgrades})
    this.setState({ upgrades });
  };

  render() {
    return (
      <div>
        {this.state.upgrades.map((upgrade) => (
          <Upgrade
            key={upgrade.id}
            // id={upgrade.id}
            // name={upgrade.name}
            // energy={upgrade.energy}
            // description={upgrade.description}
            // imageUrl={upgrade.imageUrl}
            // count={upgrade.count}
            onDelete={this.handleDelete}
            // instead, we can pass upgrade object
            upgrade={upgrade}
          />
        ))}
      </div>
    );
  }
}

export default Upgrades;
