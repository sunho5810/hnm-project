import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({authenticate}) => {
    /* 진짜 외워야됨 */
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login"/>
}

export default PrivateRoute