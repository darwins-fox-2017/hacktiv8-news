import React, {Component} from 'react'

class NewList extends Component {

  render() {
    const filteredData = this.props.data.filter((item, index) => {
      let pattern = new RegExp(this.props.handleKeyword, 'gi')
      return pattern.test(item.title)
    })

    return (
      <ul>
        {
          filteredData.map((item, index) => {
            return (
                <li key={index}><a href={item.url}>{item.title}</a></li>
            )
          })
        }
      </ul>)
  }
}

export default NewList
