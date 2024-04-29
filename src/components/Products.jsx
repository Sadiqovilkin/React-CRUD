import React, { useEffect, useState } from 'react'
import AddForm from './AddForm'
import {getAll } from '../API/requests'
import Modal from './Modal'
import ProductsItem from './ProductsItem'

const Products = () => {
    const [products, setproducts] = useState([])
    const [display, setdisplay] = useState("d-none")
    const getProducts = () => {
        getAll("products").then((res) => {
            setproducts(res.data)
        })
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            <AddForm products={products} getProducts={getProducts} setproducts={setproducts} />
            <section>
                <div className="container py-3">
                    <table className='table table-bordered '>
                        <thead className='table-dark '>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>

                        </thead>
                        <tbody>
                            {products && products.map((el) =>
                                <ProductsItem getProducts={getProducts} element={el} key={el.id}/>
                            )

                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <Modal display={display} />
        </>
    )
}

export default Products