import React, {Component} from 'react'

class Search extends Component {
  render() {
    return (
      <form>
        <input type="text" onChange={this.props.handleChange} />
      </form>
    )
  }
}

export default Search
