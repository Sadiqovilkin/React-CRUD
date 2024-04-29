import React, { useState, state } from 'react'
import { getAll, post } from '../API/requests'
import Swal from 'sweetalert2'

const AddForm = ({ products, setproducts, getProducts }) => {
    const [name, setname] = useState("")
    const [price, setprice] = useState("")
    const [isDiscounted, setIsDiscounted] = useState("")

    const [nameError, setNameError] = useState(false);
    const [priceError, setpriceError] = useState(false);
    function checkValidation() {
        const valid = { name: false, price: false };
        if (name.length == 0) {
            setNameError(true);
            valid.name = true;
        } else {
            setNameError(false);
            valid.name = false;
        }
        if (price.length == 0) {
            valid.description = true;

            setpriceError(true);
        } else {
            setpriceError(false);
            valid.description = false;
        }

        if (valid.name || valid.description) {
            return false;
        } else {
            return true;
        }
    }
    return (
        <>
            <section>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-lg-4">
                            <label htmlFor="name">Product Name</label>
                            <input value={name} required onChange={(e) => {
                                setname(e.target.value);
                                // console.log(name);
                            }}
                                className='form-control ' id='name' type="text" placeholder='Product Name' />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="name">Product Price</label>
                            <input value={price} required onChange={(e) => {
                                setprice(e.target.value);
                                // console.log(price);
                            }} className='form-control ' id='name' type="number" placeholder='Product Price' />
                        </div>
                        <div className="col-lg-4">
                            <label htmlFor="name">Product isDiscounted</label>
                            <select className='form-control' onChange={(e) => {
                                setIsDiscounted(e.target.value);
                                console.log(isDiscounted);
                            }} name="" >
                                <option  selected disabled >Select Value</option>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-2">
                            <button onClick={async () => {
                                const valid = checkValidation();
                                if (valid) {
                                    setproducts([...products, {
                                        name: name,
                                        price: price,
                                        isDiscounted: isDiscounted
                                    }])
                                    await post("products", {
                                        name: name,
                                        price: price,
                                        isDiscounted: isDiscounted
                                    })
                                    getProducts()
                                    setname("")
                                    setprice("")
                                }
                                else{
                                    Swal.fire({
                                        position: "center",
                                        icon: "error",
                                        title: "Pls Inputs Fills",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }

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