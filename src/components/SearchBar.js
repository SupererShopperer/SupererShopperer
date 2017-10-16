import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const styles = {
  margin: '10px',
}
const buttonStyle = {
  backgroundColor: '6d90a5',
  border: 'none',
  borderRadius: '2px',
  color: 'white',
  textAlign: 'center',
}

class SearchBar extends Component {
  render() {
    return (
      <div style={styles}>
        <form>
          <input id='search' type='text' placeholder='Search for products'/>
          <Link to='/search'>
            <button
              style={buttonStyle}
              type='submit'
              value='submit'
              onClick={() => this.props.handleSearch(document.getElementById('search').value)}
              >
              Submit
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchBar;
