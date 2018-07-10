import React from 'react';
import './AnimalMashup.css';

class AnimalMashup extends React.Component
{
  render ()
  {
    const {animals} = this.props;

    const animalMashupComponents = animals.map((animal) =>
    {
      return (
        <div className="col-sm-4 animalCard" key={animal.id}>
          <h3>{animal.name}</h3>
          <img src={animal.imgUrl} alt="animal" />
          <p>{animal.description}</p>
        </div>
      );
    });

    return (
      <div className="AnimalMashup">
        <h2>Animal Mashup</h2>
        <div className="row">{animalMashupComponents}</div>
      </div>
    );
  }
}

export default AnimalMashup;
