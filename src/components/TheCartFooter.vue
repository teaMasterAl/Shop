<script>
import {mapMutations, mapGetters} from 'vuex'
import ThePrice from "@/components/ThePrice.vue";



export default {
  name: 'TheCartFooter',
  components: {
    ThePrice
  },
  computed: {
    ...mapGetters({
      getTotal: 'cart/getTotal',
    }),

  },
  methods: {
    ...mapMutations({
      setShow: 'checkout/SET_SHOW'
    })
  },

}
</script>

<template>
  <footer class="footer">
    <ThePrice class="footer__price" :amount="getTotal" />
    <button class="footer__button" @click="setShow(true)">Оформить</button>
  </footer>
</template>

<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 32px var(--gap);
  display: flex;
  column-gap: 24px;
  border-top: 1px solid var(--color-thin);
  align-items: center;
  justify-content: space-between;
}

.footer__price {
  font-weight: 700;
  font-size: 20px;
}

.footer__button {
  background-color: #8654CC;
  border-radius: 24px;
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  width: 152px;
  height: 48px;
}
</style>
