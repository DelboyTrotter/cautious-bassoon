<template>
  <div class="item-footer">
    <div class="item-id">{{displayId}}</div>
  </div>
</template>

<script>
export default {
  name: 'ItemFooter',
  props: {
    id: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    displayId() {
      return `Item ID: ${this.id}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .item-footer {
    background-color: $card-footer-bg;
    border-top: 1px solid rgba(77,82,89,0.07);
    color: $card-footer-text-color;
    padding: 20px;
    display: flex;

    .item-id {
      font-size: 0.75em;
    }
  }
</style>
