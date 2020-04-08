<template>
  <div class="item-details-wrapper">
    <div class="item-main-info" v-if="itemDetails.data">
      <Item :item="itemDetails.data"></Item>
    </div>
    <div class="item-summary" v-if="itemDetails.ad">
      <span>{{itemDetails.ad.company}}</span>
      <span>{{itemDetails.ad.url}}</span>
      <span>{{itemDetails.ad.text}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Item from '@/components/Item';

export default {
  name: 'ItemDetails',
  components: {
    Item,
  },
  computed: {
    ...mapGetters([
      'itemDetails',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .item-details-wrapper {
    padding: 84px 30px 0;
    display: flex;

    .item-main-info {
      width: 30%;
    }

    .item-summary {
      width: 70%;
      background-color: #fff;
      margin-left: 20px;
      display: flex;
    }
  }
</style>
