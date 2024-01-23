<script>
import { mapGetters, mapState } from 'vuex'
import CartItem from "@/components/CartItem.vue";
import TheCartFooter from "@/components/TheCartFooter.vue";
import TheEmpty from "@/components/TheEmpty.vue";
import TheCheckout from "@/components/TheCheckout.vue";



export default {
  name: 'TheCart',
  components: {
    CartItem,
    TheCartFooter,
    TheEmpty,
    TheCheckout,
  },
  computed: {
    ...mapGetters({
      products: 'cart/getProducts',
    }),
    ...mapState({
      show: state => state.checkout.show,
    }),
  },

}
</script>

<template>
  <div class="cart-wrapper" v-if="products.length">
    <div class="cart">
      <CartItem v-for="item in products" :key="item.id" :product="item"/>
    </div>
    <TheCartFooter />
    <TheCheckout v-if="show" />
  </div>
  <TheEmpty v-else>В корзине пока пусто</TheEmpty>
</template>