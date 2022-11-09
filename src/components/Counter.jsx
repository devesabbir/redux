import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
  const { counter } = useSelector( state => state)
  const dispatch = useDispatch()

  return (
    <div className='text-center'>
        <h2 className='text-[50px]'>{counter}</h2>
        <button onClick={ () => dispatch({type:'INCREMENT'})} className='btn btn-primary mx-2'>++</button>
        <button onClick={ () => dispatch({type:'DECREMENT'})} className='btn btn-secondary mx-2'>--</button>
    </div>
  )
}

export default Counter