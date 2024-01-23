<script>
import WebFontLoader from 'webfontloader'
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    RouterView,
  },
  created() {
    WebFontLoader.load({
      google: {
        families: ['Inter:400,700:latin,cyrillic&display=swap'],
      },
    })
  },
}
</script>

<template>
  <div class="app">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
