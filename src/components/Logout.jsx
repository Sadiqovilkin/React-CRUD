import React from 'react'
import Swal from 'sweetalert2';

const Logout = () => {
  return (
    <button onClick={()=>{
        Swal.fire({
            position: "center",
            icon: "error",
            title: "This Btn Not Working :)",
            showConfirmButton: false,
            timer: 1500
        });
    }} className='btn btn-success  '>Logout</button>
  )
}

export default Logout