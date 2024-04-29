import React, { useState } from 'react'
import { getAll, post } from '../API/requests'

const AddForm = ({products,setproducts,getProducts}) => {
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    return (
        <>
            <section>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-4">
                            <label htmlFor="name">Product Name</label>
                            <input onChange={(e) => {
                                setname(e.target.value);
                                // console.log(name);
                            }}
                                className='form-control ' id='name' type="text" placeholder='Product Name' />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="name">Product Price</label>
                            <input onChange={(e) => {
                                setprice(e.target.value);
                                // console.log(price);
                            }} className='form-control ' id='name' type="number" placeholder='Product Price' />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-2">
                            <button onClick={ async()=>{
                                setproducts([...products,{
                                    name:name,
                                    price:price
                                }])
                               await post("products",{
                                    name:name,
                                    price:price
                                })
                                getProducts()
                            }}
                            className='btn btn-primary '>
                                Submit Form
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default AddForm