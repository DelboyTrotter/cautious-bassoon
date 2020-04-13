<template>
  <div class="item-body"
       @click="goToDetails">
    <img class="user-avatar"
         width="96"
         height="96"
         :src="avatar"
         alt="item.avatar"
         loading="lazy">
    <div class="personal-info">
      <div class="main-info">{{name}}</div>
      <span>{{email}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemBody',
  props: {
    avatar: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
  },
  methods: {
    goToDetails() {
      this.$emit('goToItemDetails');
    },
  },
};
</script>

<style lang="scss" scoped>
  .item-body {
    overflow: hidden;
    padding: 0 20px 20px;
    cursor: pointer;

    .user-avatar {
      border-radius: 100%;
      width: 96px;
      height: 96px;
    }

    .personal-info {
      margin-top: .5rem;

      .main-info {
        font-size: 1em;
        font-weight: 400;
        color: $main-app-text-color;

        &:hover {
          color: $text-color-hover;
          transition: all .5s ease;
        }
      }

      span {
        font-size: 0.75em;
      }
    }
  }
</style>
