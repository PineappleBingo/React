const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const element = <h1>Hello, world</h1>;
root.render(element);

// -----------------------------------

class BaseStructure extends React.Component {
  render() {
    return (
      <div className="Base">
        <h1>Base Structure</h1>
      </div>
    );
  }
}

const root1 = ReactDOM.createRoot(
    document.getElementById('root1')
);
root1.render(<BaseStructure/>)