<template>
  <div class="item-details-wrapper">
    <div class="item-main-info" v-if="itemDetails.data">
      <Item :item="itemDetails.data"></Item>
    </div>
    <div class="item-summary" v-if="itemDetails.ad">
      <div class="item-row">
        <div class="row-header">
          <span class="label">Company</span>
        </div>
        <div class="row-body">
          <span class="value">{{company}}</span>
        </div>
      </div>
      <div class="item-row">
        <div class="row-header">
          <span class="label">Url</span>
        </div>
        <div class="row-body">
          <span class="value">{{url}}</span>
        </div>
      </div>
      <div class="item-row">
        <div class="row-header">
          <span class="label">Text</span>
        </div>
        <div class="row-body">
          <span class="value">{{text}}</span>
        </div>
      </div>
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
    company() {
      return this.itemDetails.ad.company;
    },
    url() {
      return this.itemDetails.ad.url;
    },
    text() {
      return this.itemDetails.ad.text;
    },
  },
};
</script>

<style lang="scss" scoped>
  .item-details-wrapper {
    padding: 84px 30px 0;
    display: grid;
    grid-gap: 25px;

    .item-summary {
      background-color: $card-bg;
      display: flex;
      padding: 20px;

      .item-row {
        width: 100%;
        flex-grow: 1;
        text-align: left;
        background: #f8f8f8;
        margin: 4px;
        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.03);

        .row-header {
          width: 100%;
          height: 40px;
          background: #e3e3e3;
          text-align: center;

          .label {
            text-transform: uppercase;
            font-weight: 500;
            line-height: 40px;
          }
        }

        .row-body {
          float: left;
          width: 100%;
          text-align: center;
          position: relative;
          margin-top: 20px;

          .value {
            float: left;
            width: 100%;
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .item-details-wrapper {
      .item-summary {
        flex-wrap: wrap;
      }
    }
  }
</style>
