<script>
import { mapActions } from 'vuex'
import TheCatalog from '@/components/TheCatalog.vue'

export default {
  name: 'CatalogView',
  components: {
    TheCatalog,
  },
  created() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      fetchProducts: 'catalog/fetchProducts',
    }),
  },
}
</script>

<template>
  <TheCatalog />
</template>
