export default {
    namespaced: true,
    state: {
        show: false,
        name: '',
        phone: '',
        deliveryId: 1,
        deliveries: [
            {
                id: 1,
                name: 'Доставка'
            },
            {
                id: 2,
                name: 'Самовывоз'
            },
        ],
    },

    mutations: {
        SET_SHOW: ( state, show ) => {
            state.show = show
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_PHONE: (state, phone) => {
            state.phone = phone
        },
        SET_DELIVERY: (state, deliveryId) => {
            state.deliveryId = deliveryId
        },
    },

}