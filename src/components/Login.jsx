import React from 'react'
import Swal from 'sweetalert2';

const Login = () => {
  return (
    <button onClick={()=>{
        Swal.fire({
            position: "center",
            icon: "error",
            title: "This Btn Not Working :)",
            showConfirmButton: false,
            timer: 1500
        });
    }} className='btn btn-info '>Login</button>
  )
}

export default Login