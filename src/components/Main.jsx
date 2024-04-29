import React, { useEffect, useState } from 'react'
import AddForm from './AddForm'
import { getAll } from '../API/requests'

const Main = () => {
    const [products , setproducts] = useState([])
    const getProducts=()=>{
        getAll("products").then((res)=>{
            setproducts(res.data)
        })
    }
    useEffect(()=>{
       getProducts()
    },[])
    return (
        <>
            <AddForm products={products} getProducts={getProducts} setproducts={setproducts}  />
            <section>
                <div className="container py-3">
                    <table className='table table-bordered '>
                        <thead className='table-dark '>
                            <tr>
                                <th>№</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Favorite</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>

                        </thead>
                        <tbody>
                         { products && products.map((el)=>
                            <tr key={el.id}>
                                <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.price}</td>
                            <td> <button className='btn btn-primary '>Favorite</button> </td>
                            <td> <button className='btn btn-danger '>Delete</button> </td>
                            <td> <button className='btn btn-info  '>Uptdate</button> </td>
                        </tr>
                         )

                         }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default Main