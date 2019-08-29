import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleChangeSearch(event) {
    this.setState({term: event.target.value});
  }
  render() {

    return (
      <div className="search">
         <form onSubmit={this.handleSubmit}>
        <label>
        <input type="text" name="name" placeholder="Search Reviews" onChange={this.handleChangeSearch}/>
        </label>
        </form>
        <button className="create-submit-button" type="submit" onClick={() =>
          this.props.search(this.state.term)
          }>Search</button>
      </div>
    )
  }
}

export default Search;

