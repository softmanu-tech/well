import React from 'react';
import styles from "./ProductCard.module.css";
import Buttons from './Atoms/Buttons';

interface ProductCardProps {
  ProductImage: string;  // Type for the image prop
  ProductName: string;   // Type for the name prop
  ProductPrice: string;  // Type for the price prop (could also be number)
}

const ProductCard: React.FC<ProductCardProps> = ({ ProductImage, ProductName, ProductPrice }) => {
  return (
    <div className={styles.ProductCard}>
      <div className={styles.AllProductImages}>
        <img src={ProductImage} alt="Sizzle Africa product" className={styles.ProductImage}/>
      </div>
      <div className={styles.ProductDetails}>
        <div className={styles.NamePrice}>
          <span className={styles.ProductName}>{ProductName}</span>
          <div className={styles.ProductPrice}>
            <span className={styles.currencyPrice}>Ksh. </span>
            <span className={styles.price}>{ProductPrice}</span>
          </div>
        </div>
        <Buttons ButtonText='Add To Cart' />
      </div>
    </div>
  );
};

export default ProductCard;
