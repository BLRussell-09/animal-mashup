import React from 'react';
import PropTypes from 'prop-types';
import './AddAnimal.css';

const defaultForm =
{
  name: '',
  imgUrl: '',
  desc: '',
};

class AddAnimal extends React.Component
{

  static propTypes =
  {
    onSubmit: PropTypes.func.isRequired,
  };

  state =
  {
    newAnimal: defaultForm,
  };

  formFieldStringState = (name, e) =>
  {
    const tempAnimal = {...this.state.newAnimal};
    tempAnimal[name] = e.target.value;
    this.setState({newAnimal: tempAnimal});
  };

  nameChange = (e) =>
  {
    this.formFieldStringState('name', e);
  };

  imgChange = (e) =>
  {
    this.formFieldStringState('imgUrl', e);
  };

  descChange = (e) =>
  {
    this.formFieldStringState('desc', e);
  }

  formSubmit = (e) =>
  {
    const {onSubmit} = this.props;
    e.preventDefault();
    const {newAnimal} = this.state;
    if (newAnimal.name && newAnimal.imgUrl && newAnimal.desc)
    {
      onSubmit(this.state.newAnimal);
      this.setState({newAnimal: defaultForm});
    }
  };

  render ()
  {
    const { newAnimal } = this.state;
    return (
      <div className="AddAnimal">
        <h2>Add Animal</h2>
        <div className="row">
          <div className="col-sm-12">
            <form className="form-horizontal" onSubmit={this.formSubmit}>
              <div className="form-group">
                <label className="col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    value={newAnimal.name}
                    onChange={this.nameChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Image Url</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="imgUrl"
                    placeholder="Image Url"
                    value={newAnimal.imgUrl}
                    onChange={this.imgChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Description</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="animalDesc"
                    placeholder="Describe this mythic creature."
                    value={newAnimal.desc}
                    onChange={this.descChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAnimal;
