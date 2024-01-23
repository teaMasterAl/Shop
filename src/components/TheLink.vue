<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'TheLink',
  components: {
    RouterLink,
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
  },
}
</script>

<template>
  <RouterLink class="link" active-class="link--active" :to="to" :exact="exact">
    <slot />
  </RouterLink>
</template>

<style>
.link {
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
  text-decoration: none;
  color: var(--color-primary);
  border-bottom: 2px solid transparent;
  transition: border-color 0.25s ease-in-out;
}

.link--active {
  border-color: var(--color-primary);
}
</style>
