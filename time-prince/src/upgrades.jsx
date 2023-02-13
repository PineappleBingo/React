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
        imageUrl: "https://picsum.photos/150",
      },
      {
        id: 2,
        name: "Olive Tree",
        count: 0,
        energy: 400,
        description: "This is Olive tree..",
        imageUrl: "https://picsum.photos/150",
      },
      {
        id: 3,
        name: "Tree House",
        count: 0,
        energy: 300,
        description: "This is Tree House..",
        imageUrl: "https://picsum.photos/150",
      },
    ],
  };

  //   rules of thumbs - modify state within in the component declared.
  // instead of we delete upgrade object in upgrade component, we "raising" & "Handling" Event
  handleDelete = (upgradeId) => {
    // do not update states directly.
    console.log("Delete Event Handler Called:", upgradeId);
    const upgrades = this.state.upgrades.filter((u) => u.id !== upgradeId);
    // this.setState({ upgrades : upgrades})
    this.setState({ upgrades });
  };

  handleReset = (upgrade) => {
    const upgrades = [...this.state.upgrades];
    const index = upgrades.indexOf(upgrade);
    upgrades[index] = { ...upgrade };
    upgrades[index].count = 0;
    this.setState({ upgrades });
    console.log("Reset Event Handler Called:", this.state.upgrades[index]);
  };

  handleIncrement = (upgrade) => {
    // copy orig. stage
    const upgrades = [...this.state.upgrades];
    // get index of given upgrade obj
    const index = upgrades.indexOf(upgrade);
    upgrades[index] = { ...upgrade };
    // update only given object
    upgrades[index].count++;
    // update new upgrades
    this.setState({ upgrades });
    console.log("Increment Event Handler Called:", this.state.upgrades[index]);
  };

  handleDecrement = (upgrade) => {
    const upgrades = [...this.state.upgrades];
    const index = upgrades.indexOf(upgrade);
    upgrades[index] = { ...upgrade };
    upgrades[index].count > 0
      ? upgrades[index].count--
      : (upgrades[index].count = 0);

    // upgrades[index].count--;
    this.setState({ upgrades });
    console.log("Decrement Event Handler Called:", this.state.upgrades[index]);
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
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            // instead, we can pass upgrade object
            upgrade={upgrade}
          />
        ))}
      </div>
    );
  }
}

export default Upgrades;
