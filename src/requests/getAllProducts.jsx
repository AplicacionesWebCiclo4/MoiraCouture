import axios from 'axios';

async function getAllProducts() {

    let { data } = await axios.get('https://moiracouture-api.vercel.app/api/products');

    return data
}

export default getAllProducts;