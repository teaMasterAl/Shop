<script>
import TheLink from '@/components/TheLink.vue'
import TheBadge from '@/components/TheBadge.vue'

export default {
  name: 'HeaderLink',
  components: {
    TheLink,
    TheBadge,
  },
  props: {
    to: {
      type: String,
      default: null,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Number,
      default: 0,
    },
    align: {
      type: String,
      default: '',
    },
  },
}
</script>

<template>
  <span class="header-link" :class="align && `header-link_align--${align}`">
    <TheLink :to="to" :exact="exact">
      <slot />
    </TheLink>
    <span v-if="count" class="header-link__badge">
      <TheBadge>{{ count }}</TheBadge>
    </span>
  </span>
</template>

<style>
.header-link {
  display: inline-flex;
  column-gap: 8px;
}

.header-link_align--right {
  margin-left: auto;
}
</style>
