<template>
  <div class="items-list-wrapper">
    <Item v-for="(item, index) in listItems"
          :key="index"
          :item="item">
    </Item>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Item from '@/components/Item';

export default {
  name: 'ItemsList',
  components: {
    Item,
  },
  computed: {
    ...mapGetters([
      'listItems',
    ]),
  },
  methods: {
    ...mapActions([
      'loadItemsList',
    ]),
  },
  created() {
    this.loadItemsList();
  },
};
</script>

<style lang="scss" scoped>
  .items-list-wrapper {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fill, minmax(260px,1fr));
    padding: 84px 30px 0;
  }
</style>
