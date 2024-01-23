<script>
import { mapActions } from 'vuex'
import ThePrice from '@/components/ThePrice.vue'
import FavoriteButton from '@/components/FavoriteButton.vue'
import IconButton from '@/components/IconButton.vue'
import IconTrash from '@/components/icons/IconTrash.vue'
import IconMinus from "@/components/icons/IconMinus.vue";
import IconPlus from "@/components/icons/IconPlus.vue";

export default {
  name: 'CartItem',
  components: {
    ThePrice,
    FavoriteButton,
    IconButton,
    IconTrash,
    IconMinus,
    IconPlus,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    minCount(){
      return this.product.count <= 1
    },
    maxCount(){
      return this.product.count >=  this.product.quantity
    },
  },
  methods: {
    ...mapActions({
      removeProduct: 'cart/removeProduct',
      setCountProduct: 'cart/setCountProduct',
    }),
    subtractCount() {
      if( this.minCount ) return;
      this.setCountProduct( { id: this.product.id, count: this.product.count - 1 } )
    },
    addCount() {
      if( this.maxCount ) return;
      this.setCountProduct( { id: this.product.id, count: this.product.count + 1 } )
    },
  }
}
</script>

<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img :src="product.image" width="64" height="64" :alt="product.title" />
    </div>

    <div class="cart-item__content">
      <div class="cart-item__header">
        <div class="cart-item__title">{{ product.title }}</div>
        <FavoriteButton :id="product.id" :image="product.image" :title="product.title" />
      </div>

      <div class="cart-item__bottom">
        <div>
          <ThePrice :amount="product.price * product.count" />
        </div>

        <div class="cart-item__controls">
          <div class="cart-item__counter">
            <IconMinus :disabled="minCount" @click="subtractCount" />
            <span class="cart-item__count">{{ product.count }}</span>
            <IconPlus :disabled="maxCount" @click="addCount" />
          </div>

          <IconButton color="primary" @click="removeProduct(product.id)">
            <IconTrash />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.cart-item {
  display: flex;
  gap: 24px;
  padding: 24px;
  border-bottom: 1px solid #E4EBF0;
}

.cart-item__content{
  flex-grow: 1;
}

.cart-item__header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.cart-item__title {
  grid-area: 1 / 2 / 2 / 4;
  font-size: 14px;
  line-height: 24px;
  width: 192px;
}

.cart-item__bottom{
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.cart-item__controls{
  display: flex;
  gap: 24px;
}

.cart-item__counter{
  display: flex;
}

.cart-item__count{
  width: 30px;
  text-align: center;
}
</style>
