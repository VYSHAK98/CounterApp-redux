import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './redux/counterSlice';


function Counter() {
  const data=useSelector((state)=>state.counterSlice.value)

  // create an object
  const dispatch=useDispatch()

  return (
    <div>
      <div className='bg-black w-50 container mt-5 rounded'>
        <h1 className='text-white text-center mt-5'>
          Counter App
        </h1>
        <div className='container w-25 text-center bg-dark text-warning mt-5 mb-2'>
          <h1>{data}</h1>
          </div>
        <div className='text-center'>
          <Button onClick={()=>dispatch(decrement())} className='mb-5 mt-5' variant="danger">
            Decrement
          </Button>{' '}

          <Button onClick={()=>dispatch(reset())} className='mb-5 mt-5 ms-5' variant="secondary">
            Reset
          </Button>{' '}

          <Button onClick={()=>dispatch(increment())} className='mb-5 mt-5 ms-5' variant="success">
            Increment
          </Button>{' '}
        </div>

      </div>
    </div>
  )
}

export default Counter