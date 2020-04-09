<template>
  <div class="item-wrapper">
    <div class="item-header">
      <span class="material-icons">
        star_border
      </span>
      <span class="material-icons">
        more_vert
      </span>
    </div>
    <div class="item-body" @click="goToDetails(item)">
      <img class="user-avatar"
           width="96"
           height="96"
           :src="item.avatar"
           alt="item.avatar"
           loading="lazy">
      <div class="personal-info">
        <div class="main-info">{{name}}</div>
        <span>{{item.email}}</span>
      </div>
    </div>
    <div class="item-footer">
      <div class="item-id">{{id}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    name() {
      return `${this.item.first_name} ${this.item.last_name}`;
    },
    id() {
      return `Item ID: ${this.item.id}`;
    },
  },
  methods: {
    ...mapActions([
      'setItemDetails',
    ]),
    goToDetails(item) {
      this.setItemDetails(item.id);
      this.$router.push(
        {
          name: 'item',
          params: {
            id: item.id,
          },
        },
      );
    },
  },
};
</script>

<style lang="scss" scoped>
  .item-wrapper {
    border: 0;
    border-radius: 3px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.03);
    background-color: #fff;
    color: $card-main-text-color;
    cursor: default;

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
  }
</style>
