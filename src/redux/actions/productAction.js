function getProduct(searchQuery){
    return async(dispatch, getState)=>{
        let url = `http://localhost:5000/products?q=${searchQuery}`; /* 진짜 외워야됨 */
        let response = await fetch(url);
        let data = await response.json();

        console.log("data?", data);
        dispatch({type: "GET_PRODUCT_SUCCESS", payload: {data}});
    }
}

function getProductDetail(id){
    return async(dispatch, getState) => {
        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();

        dispatch({type: "GET_PRODUCT_DETAIL_SUCCESS", payload: {data}});
    }
}

export const productAction = {getProduct, getProductDetail};