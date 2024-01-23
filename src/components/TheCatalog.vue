<script>
import { mapGetters } from 'vuex'
import CatalogItem from '@/components/CatalogItem.vue'

export default {
  name: 'TheCatalog',
  components: {
    CatalogItem,
  },
  computed: {
    ...mapGetters({
      products: 'catalog/getProducts',
    }),
  },
}
</script>

<template>
  <div class="catalog">
    <div v-for="item in products" :key="item.id" class="catalog__item">
      <CatalogItem
        :id="item.id"
        :image="item.image"
        :title="item.title"
        :price="item.price"
        :quantity="item.quantity"
      />
    </div>
  </div>
</template>

<style>
.catalog__item {
  padding: var(--gap);
  border-bottom: 1px solid var(--color-thin);
}
</style>
