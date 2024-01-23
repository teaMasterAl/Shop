<script>
export default {
  name: 'ThePrice',
  props: {
    amount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    price() {
      return this.amount
        ? this.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
        : '0'
    },
  },
}
</script>

<template>
  <strong class="price">
    <span class="price__amount">
      {{ price }}
    </span>
    <span class="price__currency">₽</span>
  </strong>
</template>

<style>
.price {
  display: inline-flex;
  column-gap: 4px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
}
</style>
