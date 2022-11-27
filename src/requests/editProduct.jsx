import axios from "axios";

async function editProduct(product, token, id) {

    let { data } = await axios({
        method: 'put',
        baseURL: `https://moiracoutureback-production.up.railway.app/api/products/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: product

    })

    return data
}

export default editProduct;