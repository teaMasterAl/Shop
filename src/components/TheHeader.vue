<script>
import { mapGetters } from 'vuex'
import HeaderLink from '@/components/HeaderLink.vue'

export default {
  name: 'TheHeader',
  components: {
    HeaderLink,
  },
  computed: {
    ...mapGetters({
      favoritesCount: 'favorites/getCount',
      getTotalCount: 'cart/getTotalCount'
    }),
  },
}
</script>

<template>
  <header class="header">
    <HeaderLink to="/" exact>Каталог</HeaderLink>
    <HeaderLink to="/favorites" exact align="right" :count="favoritesCount"
      >Избранное</HeaderLink
    >
    <HeaderLink to="/cart" exact :count="getTotalCount">Корзина</HeaderLink>
  </header>
</template>

<style>
.header {
  padding: 32px var(--gap);
  display: flex;
  column-gap: 24px;
  border-bottom: 1px solid var(--color-thin);
}
</style>
