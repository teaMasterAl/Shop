<script>
import ThePrice from '@/components/ThePrice.vue'
import FavoriteButton from '@/components/FavoriteButton.vue'
import CartButton from "@/components/CartButton.vue";

export default {
  name: 'CatalogItem',
  components: {
    CartButton,
    ThePrice,
    FavoriteButton,

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
}
</script>

<template>
  <div class="catalog-item">
    <div class="catalog-item__image">
      <img :src="image" width="64" height="64" :alt="title" />
    </div>
    <div class="catalog-item__title">{{ title }}</div>
    <div class="catalog-item__price">
      <ThePrice :amount="price" />
    </div>
    <div class="catalog-item__actions">
      <FavoriteButton :id="id" :image="image" :title="title" />
      <CartButton :id="id" :image="image" :title="title" :price="price" :quantity="quantity" />
    </div>
  </div>
</template>

<style>
.catalog-item {
  display: grid;
  grid-template-columns: 64px repeat(2, 1fr);
  grid-template-rows: repeat(2, min-content);
  gap: 8px 24px;
}

.catalog-item__image {
  grid-area: 1 / 1 / 3 / 2;
}

.catalog-item__title {
  grid-area: 1 / 2 / 2 / 4;
  font-size: 14px;
  line-height: 24px;
}

.catalog-item__price {
  grid-area: 2 / 2 / 3 / 3;
}

.catalog-item__actions {
  grid-area: 2 / 3 / 3 / 4;
  display: flex;
  justify-content: flex-end;
  column-gap: var(--gap);
}
</style>
