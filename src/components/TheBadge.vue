<script>
export default {
  name: 'TheBadge',
}
</script>

<template>
  <b class="badge">
    <slot />
  </b>
</template>

<style>
.badge {
  display: block;
  width: 24px;
  height: 24px;
  font-size: 11px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  color: var(--color-background);
  background-color: var(--color-primary);
  border-radius: 50%;
}
</style>
