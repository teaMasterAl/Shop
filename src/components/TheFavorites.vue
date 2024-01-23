<script>
import { mapGetters } from 'vuex'
import FavoritesItem from '@/components/FavoritesItem.vue'
import TheEmpty from '@/components/TheEmpty.vue'

export default {
  name: 'TheFavorites',
  components: {
    FavoritesItem,
    TheEmpty,
  },
  computed: {
    ...mapGetters({
      favorites: 'favorites/getFavorites',
    }),
  },
}
</script>

<template>
  <div v-if="favorites.length" class="favorites">
    <div v-for="item in favorites" :key="item.id" class="favorites__item">
      <FavoritesItem :id="item.id" :image="item.image" :title="item.title" />
    </div>
  </div>
  <TheEmpty v-else>Вы еще ничего не добавили в избранное</TheEmpty>
</template>

<style>
.favorites {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0;
}

.favorites__item {
  padding: var(--gap);
  border-bottom: 1px solid var(--color-thin);
}

.favorites__item:nth-child(odd) {
  border-right: 1px solid var(--color-thin);
}
</style>
