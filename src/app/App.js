import React, { Component } from 'react';
import AnimalMashup from '../components/AnimalMashup/AnimalMashup';
import AddAnimal from '../components/AddAnimal/AddAnimal';
import connection from '../firebase/connection';
import animalRequests from '../firebase/animals';
import './App.css';

class App extends Component {
  state =
  {
    animals: [],
  }

  formSubmitEvent = (newListing) =>
  {
    animalRequests.postRequest(newListing)
      .then(() =>
      {
        animalRequests.getRequest()
          .then((animals) =>
          {
            this.setState({animals});
          });
      })
      .catch((err) =>
      {
        console.error('An error with listings post', err);
      });
  };

  componentDidMount ()
  {
    connection();
    animalRequests.getRequest()
      .then((animals) =>
      {
        this.setState({animals});
      })
      .catch((err) => { console.error(err); });
  }

  render () {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <AnimalMashup animals = {this.state.animals}/>
          </div>
          <div className="col-sm-4">
            <AddAnimal onSubmit={this.formSubmitEvent}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
