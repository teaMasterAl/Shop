<script>
export default {
  name: 'IconButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<template>
  <button
    class="icon-button"
    :class="[
      color && `icon-button_color--${color}`,
      disabled && 'icon-button--disabled',
    ]"
    :type="type"
  >
    <slot />
  </button>
</template>

<style>
.icon-button {
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: currentColor;
  background-color: transparent;
  border: none;
  border-radius: 2px;
  transition: opacity 0.25s ease-in-out;
}

@media (hover: hover) {
  .icon-button:hover {
    opacity: 0.8;
  }
}

.icon-button_color--primary {
  color: var(--color-primary);
}

.icon-button_color--shade {
  color: var(--color-shade);
}

.icon-button_color--disabled {
  color: var(--color-thin);
}

.icon-button--disabled {
  cursor: not-allowed;
}
</style>
