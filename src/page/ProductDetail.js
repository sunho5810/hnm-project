import React, { useEffect } from 'react'
import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction';

const ProductDetail = () => {

    /* 진짜 외워야됨 */
    // const [productDetail, setProductDetail] = useState(null);
    const productDetail = useSelector((state) => state.product.productDetail);

    const {id} = useParams();

    const dispatch = useDispatch();

    const getProductDetail = async() => {
        dispatch(productAction.getProductDetail(id));
    }

    useEffect(()=>{
        getProductDetail();
    }, [])

  return (
    <Container className='product-detail'>
        <Row>
            <Col className='product-detail_img'>
                <img src={productDetail?.img} alt={productDetail?.title + " 이미지"}/>
            </Col>
            <Col>
                <h3>{productDetail?.title}</h3>
                <h4>₩ {productDetail?.price}</h4>
                <p>{productDetail?.choice == true ? "Consciouse choice" : ""}</p>

                <Form.Select aria-label="Default select example">
                    <option>사이즈 선택</option>
                    {
                        productDetail?.size.map((item) => (
                            <option value={item} key={item}>{item}</option>
                        ))
                    }
                </Form.Select>

                <Button variant='dark' className='addProductBtn'>추가</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail