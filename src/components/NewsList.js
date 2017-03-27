import React from 'react'

const NewsList = props => {
  return (
    <ul>
      { props.data.filter((item) => {
        let regPattern = new RegExp('')
        return regPattern.test(item.title)
      }).map( (item, index) => {
        return (<li key={index}><a href={item.url}>{item.title}</a></li>)
      })}
    </ul>
  )
}

export default NewsList
