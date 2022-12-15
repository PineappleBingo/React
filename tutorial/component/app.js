// Component:
// Small and isolated block of code


// Simplest form of component | called "Function Components" == JavaScript Function
// which accepts single Props with data and returns React element
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Equivalent in ES6 class
class Welcome extends React.Component {
    
    render() {
    
        const title = ' Staff Analyst I';
        return <h1>Hello, {this.props.name} {title}</h1>;
    // this refers to Window Object(Global Scope)(?)
  }
}

// Render example code above
// https://codepen.io/gaearon/pen/YGYmEG?editors=1010


const root = ReactDom.createRoot(document.getElementById('root'));
const element = <Welcom name="Sara" />;

root.render(element)






// Properties(Props) :
// 
// 
// 


// React Component Class (or React Compoment Type), taking parameter called Porps
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />