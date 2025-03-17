import React from 'react'
import { useUser } from '../../context'

const Trash = () => {
    const {dispatch, state} = useUser()
  return (
    <div>
        <button>1</button>
      <p>{state}</p>
    </div>
  )
}

export default Trash
