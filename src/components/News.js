import React, {Component} from 'react'

class News extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div className="example">
        <ul>
          {this.props.data.filter((item, index)=>{
            let patternFilter = new RegExp(this.props.handleKeyword,'gi')
            return patternFilter.test(item.title)
          }).map((item, index)=>{
            return(
              <li key={index}><a href={item.url} target="_blank">{item.title}</a></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default News
