import React from 'react'
import Product from '../product/product'
import "./productList.css"
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <h1 className="pl-title">COVUS</h1>
            <p className="pl-desc">
            COVUS is a website-based software to make it easier for the public to get information
            credible information about COVID-19 in Indonesia.
            </p>
        </div>
        <div className="pl-list">
            {products.map((item) => (
                <Product key={item.id} img={item.img} link={item.link} />
            ))}
        </div>
    </div>
  )
}

export default ProductList