import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    
    const Navigate = useNavigate();

    const showDetail = ()=>{
        /* 진짜 외워야됨 */
        Navigate(`/product/${item?.id}`);
    }

  return (
    <div className='product-card' onClick={showDetail}>
        <img src={item?.img} alt={item?.title + " 이미지"}/>
        <div>{item?.choice == true ? "Consciouse choice": ""}</div>
        <div>{item?.title}</div>
        <div>₩ {item?.price}</div>
        <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard