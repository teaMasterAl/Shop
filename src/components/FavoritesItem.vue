<script>
import { mapActions } from 'vuex'
import IconButton from '@/components/IconButton.vue'
import IconTrash from '@/components/icons/IconTrash.vue'

export default {
  name: 'FavoritesItem',
  components: {
    IconButton,
    IconTrash,
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
  },
  methods: {
    ...mapActions({
      removeFavorite: 'favorites/removeFavorite',
    }),
  },
}
</script>

<template>
  <div class="favorites-item">
    <div class="favorites-item__image">
      <img :src="image" width="64" height="64" :alt="title" />
    </div>
    <div class="favorites-item__remove">
      <IconButton color="shade" @click="removeFavorite(id)">
        <IconTrash />
      </IconButton>
    </div>
    <div class="favorites-item__title">{{ title }}</div>
  </div>
</template>

<style>
.favorites-item {
  display: grid;
  grid-template-columns: 64px 1fr;
  grid-template-rows: repeat(2, min-content);
  gap: 8px var(--gap);
}

.favorites-item__image {
  grid-area: 1 / 1 / 2 / 2;
}

.favorites-item__remove {
  justify-self: end;
  grid-area: 1 / 2 / 2 / 3;
}

.favorites-item__title {
  grid-area: 2 / 1 / 3 / 3;
  font-size: 14px;
  line-height: 24px;
}
</style>
