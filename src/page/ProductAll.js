import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [products, setProducts] = useState([]);
    const [query, setQuery] = useSearchParams(); /* 진짜 외워야됨 setQuery는 안씀 */

    const getProduct = async() => {
        let searchQuery = query.get("q") || ""; /* 진짜 외워야됨 */
        console.log("query?", searchQuery);
        let url = `http://localhost:5000/products?q=${searchQuery}`; /* 진짜 외워야됨 */
        let response = await fetch(url);
        let data = await response.json();

        setProducts(data);        
    }

    useEffect(()=>{
        getProduct();
    }, [query])

  return (
    <Container>
        <Row>
            {
                products?.map((item) => (
                    <Col lg={3} key={item.id}>
                        <ProductCard item={item}/>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default ProductAll