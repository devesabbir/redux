import React, { useState } from 'react'
import Form from '../components/Form'
import Table from '../components/Table'
import { useDispatch, useSelector } from 'react-redux';
import { addDataHandle } from '../redux/actions';
import { idGenarator } from '../utility/idGenarator';
import { editDataHandle } from './../redux/actions';

function Home() { 

  const [input, setInput] = useState()
  const [check, setCheck] = useState()
  
  const dispatch = useDispatch()
  const { data } = useSelector( state => state.devs)
  const formType =  useSelector( state => state.form)
  const singleData =  useSelector( state => state.singleData)

  
  const checkboxObject = [
    {
      id:'html',
      name:'html',
      value:'html',
      label:'HTML',
   

    },

    {
      id:'css',
      name:'css',
      value:'css',
      label:'CSS',
     
    },

    {
      id:'js',
      name:'js',
      value:'javascript',
      label:'JavaScript',
     
    },

]



// Handle Data Add Submit
  const handleSubmit = (e) => {
        e.preventDefault()
  
    const formData = new FormData(e.target)
    let formPayload = Object.fromEntries(formData.entries())
    let {name,email,cell,...rest} = formPayload


    if( !name || !email|| !cell ){
        alert('All Field are required!')

    }else {
    
      let payload = {
        id: idGenarator(data),
        name,email,cell,
        skill:Object.keys(rest)
      }
       dispatch(addDataHandle(payload))
    }
  
    
  }

  // Single Data Get For Edit
 const singleDataGet = (index) => {
   let data = localStorage.getItem('devs') ? JSON.parse(localStorage.getItem('devs')) : []
   const {id, ...editData} = data[index]
   setInput((prev) => ({
      ...prev,
      ...editData
   }))
 }

// Set Edit Input
 const handleInput = (e) => {
    setInput((prev) => ({
       ...prev,
       [e.target.name]:e.target.value
    }))
 }

//  handle Checkbox
const handleCheck = (e) => {
  if(e.target.checked) {
    setCheck((prev) => ({
        ...prev,
        [e.target.value]: true
    }))
  } else {
    delete check[e.target.value]
  }
}


// Handle Edit Submit 

 const handleEditSubmit = (e) => {
    e.preventDefault()
    
    let payload = {
       ...input,
       skill:Object.keys(check)
    }

    dispatch(editDataHandle(payload, singleData.id))
    dispatch({type:'ADD_FORM'})

 }


  return (
  <div className="flex justify-center max-w-[1200px] mx-auto gap-x-7 pt-6">
    <div className='basis-[70%]'>
       <Table singleDataGet={singleDataGet} />
    </div>
    <div className='basis-[30%]'>
      {
        formType === 'addForm' ? 
      <>
     <h2>Add Data</h2>
     <Form onSubmit={ handleSubmit } >
       <div class="form-group">
         <label for="exampleFormControlInput1">Name:</label>
         <input name='name' type="text" className="form-control"  id="exampleFormControlInput1" placeholder="Name...."/>
       </div>

       <div class="form-group">
         <label for="exampleFormControlInput1">Email:</label>
         <input name='email' type="text" className="form-control"  id="exampleFormControlInput1" placeholder="Email...."/>
       </div>

       <div class="form-group">
         <label for="exampleFormControlInput1">Name:</label>
         <input name='cell' type="text" className="form-control"  id="exampleFormControlInput1" placeholder="Cell...."/>
       </div>

       <div class="form-group">

         {
          checkboxObject.map( (item,i) => (
              <span style={{margin:'0 5px'}} key={i}>
                   <label for={item.id}>{item.label}</label>
                   <input id={item.id} type="checkbox" name={item.name} value={item.value} />
              </span>
          ))
         }
          
       </div>

       <div class="form-group">
         <input type="submit" className="btn bg-primary w-full mt-2"  id="exampleFormControlInput1" value={'Add Data'} />
       </div>
       </Form> 

        </> : <>
     <h2>Edit Data</h2>
     <Form onSubmit={ handleEditSubmit } >
       <div class="form-group">
         <label for="exampleFormControlInput1">Name:</label>
         <input name='name' onChange={handleInput} value={input.name} type="text" className="form-control"  id="exampleFormControlInput1" placeholder="Name...."/>
       </div>
       <div class="form-group">
         <label for="exampleFormControlInput1">Email:</label>
         <input name='email' onChange={handleInput} value={input.email} type="text" className="form-control"  id="exampleFormControlInput1"  placeholder="Email...."/>
       </div>

       <div class="form-group">
         <label for="exampleFormControlInput1">Name:</label>
         <input name='cell' onChange={handleInput} value={input.cell} type="text" className="form-control"  id="exampleFormControlInput1"  placeholder="Cell...."/>
       </div>
  
       <div class="form-group">
       {
          checkboxObject.map( (item,i) => (
              <span style={{margin:'0 5px'}} key={i}>
                   <label for={item.id}>{item.label}</label>
                   <input onChange={handleCheck} id={item.id} type="checkbox" name={item.name} value={item.value} />
              </span>
          ))
         }    
                
        </div>

        <div class="form-group">
         <input type="submit" className="btn bg-primary w-full mt-2"  id="exampleFormControlInput1" value={'Done'} />
       </div>     


       </Form> 
        </>
      }
    
     </div>    
   </div>
  )
}

export default Home 