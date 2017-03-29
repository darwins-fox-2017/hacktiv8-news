import React from 'react'

const FormSearch = props => {
  return (
    <form>
      <input autoComplete="off" type="text" name="search" onChange={props.changeQuery} />
    </form>
  )
}

export default FormSearch
