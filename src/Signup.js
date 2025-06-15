import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='d-flex justify-content-center align-items-center  bg-primary vh-100'>
    <div className='bg-white p-3  rounded w-50 mb-5'>
        <form action="">
            <div className='mb-3'>
                <label htmlFor='name' className='p-2'>Name</label>
                <input type='text' placeholder='Enter your Name' className='form-control rounded-0'/>
            </div>
         <div className='mb-3 '>
            <label htmlFor='email' className='p-2'>Email</label>
            <input type='email' placeholder='Ennter your Email' className='form-control rounded-0' />

         </div>
         <div>
            <label htmlFor='password' className='p-2' >Password</label>
            <input type='password' placeholder='Enter your password'  className='form-control rounded-0 ' />
         </div>

         <button className='btn btn-success mt-2'>Sign Up</button>
          <div className='d-flex flex-row'>
          <p className='mt-3'>You Already have an Account ??</p>
          <Link to='/' className=' text-decoration-none bg-transparent border-0 p-2 mt-2 .text-primary' >Login</Link>
          </div>
        </form>
    </div>
   </div>
  )
}

export default Signup