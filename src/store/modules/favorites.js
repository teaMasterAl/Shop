export default {
  namespaced: true,
  state: {
    favorites: [
      {
        id: 2,
        image: '/uploads/images/002.png',
        title: 'Смартфон Apple iPhone 15 128Gb Black 2 SIM HK/CN',
      },
      {
        id: 4,
        image: '/uploads/images/004.png',
        title:
          'Ноутбук Apple MacBook Air 15" M2/8Gb/256Gb Midnight (MQKW3ZP/A)',
      },
    ],
  },
  mutations: {
    ADD_FAVORITE: (state, { id, image, title }) => {
      state.favorites = [{ id, image, title }, ...state.favorites]
    },
    REMOVE_FAVORITE: (state, id) => {
      state.favorites = state.favorites.filter((i) => i.id !== id)
    },
  },
  getters: {
    getCount: (state) => state.favorites.length,
    getIsFavorite: (state) => (id) => state.favorites.some((i) => i.id === id),
    getFavorites: (state) => state.favorites,
  },
  actions: {
    addFavorite({ commit }, { id, image, title }) {
      commit('ADD_FAVORITE', { id, image, title })
    },
    removeFavorite({ commit }, id) {
      commit('REMOVE_FAVORITE', id)
    },
  },
}
