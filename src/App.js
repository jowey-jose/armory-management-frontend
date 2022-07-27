// import logo from './logo.svg';
import './App.css';
import React , {Component} from "react";

class App extends Component {
  state = {
    armories: []
  };

  async componentDidMount() {
    const response = await fetch('/armories');
    const body = await response.json();
    this.setState({armories: body});
  }

  render() {
    const {armories} = this.state;
    
    return (
        <div className="App">
          <header className="App-header">
           <h1> I am a hero </h1>
            <div className="App-intro">
              <h2>Armory</h2>
              {armories.map(armory =>
                  <div key={armory.id}>
                    {armory.weapon_specs} ({armory.weapon_category})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;

