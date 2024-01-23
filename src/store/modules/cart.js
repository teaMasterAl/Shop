export default {
  namespaced: true,
  state: {
    products: [
      {
        id: 4,
        image: '/uploads/images/004.png',
        title:
          'Ноутбук Apple MacBook Air 15" M2/8Gb/256Gb Midnight (MQKW3ZP/A)',
        price: 179999,
        quantity: 7,
        count: 1,
      },
    ],
  },
  mutations: {
    ADD_PRODUCT: (state, { id, image, title, price, quantity }) => {
      state.products.push({ id, image, title, price, quantity, count: 1 })
    },
    REMOVE_PRODUCT: (state, id) => {
      const removeIndex = state.products.findIndex(product => product.id === id)
      state.products.splice(removeIndex, 1)
    },
    CLEAR_PRODUCTS: (state) => {
      state.products = []
    },
    SET_COUNT_PRODUCT: (state, { id, count }) => {
      const product = state.products.find(product => product.id === id)
      product.count = count
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getIsInCart: (state) => (id) => state.products.some((i) => i.id === id),
    getTotal: (state) => state.products.reduce((acc, {price, count}) => {
      return acc += price * count
    }, 0),
    getTotalCount: (state) => state.products.reduce((acc, {count}) => {
      return acc += count
    }, 0),
  },
  actions: {
    addProduct({ commit }, { id, image, title, price, quantity }) {
      commit('ADD_PRODUCT', { id, image, title, price, quantity, count: 1 })
    },
    removeProduct({ commit }, id) {
      commit('REMOVE_PRODUCT', id)
    },
    setCountProduct({ commit }, { id, count }) {
      commit('SET_COUNT_PRODUCT', { id, count })
    },
  },
}
