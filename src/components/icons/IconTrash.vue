<script>
import './icon.css'

export default {
  name: 'IconTrash',
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
      fill="#8C959C"
      d="M20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4V5Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10v11Z"
    />
  </svg>
</template>