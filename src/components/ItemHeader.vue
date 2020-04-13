<template functional>
  <div class="item-header">
      <span class="material-icons">
        star_border
      </span>
    <span class="material-icons">
        more_vert
      </span>
  </div>
</template>

<script>
export default {
  name: 'ItemHeader',
};
</script>

<style lang="scss" scoped>
  .item-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 20px 10px;

    span {
      cursor: pointer;

      &:hover {
        color: $accent-color;
      }
    }
  }
</style>
