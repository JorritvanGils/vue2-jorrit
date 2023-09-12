import axios from 'axios'

export const getProducts = ({ commit }) => {
    axios.get('http://localhost:3000/products')
        .then(response => {
            commit('SET_PRODUCTS', response.data)
        }
    )
}

export const getProduct = ({ commit }, productId) => {
    axios.get(`http://localhost:3000/products/${productId}`)
        .then(response => {
            commit('SET_PRODUCT', response.data)
        }
    )
}

export const addToCart = ({ commit }, { product, quantity }) => {
    commit('ADD_TO_CART', { product, quantity })

    axios.post('http://localhost:3000/cart', {
        product_id: product.id,
        quantity
    })
        .then(response => {
            console.log(response)
        })
}

// export const getCartItems = ({ commit }) => {
//     axios.get('http://localhost:3000/cart')
//         .then(response => {
//             commit('SET_CART', response.data)
//         })
// }
