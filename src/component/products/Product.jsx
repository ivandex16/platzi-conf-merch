import React from "react";
import {
  ProductItemInfo,
  ProductsItem,
  H2,
  Span,
  P,
  Image,
  //Button,
} from "./styles";
import Buton from "../Alert"

const Product = ({ product , handleAddToCart,open,close}) => {


  return (
    <ProductsItem
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Image
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={product.image}
        alt={product.title}
      />
      <ProductItemInfo>
        <H2>
          {product.title}
          <Span>${product.price}</Span>
        </H2>
        <P>{product.description}</P>
      </ProductItemInfo>
      <Buton whileTap={{ scale: 0.8 }} type="button" handleAddToCart={handleAddToCart(product)} open={open} close={close}>
        Comprar
      </Buton>
    </ProductsItem>
  );
};

export default Product;
