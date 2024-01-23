<script>
export default {
  name: 'TheEmpty',
}
</script>

<template>
  <div class="empty">
    <div class="empty__emoji">😔</div>
    <div class="empty__title">
      <slot />
    </div>
  </div>
</template>

<style>
.empty {
  padding: var(--gap);
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
}

.empty__emoji,
.empty__title {
  line-height: 24px;
}

.empty__emoji {
  font-size: 24px;
}

.empty__title {
  font-size: 14px;
}
</style>
