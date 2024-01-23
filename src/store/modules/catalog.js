export default {
  namespaced: true,
  state: {
    loading: false,
    products: [],
  },
  mutations: {
    SET_LOADING: (state, loading) => {
      state.loading = loading
    },
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
  },
  getters: {
    getLoading: (state) => state.loading,
    getProducts: (state) => state.products,
  },
  actions: {
    fetchProducts({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_PRODUCTS', [
        {
          id: 1,
          image: '/uploads/images/001.png',
          title: 'Смартфон Apple iPhone 13 128GB Blue',
          price: 82000,
          quantity: 5,
        },
        {
          id: 2,
          image: '/uploads/images/002.png',
          title: 'Смартфон Apple iPhone 15 128Gb Black 2 SIM HK/CN',
          price: 111990,
          quantity: 3,
        },
        {
          id: 3,
          image: '/uploads/images/003.png',
          title: 'Наушники Apple AirPods Pro 2',
          price: 28670,
          quantity: 8,
        },
        {
          id: 4,
          image: '/uploads/images/004.png',
          title: 'Ноутбук Apple MacBook Air 15" M2/8Gb/256Gb Midnight (MQKW3ZP/A)',
          price: 179999,
          quantity: 7,
        },
        {
          id: 5,
          image: '/uploads/images/005.png',
          title: 'Смарт-часы Apple Watch SE (2022) GPS 40мм Aluminum Case with Sport Band Темная ночь M/L',
          price: 24094,
          quantity: 1,
        },
      ])
      commit('SET_LOADING', false)
    },
  },
}