import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Input = styled.input`
  width: 170px;
  height: 25px;
  border-radius: 4px;
`;
const Exit = styled.div`
  margin-top: -25px;
  margin-left: 160px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 1.375em !important;
  color: #EBEBER;
`;


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    }
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.search = this.props.search.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.search(this.state.term);

  }
  handleChangeSearch(event) {
    this.setState({term: event.target.value});
  }

  render() {
    let exit;
    if (this.state.term !== '') {
      exit = <Exit onClick={() => {
        this.search('');
        this.setState({term: ''});
        document.getElementById('search').value = "";
      }}>X</Exit>
    } else {
      exit = null;
    }
    return (
      <div className="search">
         <form onSubmit={this.handleSubmit}>
        <label>
        <Input id="search" type="text" name="name" placeholder="Search Reviews" onChange={this.handleChangeSearch}/>
        {exit}
        </label>
        </form>
      </div>
    )
  }
}

export default Search;

