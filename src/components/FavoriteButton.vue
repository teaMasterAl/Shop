<script>
import { mapGetters, mapActions } from 'vuex'
import IconButton from '@/components/IconButton.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import IconHeartSolid from '@/components/icons/IconHeartSolid.vue'

export default {
  name: 'FavoriteButton',
  components: {
    IconButton,
    IconHeart,
    IconHeartSolid,
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
  computed: {
    ...mapGetters({
      isFavorite: 'favorites/getIsFavorite',
    }),
  },
  methods: {
    ...mapActions({
      addFavorite: 'favorites/addFavorite',
      removeFavorite: 'favorites/removeFavorite',
    }),
    toggle() {
      if (this.isFavorite(this.id)) {
        this.removeFavorite(this.id)
      } else {
        this.addFavorite({
          id: this.id,
          image: this.image,
          title: this.title,
        })
      }
    },
  },
}
</script>

<template>
  <IconButton class="favorite-button" color="primary" @click="toggle">
    <Transition name="favorite-button_scale">
      <div v-if="isFavorite(id)" class="favorite-button__icon">
        <IconHeartSolid />
      </div>
      <div v-else class="favorite-button__icon">
        <IconHeart />
      </div>
    </Transition>
  </IconButton>
</template>

<style>
.favorite-button {
  position: relative;
}

.favorite-button__icon {
  position: absolute;
}

.favorite-button_scale-enter-active,
.favorite-button_scale-leave-active {
  transition: all 0.25s ease-out;
}

.favorite-button_scale-enter-from {
  opacity: 0;
  transform: scale(1);
}

.favorite-button_scale-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
