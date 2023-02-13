import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Upgrades from "./components/upgrades";
import Tonics from "./components/tonics";
import Potions from "./components/potions";

class App extends Component {
  state = {
    // upgrades: upgrades(from json),
    upgrades: [
      {
        id: 1,
        name: "Fish Tank",
        count: 10,
        energy: 600,
        description: "This is Fish Tank..",
        imageUrl: "https://picsum.photos/150",
      },
      {
        id: 2,
        name: "Wooden Dock",
        count: 10,
        energy: 400,
        description: "This is Wooden Dock..",
        imageUrl: "https://picsum.photos/150",
      },
      {
        id: 3,
        name: "Waterslide",
        count: 10,
        energy: 300,
        description: "This is Waterslide..",
        imageUrl: "https://picsum.photos/150",
      },
      {
        id: 4,
        name: "Rose Tree",
        count: 5,
        energy: 600,
        description: "This is Rose Tree..",
        imageUrl: "https://picsum.photos/150",
      },
    ],

    test_tonics: [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
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
      <React.Fragment>
        <Upgrades
          upgrades={this.state.upgrades}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <hr />
        <Tonics
          totalUpgrades={this.state.upgrades.filter((u) => u.count > 0)}
        />
        <hr />
        {/* <Potions /> */}
      </React.Fragment>
    );
  }
}

export default App;
