<script>
import { mapGetters, mapActions } from 'vuex'
import IconButton from '@/components/IconButton.vue'
import IconCart from '@/components/icons/IconCart.vue'
import IconCartSolid from '@/components/icons/IconCartSolid.vue'

export default {
  name: 'CartButton',
  components: {
    IconButton,
    IconCart,
    IconCartSolid,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
    quantity: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapGetters({
      isInCart: 'cart/getIsInCart',
    }),
  },
  methods: {
    ...mapActions({
      addProduct: 'cart/addProduct',
    }),
    toggle() {
      if (!this.isInCart(this.id)) {
        this.addProduct({
          id: this.id,
          image: this.image,
          title: this.title,
          price: this.price,
          quantity: this.quantity
        })
      } else {
        this.$router.push({ path: '/cart' })
      }
    },
  },
}
</script>

<template>
  <IconButton class="cart-button" color="primary" @click="toggle">
    <Transition name="cart-button_scale">
      <div v-if="isInCart(id)" class="cart-button__icon">
        <IconCartSolid />
      </div>
      <div v-else class="cart-button__icon">
        <IconCart />
      </div>
    </Transition>
  </IconButton>
</template>

<style scoped>
.cart-button {
  position: relative;
}

.cart-button__icon {
  position: absolute;
}

.cart-button_scale-enter-active,
.cart-button_scale-leave-active {
  transition: all 0.25s ease-out;
}

.cart-button_scale-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.cart-button_scale-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
