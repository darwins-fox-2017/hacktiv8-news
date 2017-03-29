import React from 'react'

const DataList = (props) => (
  <ul>
    {props.data.filter((item, index)=> {
      let filterPattern = new RegExp(props.handleKeyword,'gi')
      return filterPattern.test(item.title)
    })
      .map((item, index) => {
      return (
        <li key={index}><a href={item.url} target="_blank">{item.title}</a> </li>
      )
      })
    }
  </ul>
)



export default DataList
