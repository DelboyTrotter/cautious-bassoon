<template>
  <div class="item-wrapper">
    <ItemHeader></ItemHeader>
    <ItemBody :avatar="item.avatar"
              :name="name"
              :email="item.email"
              @goToItemDetails="goToDetails(item)">
    </ItemBody>
    <ItemFooter :id="item.id"></ItemFooter>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ItemHeader from './ItemHeader';
import ItemBody from './ItemBody';
import ItemFooter from './ItemFooter';

export default {
  name: 'Item',
  components: {
    ItemHeader,
    ItemBody,
    ItemFooter,
  },
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
  }
</style>
