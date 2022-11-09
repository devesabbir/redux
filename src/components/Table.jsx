import React from 'react'
import './Table.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteDataHandle } from '../redux/actions';


function Table({singleDataGet}) {
  const { data } = useSelector( state => state.devs)
  const dispatch = useDispatch()


  const handleDelete = (id) => {
     dispatch(deleteDataHandle(id))
  }

  const handleEdit = (id) => {
      dispatch({ type: 'EDIT_FORM'})
      let singleIndex = data.findIndex( index => index.id === id )
      dispatch({type:'SINGLE', payload:data[singleIndex]})
      
      singleDataGet(singleIndex)
  }


  if( data.length > 0 ) {
     return (
    <div>
      <table className='table table-dark table-striped text-center'>
            <thead className='thead-dark'>
                <tr>
                    <th>SI</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Cell</th>
                    <th>Skill</th>
                    <th>Action</th>
                </tr>
            </thead>
           <tbody>
               {
                 data.map( (data,i) => (
                    <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.cell}</td>
                    <td>{(data.skill).toString()}</td>
                    <td>
                      <div>
                           <button onClick={ () => handleEdit(data.id) } className='btn btn-success mx-2'>Edit</button>
                           <button onClick={ () => handleDelete(i) } className='btn btn-danger mx-2'>Delete</button>
                      </div>
                    </td>
                </tr>
                 ))
               }
           </tbody>
      </table>


    </div>
  )
  } else {
     
    return (
       <h3 className='text-center'>There is No data found!</h3>
    )

  }
  
}

export default Table