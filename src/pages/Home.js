import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
    state = {
        armories: []
      };
    
      async componentDidMount() {
        const response = await fetch('/armories');
        const body = await response.json();
        this.setState({clients: body});
      }

    render() {

        const {armories} = this.state;

        return (
            <div>
                <h2>Armory List</h2>

                {armories.map(armory =>
                  <div key={armory.id}>
                    {armory.weapon_category} | - | {armory.weapon_specs}
                  </div>
              )}
            </div>
        );
    }
}
export default Home;