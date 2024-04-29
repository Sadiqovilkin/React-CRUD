import React from 'react'
import { deleteOne } from '../API/requests'
import Swal from 'sweetalert2';

const Delete = ({ getProducts, id }) => {
    return (
        <button className='btn btn-danger ' onClick={() => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await deleteOne("products", id)
                    getProducts()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });

        }} >Delete</button>
    )
}

export default Delete