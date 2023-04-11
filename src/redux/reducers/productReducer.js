let initState = {
    products: [],
    productDetail: null
}

function productReducer(state = initState, action){
    let {type, payload} = action;

    switch (type) {
        case "GET_PRODUCT_SUCCESS":
            return {
                ...state,
                products: payload.data
            }
        case "GET_PRODUCT_DETAIL_SUCCESS":
            return {
                ...state,
                productDetail: payload.data
            }
        default:
            return {...state}
    }
}

export default productReducer;