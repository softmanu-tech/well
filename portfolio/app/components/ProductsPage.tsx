import React from 'react'
import styles from './ProductsPage.module.css'
import ProductCard from './SharedComponents/ProductCard'

const ProductsPage = () => {
  return (
    <div className={styles.HotDealToday}>
        <div className={styles.hotDeal}>
            <h3 className={styles.hotDealTdayText}>Hot Deal Today</h3>
        </div>
        <div className={styles.hotDealCards}>
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        <ProductCard ProductImage='https://i.pinimg.com/236x/16/11/84/16118490c161faeebab4a2cdd3229ddb.jpg' ProductName="chair" ProductPrice="63" />
        </div>
    </div>
  )
}

export default ProductsPage