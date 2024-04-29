import React from 'react'
import { deleteOne } from '../API/requests'
import Swal from 'sweetalert2'
import Delete from './Delete'
const ProductsItem = ({element,getProducts}) => {
    return (
        <>
        <tr key={element.id} className={element.isDiscounted == "true" ?  "table-success ": "table-danger"  } >
                                <td>{element.id}</td>
                            <td>{element.name}</td>
                            <td>{element.price}</td>
                            <td> <Delete getProducts={getProducts} id={element.id}/> </td>
                            <td> <button className='btn btn-info'
                            onClick={()=>{
                                Swal.fire({
                                    position: "center",
                                    icon: "error",
                                    title: "This Btn Not Working :)",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }}>Uptdate</button> </td>
                        </tr>
        </>
    )
}

export default ProductsItem