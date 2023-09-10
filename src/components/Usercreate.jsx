import React from 'react'
import '../styles/usercreate.css'
const Usercreate = () => {
  return (
    <div className='user-form'>
     <form>
      <label for="name">User name</label><br/>
      <input type='text'/>
      <label for="password">Password</label><br/>
      <input type='password'/>
      <button className='submit'>Create User</button>
     </form>
    </div>
  )
}

export default Usercreate
