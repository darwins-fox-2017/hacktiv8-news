import React from 'react'

const NewsList = props => {
  return (
    <ul>
      {
        props.data.filter( item => {
        let regPattern = new RegExp(props.query, 'gi')
        return regPattern.test(item.title)
      }).map( (item, index) => {
        return (
          <li key={index}><a href={item.url}>{item.title}</a> <span>{item.author}</span>{item.num_comments} [{item.points}]</li>
        )
      })
      }
    </ul>
  )
}

export default NewsList
