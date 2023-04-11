import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../redux/actions/productAction';

const ProductAll = () => {

    const products = useSelector((state) => state.product.products);

    const [query, setQuery] = useSearchParams(); /* 진짜 외워야됨 */

    const dispatch = useDispatch();

    const getProduct = () => {
        let searchQuery = query.get("q") || ""; /* 진짜 외워야됨 */
        console.log("query?", searchQuery);
        
        // productAction.getProduct()를 거쳐서 가게 해줌 -> 미들웨어
        // 전달해야되는 값은 매개변수로 전달
        dispatch(productAction.getProduct(searchQuery)); 
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