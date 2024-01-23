<script>
import './icon.css'

export default {
  name: 'IconHeartSolid',
  props: {
    size: {
      type: Number,
      default: 24,
    },
  },
}
</script>

<template>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
  >
    <path
      fill="currentColor"
      d="M20.16 5A6.29 6.29 0 0 0 12 4.36a6.27 6.27 0 0 0-8.16 9.48l6.21 6.22a2.78 2.78 0 0 0 3.9 0l6.21-6.22a6.27 6.27 0 0 0 0-8.84Z"
    />
  </svg>
</template>
